CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE

	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	chirp varchar(256),
  time TIMESTAMP,
	PRIMARY KEY (id)
);