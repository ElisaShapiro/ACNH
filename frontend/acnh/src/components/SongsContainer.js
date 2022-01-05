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
        <div>
            <div>All purchasable songs cost 3200 bells and all songs sell for 800 bells</div>
            <div className="card-container">
            {Object.keys(songs).map((oneSong) => {
                const thisSong = songs[oneSong]
                return (
                    <SongCard key={thisSong.id} song={thisSong} />
                )      
            })}
        </div>
    </div>
    )

}

export default SongsContainer;