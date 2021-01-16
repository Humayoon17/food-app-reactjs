import React from 'react';
import '../styles/MenuItem.css';

export default function MenuItem({ Icon, title, isActive }) {
  return (
    <div className='menu-item'>
      <div className={isActive ? 'menu-icon menu-active' : 'menu-icon'}>
        {Icon}
      </div>
      <p className='item-title'>{title} </p>
    </div>
  );
}
