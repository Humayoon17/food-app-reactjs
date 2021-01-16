import React from 'react';
import '../styles/Category.css';

export default function Category({ name, onClick, isActive }) {
  return (
    <div className={isActive ? 'category-item active' : 'category-item'}>
      <h4 onClick={onClick}>{name}</h4>
    </div>
  );
}
