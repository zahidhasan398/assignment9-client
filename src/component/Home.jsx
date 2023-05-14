import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeBanner from './HomeBanner';
import ChefCard from './ChefCard';
import Footer from './Footer';
import Resturant from './Resturant';

const Home = () => {
    const chefData=useLoaderData();
    console.log(chefData);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <h1 className='text-center text-3xl my-9 font-extrabold'>chef info</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
                {chefData.map(chef=><ChefCard key={chef.chefId} chef={chef}></ChefCard>)}
            </div>
            <div>
                <Resturant></Resturant>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;