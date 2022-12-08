import React from 'react'
import { useDispatch } from 'react-redux';

import { deletUser, getAllClient } from '../redux/actions';
import { useNavigate } from 'react-router-dom'
function ClientItem({ client }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { name, lastName, age, gender, _id } = client

    const loggerUserJSON = window.localStorage.getItem("Token");
    const { token } = JSON.parse(loggerUserJSON)



    const handleDelete = () => {
        dispatch(deletUser(token, _id))
        dispatch(getAllClient(token))
    }
    const handleUpdate = () => {
        navigate(`/main/edit-register/${_id}`)
    }

    return (
        <div className='grid grid-cols-8 gap-1 my-2 mx-2 bg-stone-50/50 p-1 rounded-sm'>
            <div className='flex items-center justify-center font-alumni text-2xl text-slate-800'>#</div>
            <div className=' flex items-center justify-center col-span-2 overflow-auto font-semibold'>{name}</div>
            <div className=' flex items-center justify-center  overflow-auto font-semibold'>{lastName}</div>
            <div className=' flex items-center justify-center  overflow-auto font-semibold'>{age}</div>
            <div className=' flex items-center justify-center  overflow-auto font-semibold'>{gender}</div>

            <div className='flex flex-row  items-center justify-center '>
                <button className='hover:scale-110 ease-in-out duration-300'
                    onClick={() => handleUpdate(_id, token)}>
                    <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000" d="M14,3 C14.5522847,3 15,3.44771525 15,4 C15,4.55228475 14.5522847,5 14,5 L13.846,5 L13.1420511,14.1534404 C13.0618518,15.1954311 12.1930072,16 11.1479,16 L4.85206,16 C3.80698826,16 2.93809469,15.1953857 2.8579545,14.1533833 L2.154,5 L2,5 C1.44771525,5 1,4.55228475 1,4 C1,3.44771525 1.44771525,3 2,3 L5,3 L5,2 C5,0.945642739 5.81588212,0.0818352903 6.85073825,0.00548576453 L7,0 L9,0 C10.0543573,0 10.9181647,0.815882118 10.9945142,1.85073825 L11,2 L11,3 L14,3 Z M11.84,5 L4.159,5 L4.85206449,14.0000111 L11.1479,14.0000111 L11.84,5 Z M9,2 L7,2 L7,3 L9,3 L9,2 Z" />
                    </svg>
                </button>
            </div>


            <div className='flex flex-row  items-center justify-center '>
                <button className='hover:scale-110 ease-in-out duration-300'
                    onClick={() => handleDelete()}>
                    <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000" d="M14,3 C14.5522847,3 15,3.44771525 15,4 C15,4.55228475 14.5522847,5 14,5 L13.846,5 L13.1420511,14.1534404 C13.0618518,15.1954311 12.1930072,16 11.1479,16 L4.85206,16 C3.80698826,16 2.93809469,15.1953857 2.8579545,14.1533833 L2.154,5 L2,5 C1.44771525,5 1,4.55228475 1,4 C1,3.44771525 1.44771525,3 2,3 L5,3 L5,2 C5,0.945642739 5.81588212,0.0818352903 6.85073825,0.00548576453 L7,0 L9,0 C10.0543573,0 10.9181647,0.815882118 10.9945142,1.85073825 L11,2 L11,3 L14,3 Z M11.84,5 L4.159,5 L4.85206449,14.0000111 L11.1479,14.0000111 L11.84,5 Z M9,2 L7,2 L7,3 L9,3 L9,2 Z" />
                    </svg>
                </button>
            </div>



        </div>
    )
}

export default ClientItem