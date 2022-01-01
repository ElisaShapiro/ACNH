import { useEffect, useState } from 'react'
import FishCard from './FishCard'

function FishContainer(){
    const [fish, setFish] = useState([])
    
    useEffect(() => {
        fetch("http://acnhapi.com/v1/fish/")
        .then(response => response.json())
        .then(data => setFish(data))
      }, [])
     
    return (
        <div className="card-container">
        {Object.keys(fish).map((oneFish) => {
            const thisFish = fish[oneFish]
            return (
                <FishCard key={thisFish.id} fish={thisFish} />
            )      
        })}
    </div>
    )


}

export default FishContainer;