import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const navigate=useNavigate();
    const [error,setError]=useState("");
    const {createUser,logOut}=useContext(UserContext);
    const handleSubmit=(event)=>{
          event.preventDefault();
          const name=event.target.name.value;
          const photoUrl=event.target.photoUrl.value;
          const password=event.target.password.value;
          const confirmPass=event.target.confirmPass.value;
          if(password.length<6){
            setError("password less then 6 characters")
              return;
          }
          else{
            setError("");
          }
          if(password !== confirmPass){
            setError("password not match");
            return;
          }
          else{
            setError("");
          }
          const email=event.target.email.value;
          createUser(email,password)
          .then((result)=>{
           console.log(result.user);
           updateProfile(result.user,{
            displayName:name,photoURL:photoUrl
           })
           .then(()=>{
            console.log("profile is updated");
            logOut()
          .then(()=>{
            
            console.log("succsessfully log out from register");
            navigate("/login");
          })
          .catch((error)=>{
            console.log(error.message);
          })
           })
           .catch((error)=>{
            console.log(error.message);
           })
           
          })
          .catch((error)=>{
            console.log(error.message);
          })
          
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered"
                            name='name' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" placeholder="photo url" className="input input-bordered"
                            name='photoUrl' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                            name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                            name='password'
                            required />
                            <label className="label">
                                <span className="label-text"> confirm Password</span>
                            </label>
                            <input type="password" placeholder=" confirm password" className="input input-bordered"
                            name='confirmPass' required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>

                        </div>
                        <div>i have already account <Link to="/login" className='underline text-blue-500'>login</Link></div>
                       <div className='text-red-600'>{error}</div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;