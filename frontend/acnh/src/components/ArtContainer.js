import { useEffect, useState } from 'react'
import ArtCard from './ArtCard'
//search: by name and add donated checkbox

function ArtContainer(){
    const [art, setArt] = useState([])

    useEffect(() => {
        fetch("http://acnhapi.com/v1/art/")
        .then(response => response.json())
        .then(data => setArt(data))
    }, [])
    
    return (
        <div>
            <div>All paintings cost 4980 bells and sell for 1245 bells</div>
            <div className="card-container">
                {Object.keys(art).map((oneArt) => {
                    const thisArt = art[oneArt]
                    return (
                        <ArtCard key={thisArt.id} art={thisArt} />
                    )      
                })}
            </div>
        </div>
    )

}

export default ArtContainer;
                        
                        
