import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate()
    const data = useSelector((state) => state.token)

    //CLOSE SESSION
    const handleLogOut = () => {
        window.localStorage.removeItem("Token");
        navigate("/");
    }



    return (
        <div className='sm:mx-1 bg-sky-900/80 rounded-b-sm '>
            <div className='grid grid-cols-8 h-28'>

                <div className=' col-span-2 flex flex-row p-2'>
                    <Link className=' btn btn-xs h-7  sm:btn-sm  bg-indigo-600 hover:bg-indigo-800 font-bold'
                        to='/main/register'> ADD CLIENT</Link>
                </div>

                <div className=' col-span-4 flex flex-row  justify-center items-center p-2'>
                    <h2 className='grid-cols-4 text-4xl sm:text-6xl uppercase font-bold text-white font-mono'>
                        Clients
                    </h2>
                </div>


                <div className=" col-span-2 flex flex-row  justify-end items-end p-2 dropdown dropdown-bottom ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='img-profile' />
                        </div>
                    </label>
                    <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to={`/user/${data.dataUser._id}`}>Profile</Link></li>
                        <li><a href="#modal-Logout" >Logout</a></li>
                    </ul>
                </div>


                {/* LOGOUT  MODAL*/}
                <div className="modal" id="modal-Logout">
                    <div className="modal-box w-fit flex flex-col items-center">
                        <h3 className="font-bold text-lg">Are you sure to log out?</h3>
                        <div className="modal-action">
                            <a href="#"
                                className="btn bg-indigo-600 hover:bg-red-600 btn-sm w-20 ">Cancel</a>
                            <button href='#' onClick={() => handleLogOut()}
                                className="btn bg-indigo-600 hover:bg-green-600 btn-sm w-20">Logout</button>
                        </div>
                    </div>
                </div>





            </div>
        </div>


    )
}

export default Navbar