-- Create the database
DROP DATABASE IF EXISTS notesApp;
CREATE DATABASE notesApp;
USE notesApp;

-- Create a user that can access the database
DROP USER IF EXISTS 'notes_app_user'@'localhost';
CREATE USER 'notes_app_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SQLlovesCrypto2022!';
GRANT ALL PRIVILEGES ON notesApp.* TO 'notes_app_user'@'localhost';

-- Create all the tables
DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  contents TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);