function FossilCard({ fossils }) {
    console.log(fossils, "fossilcard")
    //to do: make part of set capitalized, search by set/part of?, collected/donated checkbox
    return (
        <div className="card-display">
            {fossils.id}
            <img src={fossils.image_uri} alt="fossil" className="card-img"/>
            <p>{fossils.name['name-USen']}</p>
            <p>{fossils['museum-phrase']}</p>
            <p>Price: {fossils.price} bells</p>
            <p>Part of: {fossils['part-of']} set</p>
            <label>Donated?</label>
            <input type="checkbox"/>
            
        </div>
    )
}

export default FossilCard