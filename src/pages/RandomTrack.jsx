import { useState } from 'react'
import { Link } from 'react-router-dom'
import getRandomTrack from '../music.js'
import { tracks } from '../music.js'

function RandomTrack() {
  const genres = [...new Set(tracks.map(track => track.genre))].sort()
  const [selectedGenre, setSelectedGenre] = useState('-')
  const [track, setTrack] = useState(() => getRandomTrack('-'))

  function handleGetRandom() {
    setTrack(getRandomTrack(selectedGenre))
  }

  return (
    <>
      <header>
        <h1>Discoverify</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="-">-</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <button onClick={handleGetRandom}>
          getRandomTrack
        </button>
        <div className="track">
          <h2>{track.title}</h2>
          <h3>{track.artist}</h3>
          <p>{track.genre}</p>
        </div>
      </main>
    </>
  )
}

export default RandomTrack
