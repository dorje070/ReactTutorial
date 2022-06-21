import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  const history = useNavigate();

  const gotoAboutAge = () => {
    history('/about');
  };

  if (id === '3') {
    return history('/');
  }
  return (
    <div>
      ProductPage
      {id ? (
        <div>
          {' '}
          Product ID : {id}
          <button onClick={gotoAboutAge}>See about Page</button>
        </div>
      ) : (
        <ul>
          <li>
            <Link to="1">Product 1</Link>
          </li>
          <li>
            <Link to="2">Product 2</Link>
          </li>
          <li>
            <Link to="3">Product 3</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
