import { useEffect, useState } from 'react'
import SongCard from './SongCard'

function SongsContainer(){
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch("http://acnhapi.com/v1/songs/")
        .then(response => response.json())
        .then(data => setSongs(data))
      }, [])
     
    return (
        <div className="card-container">
        {Object.keys(songs).map((oneSong) => {
            const thisSong = songs[oneSong]
            return (
                <SongCard key={thisSong.id} song={thisSong} />
            )      
        })}
    </div>
    )

}

export default SongsContainer;