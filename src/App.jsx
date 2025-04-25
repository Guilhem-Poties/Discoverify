import { createElement, useState } from 'react'
import './App.css'
import getRandomTrack from './music.js'

function App() {
  const [genres] = useState([
    "Pop",
    "Rock",
    "Hip-Hop",
    "Classique",
    "Grunge",
    "Jazz",
    "Soul",
    "Folk Rock",
    "Folk",
    "Funk",
    "Reggae",
    "Electro",
    "Metal"
  ]
  );

  function updateMain() {
    const genre = document.getElementById("genre_select").value;

    let track = getRandomTrack(genre);
    document.getElementById("title").innerHTML = track.title;
    document.getElementById("artist").innerHTML = track.artist;
    document.getElementById("genre").innerHTML = track.genre;
  }
  
  function loadGenres() {
    const genre_select = document.getElementById("genre_select");
    genre_select.textContent='';

    const defaultSelect = document.createElement('option');
    defaultSelect.textContent = "-";
    defaultSelect.value = "-";
    genre_select.appendChild(defaultSelect);

    genres.forEach(genre => {
      const option = document.createElement('option');
      option.textContent = genre;
      option.value = genre;
      genre_select.appendChild(option);
    })
  }
  
  window.onload = function() {
    loadGenres();
    updateMain();
  };

  return (
    <>
      <header>
        <h1>Discoverify</h1>

        <select id="genre_select"></select>
        <button onClick={() => updateMain()}>
          getRandomTrack
        </button>
      </header>
        <main>
        <div className="track">
          <h2 id='title'></h2>
          <h3 id='artist'></h3>
          <p id='genre'></p>
        </div>
      </main>
    </>
  )
}

export default App
