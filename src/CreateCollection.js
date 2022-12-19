import React, {useState, useEffect} from "react"

const CreateCollection = () => {

  const [songs, setSongs] = useState([])
  useEffect(()=>{
      fetch('http://localhost:3003/songs')
          .then(res => res.json())
          .then(res => {
              console.log(res);
              setSongs(res);
          })
  }, [])

  const onSubmit = event => {
    event.preventDefault();
    console.log(event.target.elements);
    const title = event.target.elements.title.value
    const songId = event.target.elements.songId.value
    console.log(title, songId);

    const data = {
      title,    
      song_id: parseInt(songId)
    }
    fetch('http://localhost:3003/collections', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
  <form onSubmit={onSubmit}>
    <div className="form-group">
        <label>Collection Title</label>
      <input name="title" type="text" className="form-control"/>
      <label>Song Id</label>
      <select name="songId" className="form-control">
        {songs.map(song => (
        <option value={song.songId} key={song.songId} className="card">
          {song.title}
        </option>
        ))}
      </select>

      
    </div>
  <button type="submit" className="btn btn-success">Create Song</button>
</form>
);
}

export default CreateCollection;
