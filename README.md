# Remedy

Remedy is a web app that allows the user to track past and current injuries (showing progress and status of injury),provides information about various injuries/strains and remedies to facilitate full recovery, and shows potential doctors and health stores nearby.

## Getting Started

Here's how to run the app locally:

### 0. Install dependencies

```
git clone https://github.com/jm-shi/Remedy.git
cd Remedy
npm install
```

### 1. Install PostgreSQL

Remedy uses PostgreSQL as a database. To run the app locally, you must have PostgreSQL, which can be installed [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).

Additional resources on setting up Postgres:

<ul>
  <li>https://medium.com/@martinlasek/tutorial-how-to-use-postgresql-88cddc858d9f (for Mac users)</li>
  <li>https://www.youtube.com/watch?v=qw--VYLpxG4, from 10:53 to 17:38 (for either Mac or Windows users)</li>
</ul>

Once you have Postgres installed, open the SQL Shell (psql) and run the following:

```
CREATE DATABASE remedy;

\c remedy;

CREATE TABLE injury (
    injury_id SERIAL NOT NULL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at TIMESTAMPTZ,
    is_current BOOLEAN NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    treatment TEXT,
    expected_recovery_date DATE
);

CREATE TABLE log (
    log_id SERIAL NOT NULL PRIMARY KEY,
    injury_id INTEGER NOT NULL,
    time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    content TEXT NOT NULL,
    FOREIGN KEY (injury_id) REFERENCES injury(injury_id) ON DELETE CASCADE
);

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
```

This will allow you to create/read/update/delete injury data on your local machine.

Next, when you installed PostgreSQL, you may have been prompted to come up with a password for the database superuser (postgres). In `index.js`, replace the password with the password you set for PostgreSQL.

<img src="https://github.com/jm-shi/Remedy/blob/postgres/images/docs/user.jpg" alt="user-credentials">

Alternatively, you can create a new user inside the SQL shell. For example, to create a user 'bob' with password 'watermelon':

```
CREATE USER bob WITH ENCRYPTED PASSWORD 'watermelon';
GRANT ALL PRIVILEGES ON DATABASE remedy TO bob;
```

Then adjust the username and password on `index.js` accordingly.

### 2. Include API keys

To access the APIs used in this app, create API keys for [BetterDoctor](https://developer.betterdoctor.com/), [Yelp](https://www.yelp.com/developers), and [Google Maps](https://cloud.google.com/maps-platform/). Create a .env file in the root directory and enter in these API keys.

<img src="https://github.com/jm-shi/Remedy/blob/postgres/images/docs/env.png" alt="user-credentials">

### 3. Run server

To start a server:

```
npm start
```

To watch for file changes and automatically restart the server:

```
npm run watch
```
