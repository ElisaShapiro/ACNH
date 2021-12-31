import { useEffect } from 'react'

function FossilsContainer(){

    useEffect(() => {
        fetch("http://acnhapi.com/v1/fossils/")
        .then(response => response.json())
        .then(data => console.log(data))
      })
     
    return (
        <div>
            fossils
        </div>
    )

}

export default FossilsContainer;