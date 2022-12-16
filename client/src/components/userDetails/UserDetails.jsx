import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { userDetails, clearDetailsUser } from '../../redux/actions'
import Loading from '../Loading.jsx'

const UserDetails = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const info = useSelector((state) => state.detailsUser)




    useEffect(() => {
        dispatch(userDetails(params.id))
        return () => {
            dispatch(clearDetailsUser())
        }
    }, [dispatch, params.id])



    if (!info) {
        return <Loading />
    } else {
        if (info.status === 404) {
            alert(info.data.message)
            navigate('/')
        } else {
            return (



                <div className='w-full h-screen m-auto flex flex-col justify-center items-center'>
                    <div className='flex flex-col w-80 bg-slate-50/30   shadow-black shadow-lg  rounded-xl relative'>
                        <Link to='/main' className="btn btn-sm btn-circle bg-indigo-600 absolute right-2 top-2 ">✕</Link>

                        <h2 className='mt-2 p-2 text-3xl font-bold  text-center tracking-widest text-white'>PROFILE</h2>

                        <div className=' m-auto  flex flex-col justify-center items-center rounded-xl'>
                            <h3 className='p-2 text-2xl font-semibold  text-center '>Username
                                <p className='text-xl font-medium  text-center '>
                                    {info && info.data.username.charAt(0).toUpperCase() + info.data.username.slice(1)}
                                </p></h3>
                            <img
                                className=" rounded-full bg-black flex justify-center items-center overflow-hidden"
                                src="https://placeimg.com/80/80/people" alt='img-profile' />



                            <h3 className='p-2 text-2xl font-semibold  text-center'>E-mail
                                <p className='text-xl font-medium  text-center'>
                                    {info && info.data.email}
                                </p></h3>

                            <h3 className='p-2 text-2xl font-semibold  text-center'>Role
                                <p className={`${info && info.data.role === "admin" ?
                                    "text-xl font-medium  text-center uppercase text-yellow-500"
                                    : "text-xl font-medium  text-center uppercase"}`}>
                                    "{info && info.data.role}"
                                </p></h3>

                        </div>


                    </div>
                </div>
            )
        }
    }
}

export default UserDetails