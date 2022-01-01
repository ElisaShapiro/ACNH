import { useEffect, useState } from 'react'
import BugCard from './BugCard'

function BugsContainer(){
    const [bugs, setBugs] = useState([])

    useEffect(() => {
        fetch("http://acnhapi.com/v1/bugs/")
        .then(response => response.json())
        .then(data => setBugs(data))
      }, [])
     
    return (
        <div className="card-container">
            {Object.keys(bugs).map((oneBug) => {
                const thisBug = bugs[oneBug]
                return (
                    <BugCard key={thisBug.id} bug={thisBug} />
                )      
            })}
        </div>
    )

}

export default BugsContainer;