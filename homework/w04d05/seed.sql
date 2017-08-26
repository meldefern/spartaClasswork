DROP TABLE IF EXISTS painting;

CREATE TABLE painting (

	id SERIAL PRIMARY KEY,
	photo VARCHAR(255),
	description TEXT,
	day date

);

INSERT INTO painting (photo , description, day) VALUES ('Painting 1' , 'Description 1' , '2017-07-01');
INSERT INTO painting (photo , description, day) VALUES ('Painting 2' , 'Description 2' , '2017-07-02');
INSERT INTO painting (photo , description, day) VALUES ('Painting 3' , 'Description 3' , '2017-07-03');
INSERT INTO painting (photo , description, day) VALUES ('Painting 4' , 'Description 4' , '2017-07-04');