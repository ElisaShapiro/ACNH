import { useEffect, useState } from 'react'
import VillagerCard from './VillagerCard'

//search backend to get name so not render 391, organize search/filter gender personality species
function VillagersContainer(){
    const [villagers, setVillagers] = useState([])
    useEffect(() => {
        fetch("http://acnhapi.com/v1/villagers/")
        .then(response => response.json())
        .then(data => setVillagers(data))
      })
     
    return (
        <div className="card-container">
            {Object.keys(villagers).map((oneVillager) => {
                const thisVillager = villagers[oneVillager]
                return (
                    <VillagerCard key={thisVillager.id} villager={thisVillager} />
                )      
            })}
        </div>
    )

}

export default VillagersContainer