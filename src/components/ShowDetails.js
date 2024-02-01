// src/components/ShowDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [bookingFormVisible, setBookingFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    movieName: '',
    // Add more relevant details here
  });

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowDetails(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  const handleBookTicket = () => {
    setBookingFormVisible(true);
    setFormData({
      movieName: showDetails.name,
      // Set other relevant details here
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process the form data (e.g., send to server, store in local/session storage)
    // For demonstration purposes, let's just log the form data
    console.log('Form Data:', formData);
    // Hide the form after submitting
    setBookingFormVisible(false);
  };

  return (
    <div
      className="container mt-4 text-light"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-solitary-cinema-seat-placed-on-a-red-carpet-symbolizing-the-purchase-image_3788652.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {showDetails ? (
        <>
          <h1>{showDetails.name}</h1>
          <p dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
          <button className="btn btn-primary mt-3" onClick={handleBookTicket}>
            Book Ticket
          </button>

          {bookingFormVisible && (
            <form className="mt-3" onSubmit={handleFormSubmit}>
              <h2>Booking Form</h2>
              <div className="form-group">
                <label htmlFor="movieName">Movie Name:</label>
                <input
                  type="text"
                  id="movieName"
                  name="movieName"
                  value={formData.movieName}
                  readOnly
                  className="form-control"
                />
              </div>
              {/* Add more form fields for relevant details */}
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          )}

          <Link to="/" className="btn btn-secondary mt-3">
            Back to Shows
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
