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
            <div className='flex items-center justify-center text-sm font-semibold'>{lastName.charAt(0).toUpperCase() + lastName.slice(1)}</div>
            <div className='flex items-center justify-center text-sm font-semibold'>{age}</div>
            <div className='flex items-center justify-center text-sm font-semibold'>{gender}</div>

            <div className='flex flex-row  items-center justify-center '>
                <button className='hover:scale-110 ease-in-out duration-300'
                    onClick={() => handleUpdate(_id, data.token)}>
                    <svg className="fill-black " width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M21.4549 5.41575C21.6471 5.70687 21.615 6.10248 21.3588 6.35876L12.1664 15.5511C12.0721 15.6454 11.9545 15.7128 11.8256 15.7465L7.99716 16.7465C7.87229 16.7791 7.74358 16.7784 7.62265 16.7476C7.49408 16.7149 7.37431 16.6482 7.27729 16.5511C7.08902 16.3629 7.01468 16.0889 7.08197 15.8313L8.08197 12.0028C8.11144 11.89 8.16673 11.7786 8.24322 11.6912L17.4697 2.46967C17.5504 2.38891 17.6477 2.32846 17.7536 2.29163C17.8321 2.26432 17.9153 2.25 18 2.25C18.1989 2.25 18.3897 2.32902 18.5303 2.46967L21.3588 5.2981C21.3954 5.33471 21.4274 5.37416 21.4549 5.41575ZM19.7678 5.82843L18 4.06066L9.48184 12.5788L8.85685 14.9716L11.2496 14.3466L19.7678 5.82843Z" />
                        <path d="M19.6414 17.1603C19.9148 14.8227 20.0018 12.4688 19.9023 10.1208C19.8976 10.0084 19.9399 9.89898 20.0194 9.81942L21.0027 8.83609C21.1236 8.71519 21.3302 8.79194 21.3415 8.96254C21.5265 11.7522 21.4564 14.5545 21.1312 17.3346C20.8946 19.3571 19.2703 20.9421 17.2583 21.167C13.7917 21.5544 10.2083 21.5544 6.74177 21.167C4.72971 20.9421 3.10538 19.3571 2.86883 17.3346C2.45429 13.7903 2.45429 10.2097 2.86883 6.66543C3.10538 4.6429 4.72971 3.05789 6.74177 2.83301C9.37152 2.5391 12.0685 2.46815 14.7306 2.62016C14.9022 2.62996 14.9804 2.83757 14.8589 2.95909L13.8664 3.95165C13.7877 4.03034 13.6798 4.07261 13.5685 4.06885C11.3421 3.99376 9.10055 4.07872 6.90838 4.32373C5.57827 4.47239 4.51278 5.522 4.35867 6.83968C3.95767 10.2682 3.95767 13.7318 4.35867 17.1603C4.51278 18.478 5.57827 19.5276 6.90838 19.6763C10.2642 20.0513 13.7358 20.0513 17.0916 19.6763C18.4218 19.5276 19.4872 18.478 19.6414 17.1603Z" />
                    </svg>
                </button>
            </div>


            <div className='flex flex-row  items-center justify-center '>
                <button className='hover:scale-110 ease-in-out duration-300'
                    onClick={() => handleDelete()}>
                    <svg width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path ill="#000000" d="M14,3 C14.5522847,3 15,3.44771525 15,4 C15,4.55228475 14.5522847,5 14,5 L13.846,5 L13.1420511,14.1534404 C13.0618518,15.1954311 12.1930072,16 11.1479,16 L4.85206,16 C3.80698826,16 2.93809469,15.1953857 2.8579545,14.1533833 L2.154,5 L2,5 C1.44771525,5 1,4.55228475 1,4 C1,3.44771525 1.44771525,3 2,3 L5,3 L5,2 C5,0.945642739 5.81588212,0.0818352903 6.85073825,0.00548576453 L7,0 L9,0 C10.0543573,0 10.9181647,0.815882118 10.9945142,1.85073825 L11,2 L11,3 L14,3 Z M11.84,5 L4.159,5 L4.85206449,14.0000111 L11.1479,14.0000111 L11.84,5 Z M9,2 L7,2 L7,3 L9,3 L9,2 Z" />
                    </svg>
                </button>
            </div>



        </div>
    )
}

export default ClientItem