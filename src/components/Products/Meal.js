import React from 'react';

const Meal = ({meal}) => {
    const {strMeal, strMealThumb, strInstructions, strTags, idMeal} = meal
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
                <img src={strMealThumb} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{strMeal}</h2>
                        <p className="dark:text-gray-100">{strInstructions.slice(0,80)} ...</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Meal Details</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;