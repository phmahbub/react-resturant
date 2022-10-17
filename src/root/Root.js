import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar/NavBar';
import {Outlet, useLoaderData} from 'react-router-dom'


const Root = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8'>
            <NavBar />
            <Outlet user={user}/>
            <Footer/>
        </div>
    );
};

export default Root;