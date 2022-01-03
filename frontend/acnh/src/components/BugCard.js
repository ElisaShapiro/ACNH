function BugCard({ bug }) {
    console.log(bug, "BugCard")

    return (
        <div className="card-display">
            {bug.id}
            <img src={bug.image_uri} alt="bug" className="card-img"/>
            <p>{bug.name['name-USen']}</p>
            <p>{bug['museum-phrase']}</p>
            <p>{bug.availability.location}</p>
            <p>{bug.price}</p>
            <p>all day/all year, month time arrays, northern southern</p>
        </div>
    )
}

export default BugCard