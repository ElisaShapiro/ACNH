import { useEffect, useState } from 'react'
import SeaCreatureCard from './SeaCreatureCard'
//search set up: by name, filter by current time/current month, and add donated checkbox
function SeaCreaturesContainer(){
    const [seaCreatures, setSeaCreatures] = useState([])
    const [northern, setNorthern] = useState(true)
    
    useEffect(() => {
        fetch("http://acnhapi.com/v1/sea/")
        .then(response => response.json())
        .then(data => setSeaCreatures(data))
    }, [])
     
    return (
        <div>
            {northern ? <button onClick={()=>setNorthern(!northern)}>Northern</button> : <button onClick={()=>setNorthern(!northern)}>Southern</button>}
            <div className="card-container">
                {Object.keys(seaCreatures).map((oneSeaCreature) => {
                    const thisSeaCreature = seaCreatures[oneSeaCreature]
                    return (
                        <SeaCreatureCard key={thisSeaCreature.id} seaCreatures={thisSeaCreature} northern={northern}/>
                    )      
                })}
            </div>
        </div>
    )

}

export default SeaCreaturesContainer