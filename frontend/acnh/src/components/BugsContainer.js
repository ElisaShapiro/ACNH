import { useEffect, useState } from 'react'
import BugCard from './BugCard'

function BugsContainer(){
    const [bugs, setBugs] = useState([])
    const [northern, setNorthern] = useState(true)

    useEffect(() => {
        fetch("http://acnhapi.com/v1/bugs/")
        .then(response => response.json())
        .then(data => setBugs(data))
    }, [])
     
    // function monthToWord(number){
    //     if (1) return Jan
    // }
    

    return (
        <div>
            {northern ? <button onClick={()=>setNorthern(!northern)}>Northern</button> : <button onClick={()=>setNorthern(!northern)}>Southern</button>}
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