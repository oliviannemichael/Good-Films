# Full stack Good Reads app 

This is a full stack app using React, Node/Express and MySQL. Good Films uses the IMDB film id to search for the synopsis, rating, and run time of a particular film. By clicking the 'Add to my films' button, the search for film is added to the `film_collection` database.

*NOTE* 

The IMDB film id is located in the URL. If you go to *imdb.com* and click on any movie you'll see the full URL. Take for example: https://www.imdb.com/title/tt0099785/?ref_=tt_sims_tt_i_10'. *tt0099785* located between *title/* and */?ref* would be the film id for this specific movie. 

## Set up-

### Dependencies-
Run `npm install` in the project folder to install dependencies related Express (the server).

`cd client` and run `npm install` to install dependencies related to React (the client).

### Database prep-
Make sure your `.env` file is in the project directory and that 'DB-NAME=film_collection' and the 'DB_PASS=root'. Be sure the DB_HOST is '127.0.0.1'.

### Run your development servers-
Run `npm start` in project directory to start the Express server.

`cd client` and run `npm run dev` to start client server in development mode with the host.
