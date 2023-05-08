import { useState } from "react";
import "./App.css";

function searchFilms({ addFilms }) {
  let [search, setSearch] = useState({ filmId: "" });

  // input box
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setSearch((prevState) => ({ ...prevState, [name]: value }));
  };

  // submit film search button
  const handleClick = () => {
    addFilms(search);
  };

  // fetching API
  const getFilms = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=7c3d5af7d049ad0656688c01e6f47e64`
    )
      .then((response) => response.json())
      .then((search) => {
        setSearch(search);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function addFilms(search) {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(search),
    };
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=7c3d5af7d049ad0656688c01e6f47e64`,
        options
      );
      if (response.ok) {
        let search = await response.json(); // converts JSON to JavaScript for client/frontend
        setSearch(search);
      } else {
        // server error
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }

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
        <input type="text" value={search.filmId} onChange={handleInput}></input>
        {/* Button to submit fim id to API and display on page */}
        <button onClick={handleClick}>Go!</button>
      </form>
    </div>
  );
}

export default App;
