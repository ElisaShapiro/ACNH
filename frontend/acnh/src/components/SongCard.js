function SongCard({ song }) {
    console.log(song, "SongCard")
    //to do: collected/donated checkbox 
    return (
        <div className="card-display">
            {song.id}
            <img src={song.image_uri} alt="song cover" className="card-img"/>
            <p>{song.name['name-USen']}</p>
            <p>Can Order from Nook Shopping? {song.isOrderable ? "Yes" : "No"}</p>
            <p>collected/donated checkbox</p>
        </div>
    )
}

export default SongCard