import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { UserContext } from './AuthProvider';

const NabBur = () => {
    const navigate=useNavigate();
    const {user,logOut}=useContext(UserContext);
    const handleLogOut=()=>{
         logOut()
         .then(()=>{
            navigate("/login");
            console.log("successfully logged out");
         })
         .catch((error)=>{
            console.log(error.message);
         })
    }
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to="/">Home</ActiveLink></li>

                            <li><ActiveLink to="/blog">Blog</ActiveLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">chinese Yammy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><ActiveLink to="/">Home</ActiveLink></li>

                        <li><ActiveLink to="/blog">Blog</ActiveLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button className='tooltip  tooltip-left flex items-center gap-2' data-tip={user?.displayName}>
                            
                            <img src={user?.photoURL} className='w-[70px] h-[70px] rounded-full '   alt="" />{user?.displayName && <span className='btn p-2 rounded-md' onClick={handleLogOut}>logout</span> }</button>:<ActiveLink to="/login"><button className='btn btn-success'>Login</button></ActiveLink>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NabBur;