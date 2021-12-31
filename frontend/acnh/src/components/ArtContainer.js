import { useEffect, useState } from 'react'
import ArtCard from './ArtCard'


function ArtContainer(){
    const [art, setArt] = useState([])

    useEffect(() => {
        fetch("http://acnhapi.com/v1/art/")
        .then(response => response.json())
        .then(data => setArt(data))
    }, [])
    
    return (
        <div className="card-container">
            {Object.keys(art).map((oneArt) => {
                const thisArt = art[oneArt]
                return (
                    <ArtCard key={thisArt.id} art={thisArt} />
                )      
            })}
        </div>
    )

}

export default ArtContainer;
                        
                        
