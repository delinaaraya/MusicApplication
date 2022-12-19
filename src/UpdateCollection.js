import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCollection = () => {
  const {collectionId}=useParams()
  console.log("collectionId", collectionId);

  const [id, setId] = useState(-1)
  const [title, setTitle] = useState('')
  const [songId, setSongId] = useState(-1)
  
  const [songs, setSongs] = useState([])
  const fetchSongs = () => {
    fetch('http://localhost:3003/songs')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        setSongs(res);
    })
  }

  const fetchCollection = () => {
    console.log("log");
    fetch(`http://localhost:3003/collection/${collectionId}`)
          .then(res => res.json())
          .then(res => {
              console.log(res);
              setId(res[0].collectionId)
              setTitle(res[0].title)
              setSongId(res[0].songId)

              //setCollections(res);
          })
  }

  useEffect(()=>{
      fetchCollection();
      fetchSongs();
  }, [])

  const onSubmit=event => {
    event.preventDefault()
    console.log(id, title, songId);
    const data={
      id,
      title,
      song_id: songId
    }

    fetch('http://localhost:3003/collections', {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }

  const onSongChange=event => {
    setSongId(parseInt(event.target.value))
  }

  const onTitleChange=event => {
    setTitle(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label>Collection Title</label>
          <input value={title} onChange={onTitleChange} name="title" type="text" className="form-control"/>
          <label>Song Id</label>
          <select value={songId} name="songId" onChange={onSongChange} className="form-control">
            {songs.map(song => (
            <option value={song.songId} key={song.songId} className="card">
              {song.title}
            </option>
            ))}
          </select>

          
        </div>
      <button type="submit" className="btn btn-success">Update Song</button>
    </form>  
    );
}

export default UpdateCollection;
