# Fullstack Good Reads App 

This is a full stack app using React, Node/Express, MySQL and Bootstrap. Good Films uses the IMDB film ID to search for the film image, film title, tagline, synopsis, rating, and run time of a particular film. By clicking the 'Add to my films' button in the feature film card, the feature film is added to the `film_collection` database and displayed in the *Watched Films* section.

### IMPORTANT INFO!

Film ID-

The IMDB film ID is located in the URL. When you go to https://www.imdb.com/ and search for any movie, pay attention to the URL. Take for example: https://www.imdb.com/title/tt0099785/?ref_=tt_sims_tt_i_10. The film ID for this film would be *tt0099785* located between *title/* and */?ref*.

API-

This app uses the The Movie Database (TMDB) API: https://developer.themoviedb.org/reference/intro/getting-started
You'll need to create an account. Once you have one, go into *settings* and then to *API*. Here you'll find your API key.

## Set up-

### Dependencies-

- Run `npm install` in the project directory to install server-related dependencies such as Express

- `cd client` and run `npm install` to install dependencies related to React (the client).

### Database prep-

- In the `.env` file, make sure the following MySQL authentication information is the following:

```bash
DB_HOST="127.0.0.1"
DB_USER=root
DB_NAME=film_collection
DB_PASS=root
```

- Run `npm run migrate` in a new terminal window. This will create a table called 'my_films' in your database.

### Run your development servers-

- Run `npm start` in project directory to start the Express server.

- `cd client` and run `npm run dev` to start client server in development mode with the host.
