import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { UserContext } from './AuthProvider';

const Login = () => {
    const [error,setError]=useState("");
    const {logIn,googleSignin,githubAuth}=useContext(UserContext);
    const location=useLocation();
    const navigate=useNavigate();
    console.log(location);
    const from=location.state?.from?.pathname || "/";
    const handleGithub=()=>{
        githubAuth()
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
    const handleGoggle=()=>{
        googleSignin()
        .then((result)=>{
            navigate(from);
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        logIn(email,password)
        .then((result)=>{
            navigate(from);
            console.log(result.user);
            setError("");
        })
        .catch((error)=>{
            setError("wrong password or email");
            console.log(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered"
                            name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                            name='password' required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>

                        </div>
                        <div>i have no account <Link to="/register" className='underline text-blue-500'>Register</Link></div>
                        
                        <h1 className='text-red-500'>{error}</h1>
                    </form>
                    <div className='text-center'>
                    <button onClick={handleGoggle} className='btn btn-outline-primary'><FaGoogle className='text-2xl my-2 text-green-500'></FaGoogle> sign in with google</button>
                        <button className='btn btn-outline-primary my-2' onClick={handleGithub}><FaGithub className='text-2xl text-green-500'></FaGithub> sign in with github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;