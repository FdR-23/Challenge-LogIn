import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import RegisterClient from './RegisterClient/RegisterClient';


function Navbar() {
    const navigate = useNavigate()


    //CLOSE SESSION
    const handleLogOut = () => {
        window.localStorage.removeItem("Token");
        navigate("/");
    }



    return (
        <div className='flex flex-col bg-red-600'>
            <p>
                Clientes
            </p>

            <Link  to = '/main/register'> ADD client</Link>
         


            <div className="dropdown dropdown-content">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt='img-profile' />
                    </div>
                </label>
                <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li><a >Profile</a></li>
                    <li><a >Settings</a></li>
                    <li><a href="#modal-Logout" >Logout</a></li>
                </ul>
            </div>


            {/* LOGOUT  MODAL*/}
            <div className="modal" id="modal-Logout">
                <div className="modal-box w-fit flex flex-col items-center">
                    <h3 className="font-bold text-lg">Are you sure to log out?</h3>
                    <div className="modal-action">
                        <a href="#"
                            className="btn bg-indigo-600 hover:bg-red-600 btn-sm w-20">Cancel</a>
                        <button href='#' onClick={() => handleLogOut()}
                            className="btn bg-indigo-600 hover:bg-green-600 btn-sm w-20">Logout</button>
                    </div>
                </div>
            </div>





        </div>



    )
}

export default Navbar