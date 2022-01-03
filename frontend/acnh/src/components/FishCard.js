function FishCard({ fish }) {
    console.log(fish, "FishCard")

    return (
        <div className="card-display">
            {fish.id}
            <img src={fish.image_uri} alt="fish" className="card-img"/>
            <p>{fish.name['name-USen']}</p>
            <p>{fish['museum-phrase']}</p>
            <p>{fish.availability.location}</p>
            <p>{fish.price}</p>
            <p>all day/all year, month time arrays, northern southern</p>
        </div>
    )
}

export default FishCard