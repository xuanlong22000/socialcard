import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PostCard from './features/Cards/PostCard/PostCard';
import DetailsCard from './features/Cards/DetailsCard/DetailsCard';
import LandingPage from './features/Cards/LandingPage/LandingPage';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<PostCard />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts/details/:id" element={<DetailsCard />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
