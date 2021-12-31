import { useEffect } from 'react'

function SeaCreaturesContainer(){

    useEffect(() => {
        fetch("http://acnhapi.com/v1/sea/")
        .then(response => response.json())
        .then(data => console.log(data))
      })
     
    return (
        <div>
            sea
        </div>
    )

}

export default SeaCreaturesContainer