import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Home from '../components/Home/Home';
import Products from '../components/Products/Products';
import Root from '../root/Root';

const router = createBrowserRouter([
    {
        path:'/', element: <Root/>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s') ,
        children:[
            {path:'/home', element:<Home/>},
            {path:'/products', element:<Products/>},
            {path:'/cart', element:<Cart/>},
           
        ]

    }
])

export default router;