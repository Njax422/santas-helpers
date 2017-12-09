DROP DATABASE IF EXISTS santasHelp_db;

CREATE DATABASE santasHelp_db;

USE santasHelp_db;

CREATE TABLE parents (
  id INT NOT NULL AUTO_INCREMENT,
  fname VARCHAR(256) notNULL,
  lname VARCHAR(256) notNULL,
  devoured boolean,
  date timeStamp,
  PRIMARY KEY(id)
);