// src/components/ShowList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
      <h1 className="mb-4">TV Shows</h1>
      <ul className="list-group">
        {shows.map((show) => (
          <li key={show.show.id} className="list-group-item">
            <Link to={`/show/${show.show.id}`}>
              <img
                src={show.show.image?.medium || 'https://via.placeholder.com/100'}
                alt={show.show.name}
                className="mr-3"
                style={{ maxWidth: '100px' }}
              />
              {show.show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
