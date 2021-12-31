import { useEffect } from 'react'


function ArtContainer(){

    useEffect(() => {
        fetch("http://acnhapi.com/v1/art/")
        .then(response => response.json())
        .then(data => console.log(data))
      })
     
    return (
        <div>
            art
        </div>
    )

}

export default ArtContainer;