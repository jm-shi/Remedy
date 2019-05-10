# Remedy

## Getting Started

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

Once you have Postgres installed, open the SQL Shell and run the following:

```
CREATE DATABASE remedy;

\c remedy;

CREATE TABLE injury (
    injury_id serial PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    is_current BOOLEAN NOT NULL,
    description TEXT
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
