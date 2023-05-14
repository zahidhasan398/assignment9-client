import React, { useEffect, useState } from 'react';

const Resturant = () => {
    const [resturants,setResturants]=useState([]);
    useEffect(()=>{
        fetch("resturant.json")
        .then((res)=>res.json())
        .then(data=>setResturants(data))
    },[])
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-center text-3xl font-extrabold my-10'>our availalbe resturant</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {
                resturants.map((res)=><div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={res.image} alt="Shoes" className='w-full h-[200px]' /></figure>
                <div className="card-body">
                  <h2 className="card-title">{res.name}</h2>
                  <p>{res.description}</p>
                </div>
              </div>)
              }

            </div>
            <div>
                <h1 className='text-center text-3xl font-extrabold my-10'>our food package</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                   {
                    resturants.map(res=><div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src={res.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">boof items</h2>
                      <p>{res.foodPackage.map(food=><>{food},</>)}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">{res.boof}</button>
                      </div>
                    </div>
                  </div>)
                   }
                </div>
            </div>
        </div>
    );
};

export default Resturant;