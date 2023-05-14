import React from 'react';
import Footer from './Footer';

const Blog = () => {
    return (
        <div>
            <div className='bg-red-400 m-5 p-3 rounded-md'>
                <h1 className='text-green-700 text-xl'>1.Tell us the differences between uncontrolled and controlled components?</h1>
                <p>when change input value uncontrolled component cant catch without click onSubmit event handler but control component is notified input every value change</p>
            </div>
            <div className='bg-red-400 m-5 rounded-md p-3'>
                <h1 className='text-green-700 text-xl'>2.How to validate React props using PropTypes?</h1>
                <p>we can set datatype for any value if we fixed a datatype for any value.but we provide that value different data type we will get an error. </p>
            </div>
            <div className='bg-red-400 m-5 rounded-md p-3'>
                <h1 className='text-green-700 text-xl'>3.Tell us the difference between nodejs and express js?</h1>
                <p>nodejs is a package but express js is framework.node js provides the javascript run time environment.</p>
            </div>
            <div className='bg-red-400 m-5 p-3 rounded-md'>
                <h1 className='text-green-700 text-xl'>4.What is a custom hook, and why will you create a custom hook?</h1>
                <p>
                    custom hook is used for reusability.custom hook can be used easily for reusability so code is cleaner.it also used for enhance rendering speed
                </p>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blog;