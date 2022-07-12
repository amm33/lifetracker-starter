const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class User {
  static async makePublicUser(user) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
    };
  }

  static async login(credentials) {
    // user should submit their email and password
    // if any of these fields are missing, throw an error
    const requiredFields = ["email", "password"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email");
    }

    if (credentials.password.length < 1) {
      throw new BadRequestError("Input password");
    }
    // lookup the user in the db by email
    const user = await User.fetchUserByEmail(credentials.email);
    // if a user is found, compare the submitted password
    // with the password in the db
    // if there is a match, return the user
    if (user) {
      const isValid = await bcrypt.compare(credentials.password, user.password);
      if (isValid) {
        return User.makePublicUser(user);
      }
    }
    // if any of this goes wrong, throw an error
    throw new UnauthorizedError("Invalid email/password combo");
  }

  static async register(credentials) {
    // user should submit their email, pw, resvp status, and # of guests
    // if any of these fields are missing, throw an error
    const requiredFields = [
      "email",
      "password",
      "firstName",
      "lastName",
      "username",
    ];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email");
    }

    if (credentials.password.length < 1) {
      throw new BadRequestError("Input password");
    }
    // make sure no user already exists in the system with that email
    // if one does, throw an error

    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError(`Duplicate email: ${credentials.email}`);
    }

    //making sure the username doesn't already exists
    const existingUsername = await User.checkUsername(credentials.username);
    if (existingUsername) {
      throw new BadRequestError(`Duplicate user: ${credentials.username}`);
    }
    // take the users password, and hash it
    const hashedPassword = await bcrypt.hash(
      credentials.password,
      BCRYPT_WORK_FACTOR
    );
    // take the users email, and lowercase it
    const lowercasedEmail = credentials.email.toLowerCase();

    // create a new user in teh db with all their info
    const result = await db.query(
      `INSERT INTO users (
        firstName, 
        lastName, 
        email, 
        username, 
        password
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, firstName, lastName, email, username;
    `,
      [
        credentials.firstName,
        credentials.lastName,
        lowercasedEmail,
        credentials.username,
        hashedPassword,
      ]
    );
    // return the user
    const user = result.rows[0];
    return User.makePublicUser(user);
  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await db.query(query, [email.toLowerCase()]);
    const user = result.rows[0];
    return user;
  }

  //username part
  static async fetchUserByUsername(username) {
    if (!username) {
      throw new BadRequestError("No username was provided");
    }
    const query = `SELECT * FROM users WHERE username = $1`;
    const result = await db.query(query, [username.toLowerCase()]);
    const user = result.rows[0];
    return user;
  }
}

module.exports = User;
