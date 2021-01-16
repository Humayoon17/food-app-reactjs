import React from 'react';
import '../styles/CardItem.css';

export default function CardItem({ image, name }) {
  return (
    <div className='card-item'>
      <img src={image} alt='' />
      <h4>{name}</h4>
    </div>
  );
}
