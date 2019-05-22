CREATE TABLE sport (
  sport_id SERIAL PRIMARY KEY,
  sport_name TEXT NOT NULL,
  sport_overview TEXT,
  sport_source TEXT,
  sport_image_url TEXT
);

CREATE TABLE c_injury (
  c_injury_id SERIAL PRIMARY KEY,
  c_injury_name TEXT NOT NULL,
  c_injury_overview TEXT NOT NULL,
  c_injury_symptoms TEXT NOT NULL,
  c_injury_treatment TEXT NOT NULL,
  c_injury_source TEXT NOT NULL,
  c_injury_image_url TEXT,
  c_injury_image_source TEXT
);

CREATE TABLE sport_c_injury (
  sport_id INT REFERENCES sport (sport_id) ON UPDATE CASCADE,
  c_injury_id INT REFERENCES c_injury (c_injury_id) ON UPDATE CASCADE,
  CONSTRAINT sport_injury_pkey PRIMARY KEY (sport_id, c_injury_id)
);
