import React from 'react';
import AddCard from './features/Cards/AddCard/AddCard';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams
} from "react-router-dom";
import PostCard from './features/Cards/PostCard/PostCard';
import UpdateCard from './features/Cards/UpdateCard/UpdateCard';
import DetailsCard from './features/Cards/DetailsCard/DetailsCard';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PostCard />} />
          <Route path="/details" element={<DetailsCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
