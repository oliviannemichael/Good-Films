import { useState } from "react";
import "./App.css";
// import MovieStatus from "./components/MovieStatus";

function App() {
  let [filmId, setFilmId] = useState("");
  let [movieDetails, setMovieDetails] = useState({});
  let [show, setShow] = useState(false);

  // input box
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFilmId((prevState) => value);
  };

  // submit film search button
  const handleClick = (event) => {
    event.preventDefault();
    getFilms(filmId);
  };

  // fetching API
  const getFilms = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=7c3d5af7d049ad0656688c01e6f47e64`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    // conditionally rendering button
    setShow(!show);
  };

  const addWatchList = async () => {
    console.log("added");
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: movieDetails.imdb_id }),
    };
    try {
      let response = await fetch("/api/movies", options);
      if (response.ok) {
        await response.json(); // converts JSON to JavaScript for client/frontend
      } else {
        // server error
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

  return (
    <div>
      {/* A form to search for films and add them to list */}
      <form>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">Good Films</a>
            <form class="d-flex" role="search">
              {/* Two buttons- one to bring you to search page and other to bring you to my films  */}
              <button type="button" className="btn btn-outline-secondary">
                Search
              </button>
              <button type="button" className="btn btn-outline-secondary">
                My Films
              </button>
            </form>
          </div>
        </nav>

        {/* One input, search by film id */}
        <h6>Search Films</h6>
        <input type="text" value={filmId} onChange={handleInput}></input>
        {/* Button to submit fim id to API and display on page */}
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-outline-secondary"
        >
          Search IMDB movie ID!
        </button>

        {/* display movie details after search */}
        {/* how do I display image from object? */}
        <img src={movieDetails.backdrop_path} />
        <div>{movieDetails.title}</div>
        {/* how can I display genres? object within an object */}
        <div>{movieDetails.tagline}</div>
        <div>{movieDetails.overview}</div>
        <div>{movieDetails.vote_average}</div>
        <div>{movieDetails.runtime}</div>

        {/* conditionally rendered buttons to save film to to different lists */}
        {show ? (
          <button
            onClick={addWatchList}
            type="button"
            className="btn btn-outline-secondary"
          >
            Want to watch
          </button>
        ) : null}
        {show ? (
          <button type="button" className="btn btn-outline-secondary">
            Watched
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default App;

// PAIN POINTS

// how do i render image from film object?

// "my films" page. need help making a road map for that

// my_films DB
