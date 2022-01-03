function SongCard({ song }) {
    console.log(song, "SongCard")

    return (
        <div className="card-display">
            {song.id}
            <img src={song.image_uri} alt="song cover" className="card-img"/>
            <p>{song.name['name-USen']}</p>
            <p>{song['sell-price']}</p>
            <p>isOrderable/price is same for all</p>
        </div>
    )
}

export default SongCard