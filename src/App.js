import {
  FastfoodOutlined,
  HomeOutlined,
  LocalPizzaOutlined,
  RestaurantMenuOutlined,
} from '@material-ui/icons';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Cat from './components/Cat';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import Card from './components/Card';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import icon from './icon/icon.svg';

function App() {
  // refs for controlling elements

  // 1: sidebar ref
  const sidebarRef = useRef();

  // states

  // 1: categories state
  const [categories, setCategories] = useState([]);

  // 2: searched meal state
  const [mealBy, setMealBy] = useState([]);

  // 3: for search input to get searched value
  const [searchTerm, setSearchTerm] = useState('beef');

  // 4: for rendering errors
  const [error, setError] = useState(false);

  // 5: for rendering loading component
  const [loading, setLoading] = useState(false);

  // for loading categories
  const [categoryLoading, setCategoryLoading] = useState(false);

  // close sidebar section when it opened in small devices
  function closeSidebar() {
    sidebarRef.current.classList.remove('open-sidebar');
    sidebarRef.current.classList.add('close-sidebar');
  }

  // open  sidebar section when it closed in small devices
  function openSidebar() {
    sidebarRef.current.classList.remove('close-sidebar');
    sidebarRef.current.classList.add('open-sidebar');
  }

  // filtering products by categories
  const handleOnCategoryClick = (e) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.innerText}`;
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setLoading(false);
        setMealBy(result.meals);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  // handling and searching products using name or by user search value
  const handleOnInputChange = (e) => {
    const term = e.target.value === '' ? 'beef' : e.target.value;
    setSearchTerm(term);
  };

  // getting all categories
  const getCategories = () => {
    setCategoryLoading(true);
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((result) => {
        setCategoryLoading(false);
        setCategories(result.categories);
      })
      .catch((error) => {
        setCategoryLoading(false);
        console.log(error);
      });
  };

  // search products by name and first letter
  const searchBy = (term) => {
    let url = '';
    if (term.length < 2) {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`;
    } else {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
    }
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setLoading(false);
        setMealBy(result.meals);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    searchBy(searchTerm);
  }, [searchTerm]);

  return (
    <div className='App'>
      <div className='left-side' ref={sidebarRef}>
        <div className='title'>
          <div className='icon'>
            <img src={icon} alt='' />
            <h4>Baa Maza</h4>
          </div>
          <Button onClick={closeSidebar} className='btn-close-sidebar'>
            <CloseIcon />
          </Button>
        </div>
        <div className='menu'>
          <MenuItem Icon={<HomeOutlined />} title='Home' isActive={true} />

          <MenuItem Icon={<EmojiObjectsOutlinedIcon />} title='Inspirations' />

          <MenuItem Icon={<FastfoodOutlined />} title='Groceries' />

          <MenuItem Icon={<LocalPizzaOutlined />} title='Top Deals' />
          <MenuItem Icon={<RestaurantMenuOutlined />} title='Restaurants' />
        </div>
      </div>
      <div className='right-side'>
        <div className='btn-toggle-sidebar'>
          <Button onClick={openSidebar}>
            <MenuIcon />
          </Button>
        </div>
        <Header handleOnInputChange={handleOnInputChange} />
        <div className='more-text'>
          <h4>Categories</h4>
          <span className='see-more'>See All</span>
        </div>
        <div className='category' id='cat'>
          <Cat
            loading={categoryLoading}
            handleOnCategoryClick={handleOnCategoryClick}
            categories={categories}
          />
        </div>

        <div className='our-gallery-text'>
          <h4>Our Products</h4>
        </div>
        <div className='products'>
          <Card mealBy={mealBy} error={error} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
