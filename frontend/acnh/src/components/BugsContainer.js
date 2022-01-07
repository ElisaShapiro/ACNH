import { useEffect, useState } from 'react'
import BugCard from './BugCard'
//search set up: by name, filter by current time/current month, and add donated checkbox
function BugsContainer(){
    const [bugs, setBugs] = useState([])
    const [northern, setNorthern] = useState(true)
    const [input, setInput] = useState("")

    useEffect(() => {
        fetch("http://acnhapi.com/v1/bugs/")
        .then(response => response.json())
        .then(data => setBugs(data))
    }, [])

    // const searchedBugs = bugs.filter((bug) => 
    //     bug.name.toLowerCase().includes(input.toLowerCase())
    // )
    // console.log(searchedBugs)

    return (
        <div>
            {northern ? <button onClick={()=>setNorthern(!northern)}>Northern</button> : <button onClick={()=>setNorthern(!northern)}>Southern</button>}
            <div className="search">
                <label htmlFor="search">Search Bugs:</label>
                <input 
                    type="text"
                    id="search"
                    placeholder="Search by name"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <label htmlFor="filter">Filter:</label>
                <select>
                    <option value="all">All</option>
                    <option value="month">This Month</option>
                    <option value="now">Available Now</option>
                </select>
                <label>Show caught/hide caught or donated</label>
                <input type="checkbox"/>
            </div>
            <div className="card-container">
                {Object.keys(bugs).map((oneBug) => {
                    const thisBug = bugs[oneBug]
                    return (
                        <BugCard key={thisBug.id} bug={thisBug} northern={northern}/>
                        )      
                    })}
            </div>
        </div>
    )

}

export default BugsContainer;