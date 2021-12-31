import { useEffect } from 'react'
//search backend to get name so not render 391
function VillagersContainer(){
    useEffect(() => {
        fetch("http://acnhapi.com/v1/villagers/")
        .then(response => response.json())
        .then(data => console.log(data))
      })
     
    return (
        <div>
            villagers
        </div>
    )

}

export default VillagersContainer