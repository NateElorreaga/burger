/*REDO THIS*/

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE allburgers (
	id Int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	/* Set ID as primary key */
	PRIMARY KEY (id)
);
