import React, { useRef } from 'react';
import '../styles/Category.css';

export default function Category({ name, onClick }) {
  // for selecting current category
  const btnCon = useRef(null);

  // toggling for active class between categories
  function toggleActiveClass(e) {
    const activeBtns = document.querySelectorAll('.active');
    activeBtns.forEach((btn) => {
      btn.classList.remove('active');
    });
    if (!btnCon.current.classList.contains('active')) {
      btnCon.current.classList.add('active');
    }
  }

  return (
    <div className='category-item' ref={btnCon} onClick={toggleActiveClass}>
      <h4 onClick={onClick}>{name}</h4>
    </div>
  );
}
