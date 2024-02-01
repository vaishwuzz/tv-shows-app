// ShowDetailsScreen.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ShowDetails from '../components/ShowDetails';

const ShowDetailsScreen = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Show Details Screen</h1>
      <ShowDetails id={id} />
    </div>
  );
};

export default ShowDetailsScreen;
