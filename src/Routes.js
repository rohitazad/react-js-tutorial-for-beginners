import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Footer from './Componets/Footer';
import Header from './Componets/Header';
import HomePageComponent from './Home';
import ConectComponent from './Conect';
import AboutComponent from './About';

const MyRoutes = ()=>{
    return (
        <>
        
            <Router>
                <Header />
                <Routes>
                    <Route element={<HomePageComponent />} path="/" />
                    <Route element={<AboutComponent />} path="/about" />
                    <Route element={<ConectComponent />} path="/conect" />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default MyRoutes;
