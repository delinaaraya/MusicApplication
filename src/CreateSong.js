import React from "react";

const CreateSong = () => {
  const onSubmit = event => {
    event.preventDefault();
    console.log(event.target.elements);
    const {title,artist_id, year,runtime} = event.target.elements
  }

  return (
  <form onSubmit={onSubmit}>
    <div className="form-group">
        <label>Song Title</label>
      <input name="title" type="text" className="form-control"/>
      <label>Artist Id</label>
      <input name="artist_id" type="text" className="form-control"/>
      <label>Release Year</label>
      <input name="year" type="text" className="form-control"/>
      <label>Song Runtime</label>
      <input name="runtime" type="text" className="form-control"/>

    </div>
    <button type="submit" className="btn btn-success">Create Song</button>
</form>
);
}

export default CreateSong;
