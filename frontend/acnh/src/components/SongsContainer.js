import { useEffect } from 'react'

function SongsContainer(){

    useEffect(() => {
        fetch("http://acnhapi.com/v1/songs/")
        .then(response => response.json())
        .then(data => console.log(data))
      })
     
    return (
        <div>
            songs
        </div>
    )

}

export default SongsContainer;