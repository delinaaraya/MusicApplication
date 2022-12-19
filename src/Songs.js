import React, {useState, useEffect} from "react"

const Songs = () => {
    const [songs, setSongs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3003/songs')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setSongs(res);
            })
    }, [])
    
    return (
        <div>
            {songs.map(song => (
                <div key={song.songId} className="card">
                <h1>{song.title}</h1>
                <p>{song.year}</p>
                <p>{song.runtime}</p>
                </div>
            ))}
        </div>
    
  );
}

export default Songs;
