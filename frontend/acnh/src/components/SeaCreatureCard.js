function SeaCreatureCard({ seaCreatures }) {
    console.log(seaCreatures, "SeaCreatureCard")

    return (
        <div className="card-display">
            {seaCreatures.id}
            <img src={seaCreatures.image_uri} className="card-img"/>
            <p>{seaCreatures.name['name-USen']}</p>
            <p>{seaCreatures['museum-phrase']}</p>
            <p>{seaCreatures.shadow}</p>
            <p>{seaCreatures.speed}</p>
            <p>{seaCreatures.price}</p>
            <p>all day/all year, month time arrays, northern southern</p>
        </div>
    )
}

export default SeaCreatureCard