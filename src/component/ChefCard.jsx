import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const {chefId,chefName,chefPicture,likes,numberOfRecipes,yearsOfExperience}=chef;
    return (
        <div>
            <div className="card w-full h-full  bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="Shoes" className='h-[250px] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <div className='text-xl font-semibold'>
                        <h1>Experience: <span>{yearsOfExperience}</span> years</h1>
                        <h1>recipes: <span>{numberOfRecipes}</span></h1>
                        <h1>likes: {likes}</h1>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/recepe/${chefId}`}><button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;