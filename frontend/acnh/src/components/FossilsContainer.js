import { useEffect, useState } from 'react'
import FossilCard from './FossilCard'
//search by name and add donated checkbox
function FossilsContainer(){
    const [fossils, setFossils] = useState([])

    useEffect(() => {
        fetch("http://acnhapi.com/v1/fossils/")
        .then(response => response.json())
        .then(data => setFossils(data))
    }, [])
     
    return (
        <div className="card-container">
            {Object.keys(fossils).map((oneFossil) => {
                const thisFossil = fossils[oneFossil]
                return (
                    <FossilCard key={thisFossil.id} fossils={thisFossil} />
                )      
            })}
        </div>
    )

}

export default FossilsContainer;