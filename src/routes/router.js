import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header';
import Home from '../components/Home/Home';
import Login from '../components/LoginRegister/Login';
import Signup from '../components/LoginRegister/Signup';
import Products from '../components/Products/Products';
import Root from '../root/Root';
import PraivateRoute from './PraivateRoute';

const router = createBrowserRouter([
    {
        path:'/', element: <Root/>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s') ,
        children:[
            {path:'/home', element:<Home/>},
            {path:'/', element:<Header/>},
            {path:'/products', element:<PraivateRoute><Products/></PraivateRoute>},
            {path:'/cart', element:<Cart/>},
            {path:'/about', element:<About/>},
            {path:'/signin', element:<Login/>},
            {path:'/signup', element:<Signup/>},
           
        ]

    }
])

export default router;