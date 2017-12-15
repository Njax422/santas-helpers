CREATE DATABASE santasHelp_db;

USE santashelp_db;

CREATE TABLE parents (
  id INT NOT NULL AUTO_INCREMENT,
  fname VARCHAR(256) NOT NULL,
  lname VARCHAR(256) NOT NULL,
  email VARCHAR(256) NOT NULL,
  date timeStamp,
  PRIMARY KEY(id)
);
