import { useState } from 'react'
import './App.css'


function App() {
  let [films, setFilms] = useState([]);

  const getFilms = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=7c3d5af7d049ad0656688c01e6f47e64`)
    .then(response => response.json())
      .then(films => {
        setFilms(films);
      })
      .catch(error => {
        console.log(error);
      });
  }



  return (
 <div className="main"> 
 <h1>Good Films</h1>

 <button>Search</button>
 <button>My Films</button>
 <h2>Search Films</h2>
 <input type="text"></input>
 <button>Go!</button>
 </div>



  );
}



export default App
