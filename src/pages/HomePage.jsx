import { useState } from 'react'
import { Link } from 'react-router-dom'
import { tracks } from '../music.js'
import './HomePage.css'

function HomePage() {
  const genres = [...new Set(tracks.map(track => track.genre))].sort()
  const [selectedGenre, setSelectedGenre] = useState('-')

  const filteredTracks = selectedGenre === '-'
    ? tracks
    : tracks.filter(track => track.genre === selectedGenre)

  return (
    <>
      <header>
        <h1>Discoverify</h1>
        <nav>
          <Link to="/random">Random Track</Link>
        </nav>
      </header>
      <main>
        <div className="catalogue-controls">
          <h2>Catalogue ({filteredTracks.length} songs)</h2>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="-">All genres</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        <div className="song-grid">
          {filteredTracks.map((track, index) => (
            <div className="song-card" key={index}>
              <h3 className="song-title">{track.title}</h3>
              <p className="song-artist">{track.artist}</p>
              <p className="song-album">{track.album}</p>
              <span className="song-genre">{track.genre}</span>
              <p className="song-description">{track.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default HomePage
