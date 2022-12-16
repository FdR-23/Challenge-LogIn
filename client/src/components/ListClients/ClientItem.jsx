import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom'

const ClientItem = ({ client }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { name, lastName, age, gender, _id } = client
    const data = useSelector((state) => state.token)

    const handleDelete = () => {
        dispatch(deletUser(data.token, _id))
    }
    const handleUpdate = () => {
        navigate(`/main/edit-register/${_id}`)
    }

    return (
        <div className='grid grid-cols-8 gap-1 my-2 mx-2 bg-stone-50/50 p-1 rounded-sm'>
            <div className='flex items-center justify-center text-2xl text-slate-800'>#</div>
            <div className='flex items-center justify-center text-sm font-semibold col-span-2'>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
            <div className='flex items-center justify-center text-sm font-semibold'>{lastName.charAt(0).toUpperCase() + name.slice(1)}</div>
            <div className='flex items-center justify-center text-sm font-semibold'>{age}</div>
            <div className='flex items-center justify-center text-sm font-semibold'>{gender}</div>

            <div className='flex flex-row  items-center justify-center '>
                <button className='hover:scale-110 ease-in-out duration-300'
                    onClick={() => handleUpdate(_id, data.token)}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4745 5.40801L18.5917 7.52524M17.8358 3.54289L12.1086 9.27005C11.8131 9.56562 11.6116 9.94206 11.5296 10.3519L11 13L13.6481 12.4704C14.0579 12.3884 14.4344 12.1869 14.7299 11.8914L20.4571 6.16423C21.181 5.44037 21.181 4.26676 20.4571 3.5429C19.7332 2.81904 18.5596 2.81903 17.8358 3.54289Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 15V18C19 19.1046 18.1046 20 17 20H6C4.89543 20 4 19.1046 4 18V7C4 5.89543 4.89543 5 6 5H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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