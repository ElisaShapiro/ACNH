import { useEffect, useState } from 'react'
import SeaCreatureCard from './SeaCreatureCard'

function SeaCreaturesContainer(){
    const [seaCreatures, setSeaCreatures] = useState([])

    useEffect(() => {
        fetch("http://acnhapi.com/v1/sea/")
        .then(response => response.json())
        .then(data => setSeaCreatures(data))
      }, [])
     
    return (
        <div className="card-container">
            {Object.keys(seaCreatures).map((oneSeaCreature) => {
                const thisSeaCreature = seaCreatures[oneSeaCreature]
                return (
                    <SeaCreatureCard key={thisSeaCreature.id} seaCreatures={thisSeaCreature} />
                )      
            })}
        </div>
    )

}

export default SeaCreaturesContainer