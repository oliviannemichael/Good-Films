import { useState } from "react";
import "./App.css";

function App() {
  let [filmId, setFilmId] = useState("");
  let [movieDetails, setMovieDetails] = useState({});

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
  };

  // async function addFilms(search) {
  //   let options = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(search),
  //   };
  //   try {
  //     let response = await fetch(
  //       `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=7c3d5af7d049ad0656688c01e6f47e64`,
  //       options
  //     );
  //     if (response.ok) {
  //       let search = await response.json(); // converts JSON to JavaScript for client/frontend
  //       setSearch(search);
  //     } else {
  //       // server error
  //       console.log(`Server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     console.log(`Network error: ${err.message}`);
  //   }
  // }

  return (
    <div className="main">
      {/* A form to search for films and add them to list */}
      <form>
        <h1>Good Films</h1>
        {/* Two buttons- one to bring you to search page and other to bring you to my films  */}
        <button>Search</button>
        <button>My Films</button>
        {/* One input, search by film id */}
        <h2>Search Films</h2>
        <input type="text" value={filmId} onChange={handleInput}></input>
        {/* Button to submit fim id to API and display on page */}
        <button onClick={handleClick}>Go!</button>
      </form>
    </div>
  );
}

export default App;
