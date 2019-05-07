# Remedy

## Getting Started

### Install
```
git clone https://github.com/jm-shi/Remedy.git
cd Remedy
npm install
```

### Start
To start a server:
```
npm start
```

### Watch
To watch for file changes and automatically restart the server:
```
npm run watch
```

### Sass
To compile Sass to CSS and minify the output, without starting a server:
```
gulp sass
```

To watch for changes in Sass files, without starting a server:
```
gulp sass-watch
```

### Setup
This app uses PostgreSQL as database, which can be downloaded [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads). 

Additional resources on setting up Postgres:
<ul>
  <li>https://medium.com/@martinlasek/tutorial-how-to-use-postgresql-88cddc858d9f (for Mac users)</li>
  <li>https://www.youtube.com/watch?v=qw--VYLpxG4, from 10:53 to 17:38 (for either Mac or Windows users)</li>
</ul>

Once you have Postgres installed, open the psql terminal and run the following: 
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
