import React from 'react';
import CardItem from './CardItem';
import Loading from './Loading';

export default function Card({ mealBy, loading, error }) {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <center>
        <h4>Somethings went wrong!</h4>
      </center>
    );
  }
  if (mealBy === null || mealBy.length < 1) {
    return (
      <center>
        <h4>There is no product.</h4>
      </center>
    );
  }

  return (
    <>
      {mealBy.map((meal) => (
        <CardItem
          key={meal.idMeal}
          image={meal.strMealThumb}
          name={meal.strMeal}
        />
      ))}
    </>
  );
}
