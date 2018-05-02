DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table wishes.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('One billion dollars.');
INSERT INTO wishes (wish) VALUES ('Be world Scrabble champion.');
INSERT INTO wishes (wish) VALUES ('Take a really great nap.');