--users table 
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,  
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    username    TEXT NOT NULL,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    password    TEXT NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(), --user was created at this time 
    updated_at  TIMESTAMP NOT NULL DEFAULT NOW()  --user was updated at this time 
); 

-- nutrition table
CREATE TABLE nutrition (
     id          SERIAL PRIMARY KEY,
    name         TEXT NOT NULL, --name of the food 
    category     TEXT NOT NULL,  --category the food is in 
    quantity     INTEGER NOT NULL DEFAULT 1,  --quantity of the food 
    calories     INTEGER NOT NULL,
    image_url    TEXT NOT NULL,
    user_id      INTEGER NOT NULL, --user that adds to the nutrition table 
    created_at   TIMESTAMP NOT NULL DEFAULT NOW(),  --when the nutrition data was added 
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

--sleep table 
CREATE TABLE sleep (
    id           SERIAL PRIMARY KEY,
    start_time   TIMESTAMP NOT NULL DEFAULT NOW(), --start time of sleep
    end_time     TIMESTAMP NOT NULL DEFAULT NOW(), --end time of sleep 
    user_id      INTEGER NOT NULL, 
    created_at   TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

--exercise table 
CREATE TABLE exercise(
    id           SERIAL PRIMARY KEY,
    name         TEXT NOT NULL,
    category     TEXT NOT NULL,  --category of the exercise 
    duration     INTEGER NOT NULL CHECK (duration > 0), --length of stress
    intensity    INTEGER NOT NULL CHECK (intensity > 0 AND intensity <=10), --intensity of exercise
    user_id      INTEGER NOT NULL,  --user that added exercise 
    created_at   TIMESTAMP NOT NULL DEFAULT NOW(), --when exercise was added 
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
