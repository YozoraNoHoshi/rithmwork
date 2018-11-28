DROP DATABASE IF EXISTS  crud_exercise;

CREATE DATABASE crud_exercise;

\c crud_exercise

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price FLOAT CHECK (price > 0),
  can_be_returned BOOLEAN NOT NULL
);