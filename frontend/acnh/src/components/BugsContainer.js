import { useEffect } from 'react'

function BugsContainer(){

    useEffect(() => {
        fetch("http://acnhapi.com/v1/bugs/")
        .then(response => response.json())
        .then(data => console.log(data))
      })
     
    return (
        <div>
            bugs
        </div>
    )

}

export default BugsContainer;