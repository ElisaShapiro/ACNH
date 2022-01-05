function VillagerCard({ villager }) {
    console.log(villager, "VillagerCard")
    //to do: decide birthday string or date, color for each box based on personality?
    return (
        <div className="card-display">
            {villager.id}
            <img src={villager.image_uri} alt="villager" className="card-img"/>
            <p>{villager.name['name-USen']}</p>
            <p>Birthday: {villager.birthday}</p>
            <p>Gender: {villager.gender}</p>
            <p>Personality: {villager.personality}</p>
            <p>Species: {villager.species}</p>
            <p>birthday string or date</p>
        </div>
    )
}

export default VillagerCard