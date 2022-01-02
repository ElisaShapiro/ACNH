function VillagerCard({ villager }) {
    console.log(villager, "VillagerCard")

    return (
        <div className="card-display">
            {villager.id}
            <img src={villager.image_uri} className="card-img"/>
            <p>{villager.name['name-USen']}</p>
            <p>{villager.birthday}</p>
            <p>{villager.gender}</p>
            <p>{villager.personality}</p>
            <p>{villager.species}</p>
            <p>birthday string or date</p>
        </div>
    )
}

export default VillagerCard