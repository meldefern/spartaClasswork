DROP TABLE IF EXISTS painting;

CREATE TABLE painting (

	id SERIAL PRIMARY KEY,
	photo VARCHAR(255),
	description TEXT,
	day date

);

INSERT INTO painting (photo , description, day) VALUES ('scan4' , 'Watercolour on Paper, 5 H x 7.4 W in' , '2017-07-05');
INSERT INTO painting (photo , description, day) VALUES ('scan2' , 'Watercolour on Paper, 7.1 H x 10.06 W in' , '2017-08-05');
INSERT INTO painting (photo , description, day) VALUES ('scan3' , 'Watercolour on Paper, 7.1 H x 10.1 W in' , '2017-08-19');
