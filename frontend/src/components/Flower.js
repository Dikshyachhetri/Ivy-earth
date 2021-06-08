import React from 'react';
import { Link } from 'react-router-dom';
// import Rating from './Rating';

const Flower = ({ flower}) => {
  return (
    <>
      <div
        className='card my-4 p-3 m-3 '
        style={{ width: '13rem', height: '17rem' }}
      >
        <Link to={`/flower/${flower._id}`}>
          <img
            className='card-img-top'
            src={flower.image}
            alt=''
            style={{ height: '9rem' }}
          />
        </Link>
        <div className='card-body'>
          <Link to={`/flower/${flower._id}`}>
            <h6 className='card-title' style={{ marginBottom: '0.25rem' }}>
              {flower.name}
            </h6>

            <div
              className='my-1 card-text'
              style={{ fontSize: '0.8rem', marginTop: '1px' }}
            >
              {/* {plant.rating} from {plant.numReiews} reviews */}
              {/* <Rating
                value={plant.rating}
                text={`${plant.numReviews} reviews`}
              /> */}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Flower;
