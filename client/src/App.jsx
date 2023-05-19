import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [filmId, setFilmId] = useState("");
  let [movieDetails, setMovieDetails] = useState({});
  let [show, setShow] = useState(false);
  // saving backend
  let [myFilms, setMyFilms] = useState([
    { id: "", film_name: "", status: "", image_url: "", imdb_film_id: "" },
  ]);

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
      body: JSON.stringify({
        name: movieDetails.title,
        url: movieDetails.poster_path,
        id: movieDetails.imdb_id,
      }),
    };
    try {
      let response = await fetch("/api", options);
      if (response.ok) {
       let movieData = await response.json(); // converts JSON to JavaScript for client/frontend
       setMyFilms(movieData)
      } else {
        // server error
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

  // use to render data from fetch
  useEffect(() => {
    getMyFilms();
  }, []);

  // fetching my films from backend
  const getMyFilms = () => {
    fetch("/api")
      .then((response) => response.json())
      .then((myFilms) => {
        // console.log(myFilms);
        setMyFilms(myFilms);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="margin">
      <div className="font">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">
              <h1>Good Films 🎬</h1>
            </a>
            <form className="d-flex" role="search">
              {/* Two buttons- one to bring you to search page and other to bring you to my films  */}
              {/* <button type="button" className="btn btn-outline-secondary">
                Search
              </button>
              <button type="button" className="btn btn-outline-secondary">
                My Films
              </button> */}
            </form>
          </div>
        </nav>

        <div className="container text-center">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <h5 className="searchFilms">Search Films</h5>
            </div>
            <div className="col"></div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              {/* One input, search by film id */}
              <input
                className="searchInput"
                type="text"
                value={filmId}
                onChange={handleInput}
              ></input>
            </div>
            <div className="col"></div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col">
              {/* Button to submit fim id to API and display on page */}
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-outline-secondary"
              >
                Search IMDB movie ID!
              </button>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
       
        <div className="container text-center">
          <div className="row">
          {show ? (
            <div className="col">
              {/* card to display movie details after search */}
              <div className="card" style={{ width: "25rem" }}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500" + movieDetails.poster_path
                  }
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{movieDetails.title}</h5>
                  <p className="card-text">{movieDetails.tagline}</p>
                  <p className="card-text">{movieDetails.overview}</p>
                  <p className="card-text">{movieDetails.vote_average}</p>
                  <p className="card-text">{movieDetails.runtime}</p>
                  <a>
                    {" "}
                    {/* conditionally render button when movie data is submitted */}
                    
                      <button
                        onClick={addWatchList}
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Add to my films
                      </button>
                    
                  </a>
                </div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
            ) : null}

            <h5 className="watchedFilms">Watched Films</h5>

            {/* return film db */}
            {myFilms.map((myFilm) => {
              return (
                <div key={myFilm.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + myFilm.image_url}
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body"></div>
                  </div>

                  {/* <img
                    src={"https://image.tmdb.org/t/p/w500" + myFilm.image_url}
                  /> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
