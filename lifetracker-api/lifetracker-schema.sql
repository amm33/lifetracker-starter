--users table 
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    username    TEXT NOT NULL,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    password    TEXT NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
); 

-- nutrition table
CREATE TABLE nutrition (
     id          SERIAL PRIMARY KEY,
    name         TEXT NOT NULL,
    category     TEXT NOT NULL,
    quantity     INTEGER NOT NULL DEFAULT 1,
    calories     INTEGER NOT NULL,
    image_url    TEXT NOT NULL,
    user_id      INTEGER NOT NULL,
    created_at   TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

--sleep table 
CREATE TABLE sleep (
    id           SERIAL PRIMARY KEY,
    start_time   TIMESTAMP NOT NULL DEFAULT NOW(), 
    end_time     TIMESTAMP NOT NULL DEFAULT NOW(), 
    user_id      INTEGER NOT NULL,
    created_at   TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

--exercise table 
CREATE TABLE exercise(
    id           SERIAL PRIMARY KEY,
    name         TEXT NOT NULL,
    category     TEXT NOT NULL,
    duration     INTEGER NOT NULL CHECK (duration > 0),
    intensity    INTEGER NOT NULL CHECK (intensity > 0 AND intensity <=10),
    user_id      INTEGER NOT NULL,
    created_at   TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
