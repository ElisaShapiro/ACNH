function ArtCard({ art }) {
    console.log(art, "artcard")
    //need hasFake info too
    return (
        <div className="card-display">
            {art.id}
            <img src={art.image_uri} alt="art" className="card-img"/>
            <p>{art.name['name-USen']}</p>
            <p>{art['museum-desc']}</p>
            
        </div>
    )
}

export default ArtCard