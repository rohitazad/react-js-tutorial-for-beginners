import React from 'react';

import Footer from './Componets/Footer';
import Header from './Componets/Header';
import HomePageComponent from './Home';


const MyFirstComponent = ()=>{
    
    return(
        <>
        <Header/>
            <HomePageComponent />
        <Footer />
        </>
    )
}

export default MyFirstComponent;