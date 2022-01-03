function FossilCard({ fossils }) {
    console.log(fossils, "fossilcard")
    
    return (
        <div className="card-display">
            {fossils.id}
            <img src={fossils.image_uri} alt="fossil" className="card-img"/>
            <p>{fossils.name['name-USen']}</p>
            <p>{fossils['museum-phrase']}</p>
            <p>{fossils.price}</p>
            
        </div>
    )
}

export default FossilCard