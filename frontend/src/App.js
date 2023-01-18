import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PostCard from './features/Cards/PostCard/PostCard';
import DetailsCard from './features/Cards/DetailsCard/DetailsCard';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PostCard />} />
          <Route path="/posts/details/:id" element={<DetailsCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
