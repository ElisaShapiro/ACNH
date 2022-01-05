import { convertMonthToWord } from '../Helpers.js'

function SeaCreatureCard({ seaCreatures, northern }) {
    console.log(seaCreatures, "SeaCreatureCard")

    const timeDisplay = seaCreatures.availability.isAllDay ? "All Day" : seaCreatures.availability.time
    const monthDisplay = seaCreatures.availability.isAllYear ? "All Year" : (northern ? 
            seaCreatures.availability['month-array-northern'].map(month=>convertMonthToWord(month)).join(", ")
            : seaCreatures.availability['month-array-southern'].map(month=>convertMonthToWord(month)).join(", ")
        )

    return (
        <div className="card-display">
            {seaCreatures.id}
            <img src={seaCreatures.image_uri} alt="sea creature" className="card-img"/>
            <p>{seaCreatures.name['name-USen']}</p>
            <p>{seaCreatures['museum-phrase']}</p>
            <p>Shadow size: {seaCreatures.shadow}</p>
            <p>Speed: {seaCreatures.speed}</p>
            <p>Price: {seaCreatures.price} bells</p>
            <p>Time: {timeDisplay}</p>
            <p>Months: {monthDisplay}</p>
            <p>caught/donated checkbox</p>
        </div>
    )
}

export default SeaCreatureCard