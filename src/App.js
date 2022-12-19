import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Songs from './Songs';
import Collections from './Collections';
import CreateSong from './CreateSong';
import CreateCollection from './CreateCollection';
import UpdateCollection from './UpdateCollection';
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <nav>
          <Link to={`/collections`}>Home</Link>
        </nav>
      <Routes>
        
              <Route path="/songs" element = { <Songs/> } />
              <Route path = "/song/create" element= { <CreateSong/> } />
                <Route path = "/collection/create" element = { <CreateCollection/>} />
                <Route path="/collections" element = { <Collections/> } />
                <Route path="/collection/update/:collectionId" element = { <UpdateCollection/> } />
            </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;
