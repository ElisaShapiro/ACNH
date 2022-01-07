import { convertMonthToWord } from '../Helpers.js'

function BugCard({ bug, northern }) {
    console.log(bug, "BugCard")

    const timeDisplay = bug.availability.isAllDay ? "All Day" : bug.availability.time
    const monthDisplay = bug.availability.isAllYear ? "All Year" : (northern ? 
            bug.availability['month-array-northern'].map(month=>convertMonthToWord(month)).join(", ")
            : bug.availability['month-array-southern'].map(month=>convertMonthToWord(month)).join(", ")
        )

    return (
        <div className="card-display">
            {bug.id}
            <img src={bug.image_uri} alt="bug" className="card-img"/>
            <p>{bug.name['name-USen']}</p>
            <p>{bug['museum-phrase']}</p>
            <p>Location: {bug.availability.location}</p>
            <p>Price: {bug.price} bells</p>
            <p>Time: {timeDisplay}</p>
            <p>Months: {monthDisplay}</p>
            <label>Caught?</label>
            <input type="checkbox"/>
            <label>Donated?</label>
            <input type="checkbox"/>
        </div>
    )
}

export default BugCard