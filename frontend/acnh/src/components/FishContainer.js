import { useEffect } from 'react'


function FishContainer(){

    useEffect(() => {
        fetch("http://acnhapi.com/v1/fish/")
        .then(response => response.json())
        .then(data => console.log(data))
      })
     
    return (
        <div>
            fish
        </div>
    )


}

export default FishContainer;