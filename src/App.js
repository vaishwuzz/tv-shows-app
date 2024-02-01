// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ShowDetailsScreen from './screens/ShowDetailsScreen';
import BookingScreen from './screens/BookingScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/show/:id" element={<ShowDetailsScreen />} />
        <Route path="/booking/:id" element={<BookingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
