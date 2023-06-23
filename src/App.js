import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Test from './pages/Test';
import InnerPage from './pages/InnerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='inner/:path/:id'  element={<InnerPage/>}/>
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;
