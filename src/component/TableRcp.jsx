import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const TableRcp = ({recipes}) => {
    const [dis,setDis]=useState(false);
    const handleFavourite=(event,rcpName)=>{
        
            if(event.target.click)
            {   
                
                setDis(true);
                return toast(` favourite ${rcpName}`);
            }
            else{
                setDis(false);
            }
    }
    return (
        <div>
            <div><Toaster></Toaster></div>
            <div>
            {
                recipes.map(rcp => <div className='font-semibold my-5 border border-red-500 border-opacity-50 p-3 rounded-md'>

                    <h1><span className='text-2xl font-semibold text-red-500'>recipeName :</span> {rcp.recipeName}</h1>
                    <h1><span className='text-2xl font-semibold text-red-500'>ingredients :</span> {rcp.ingredients.map(item => <>{item},</>)}</h1>
                    <h1><span className='text-2xl font-semibold text-red-500'>cookingMethod :</span> {rcp.cookingMethod}</h1>
                    <h1><span className='text-2xl font-semibold text-red-500'>ratings :</span> {rcp.rating}</h1>
                    <button disabled={dis} key={rcp.recipeName} onClick={()=>handleFavourite(event,rcp.recipeName)} className='btn btn-primary'>favourite</button>
                </div>)
            }
            </div>
        </div>
    );
};

export default TableRcp;