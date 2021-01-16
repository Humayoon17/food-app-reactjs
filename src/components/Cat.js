import React from 'react';
import Category from './Category';
import Loading from './Loading';

export default function Cat({ handleOnCategoryClick, categories, loading }) {
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {categories.map((category, index) => {
        if (index < 8) {
          return (
            <Category
              isActive={false}
              key={category.idCategory}
              onClick={handleOnCategoryClick}
              name={category.strCategory}
            />
          );
        }
        return '';
      })}
    </>
  );
}
