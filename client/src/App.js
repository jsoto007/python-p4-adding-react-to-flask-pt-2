import React, { useEffect, useState } from 'react';


function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('/movies')
      .then((resp) => resp.json())
      .then((movies) => setFilms(movies));

  }, []);
console.log(films)
return (
  <div>
    {films.map((movie) => {
      return (
        <ul key={movie.id}>
          <li>{movie.id}</li>
          <li>{movie.title}</li>
        </ul>
      )
    })}
  </div>
  )

}


export default App;

