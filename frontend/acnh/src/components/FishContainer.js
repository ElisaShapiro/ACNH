import { useEffect, useState } from 'react'
import FishCard from './FishCard'

function FishContainer(){
    const [fish, setFish] = useState([])
    const [northern, setNorthern] = useState(true)
    
    useEffect(() => {
        fetch("http://acnhapi.com/v1/fish/")
        .then(response => response.json())
        .then(data => setFish(data))
    }, [])
     
    return (
        <div>
            {northern ? <button onClick={()=>setNorthern(!northern)}>Northern</button> : <button onClick={()=>setNorthern(!northern)}>Southern</button>}
            <div className="card-container">
            {Object.keys(fish).map((oneFish) => {
                const thisFish = fish[oneFish]
                return (
                    <FishCard key={thisFish.id} fish={thisFish} northern={northern}/>
                    )      
                })}
            </div>
        </div>
    )


}

export default FishContainer;