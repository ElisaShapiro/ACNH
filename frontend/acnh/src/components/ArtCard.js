function ArtCard({ art }) {
    console.log(art, "artcard")
    //to do: make painting name capitalized, collected/donated checkbox 
    return (
        <div className="card-display">
            {art.id}
            <img src={art.image_uri} alt="art" className="card-img"/>
            <p>{art.name['name-USen']}</p>
            <p>{art['museum-desc']}</p>
            <p>Has Fake? {art.hasFake ? "Yes" : "No"}</p>
            <p>collected/donated checkbox</p>
            
        </div>
    )
}

export default ArtCard