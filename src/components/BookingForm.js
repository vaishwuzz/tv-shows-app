// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ showName }) => {
  const [userName, setUserName] = useState('');
  // Add other form fields as needed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can store data in local/session storage
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Booking Form for {showName}</h2>
      <label>
        User Name:
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      {/* Add other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
