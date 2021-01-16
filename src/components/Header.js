import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import '../styles/Header.css';

export default function Header({ handleOnInputChange }) {
  return (
    <div className='header'>
      <div className='search'>
        <SearchOutlined className='search-icon' />
        <input onChange={handleOnInputChange} placeholder='Search by name' />
      </div>
    </div>
  );
}
