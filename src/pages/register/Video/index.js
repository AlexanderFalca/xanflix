import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function VideoRegister() {
  return (
    <PageDefault>
      <h1> Video Registration</h1>
      <Link to="/register/category">Category Registration</Link>
    </PageDefault>
  );
}

export default VideoRegister;
