import React, { createContext } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar/NavBar';
import {Outlet, useLoaderData} from 'react-router-dom'

export const ProductContext = createContext()

const Root = () => {
   
    const products = useLoaderData()
    // console.log(products.meals)
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'>
            <ProductContext.Provider value={products}>
                <NavBar />
                <Outlet/>
                <Footer/>
            </ProductContext.Provider>
            
        </div>
    );
};

export default Root;