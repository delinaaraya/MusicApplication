import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';

const Collections = () => {
  const [collections, setCollections] = useState([])
  
  
  const fetchCollections = () => {
    console.log("log");
    fetch('http://localhost:3003/collections')
          .then(res => res.json())
          .then(res => {
              console.log(res);
              setCollections(res);
          })
  }

  useEffect(()=>{
      fetchCollections();
  }, [])

  const deleteCollection = async collectionId => {
    const url = `http://localhost:3003/collections/${collectionId}`;
    await fetch(url, {
      method: "DELETE", 
    })
    fetchCollections();
  }


  return (
      <div>
          <div>
          {collections.map( collection => (
              <div key={collection.collectionId} className="card">
              <h1>{collection.title}</h1>
              <p>{collection.songId}</p>

              <Link to={`/collection/update/${collection.collectionId}`}>Update Collection</Link>
              <button onClick={() => deleteCollection(collection.collectionId)}>Delete Collection</button>

              </div>

          ))}
          </div>
          <Link to={`/collection/create`}>Create Collection</Link>
      </div>

  
);
}

export default Collections;
