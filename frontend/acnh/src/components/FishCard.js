import { convertMonthToWord } from '../Helpers.js'

function FishCard({ fish, northern }) {
    console.log(fish, "FishCard")

    const timeDisplay = fish.availability.isAllDay ? "All Day" : fish.availability.time
    const monthDisplay = fish.availability.isAllYear ? "All Year" : (northern ? 
            fish.availability['month-array-northern'].map(month=>convertMonthToWord(month)).join(", ")
            : fish.availability['month-array-southern'].map(month=>convertMonthToWord(month)).join(", ")
        )

    return (
        <div className="card-display">
            {fish.id}
            <img src={fish.image_uri} alt="fish" className="card-img"/>
            <p>{fish.name['name-USen']}</p>
            <p>{fish['museum-phrase']}</p>
            <p>Location: {fish.availability.location}</p>
            <p>Time: {timeDisplay}</p>
            <p>Months: {monthDisplay}</p>
            <p>caught/donated checkbox</p>
        </div>
    )
}

export default FishCard