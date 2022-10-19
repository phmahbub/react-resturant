import React, { useContext } from 'react';
import { ProductContext } from '../../root/Root';
import Meal from './Meal';

const Products = () => {
    const products = useContext(ProductContext)
    const meals = products.meals
    // console.log(meals)
    return (
        <div className='grid grid-cols-4 gap-12 mt-12'>
            {
                meals.map(meal=><Meal key={meal.idMeal} meal={meal}/>)
            }
        </div>
    );
};

export default Products;