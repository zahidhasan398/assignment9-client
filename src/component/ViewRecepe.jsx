import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRcp from './TableRcp';

const ViewRecepe = () => {
    const selectedChef = useLoaderData();
    const { chefName, chefPicture, description, likes, numberOfRecipes, yearsOfExperience, recipes } = selectedChef;
    console.log(selectedChef);
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <h1 className="text-2xl my-2 font-bold">Experience : {yearsOfExperience} years</h1>
                        <p className="py-6">{description}</p>
                        <div>
                            <TableRcp recipes={recipes}></TableRcp>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewRecepe;