// BookingScreen.js
import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

const BookingScreen = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Booking Screen</h1>
      <BookingForm showName={`Show ${id}`} />
    </div>
  );
};

export default BookingScreen;
