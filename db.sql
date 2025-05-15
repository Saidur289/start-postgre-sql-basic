CREATE DATABASE bookDB;
-- create table 
CREATE TABLE book(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255)
);
-- delete table from database 
DROP TABLE book;
-- select all data 
SELECT *
FROM book;
-- select single data by id 
SELECT FROM book WHERE id;