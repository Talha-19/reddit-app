import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/store'

// Import components
import HomePage from './components/HomePage'; // Replace with your actual components
import PostDetailPage from './components/PostDetailPage'; // Example component for post detail

// Main App component
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;