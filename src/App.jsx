import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Header from './features/Header/Header';
import SubReddit from './features/SubReddit/SubReddit'; // Check for correct path if needed

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <SubReddit />
      </aside>
    </>
  );
}

export default App;
