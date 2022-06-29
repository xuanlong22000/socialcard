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

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PostCard />} />
          <Route path="/add" element={<AddCard />} />
          <Route path="/update/:id" element={<UpdateCard />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
