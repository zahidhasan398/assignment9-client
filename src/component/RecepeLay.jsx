import React from 'react';
import NabBur from './NabBur';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const RecepeLay = () => {
    return (
        <div>
            <NabBur></NabBur>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecepeLay;