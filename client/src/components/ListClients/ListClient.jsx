import React, { useEffect } from 'react'
import ClientItem from './ClientItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClient } from '../../redux/actions';


function ListClient() {
    const dispatch = useDispatch()
    const clients = useSelector((state) => state.clients)
    const data = useSelector((state) => state.token)

    useEffect(() => {
        if (!data) {
            return alert('Error to laod clients')
        } else {
            dispatch(getAllClient(data.token))
        }
    }, [dispatch, data]);

    return (
        <div className='bg-slate-900/10 rounded-sm w-full h-full  '>
            <div className='grid grid-cols-8 border-b-2 mx-2 pt-2 border-stone-700 bg-w text-center font-semibold text-sm items-center'>
                <p className="mb-1 text-white text-2xl "># </p>
                <p className="mb-1 col-span-2 text-white text-sm sm:text-lg">Name</p>
                <p className="mb-1 text-white text-sm sm:text-lg">Last Name</p>
                <p className="mb-1 text-white text-sm sm:text-lg">Age</p>
                <p className="mb-1 text-white text-sm sm:text-lg">Gender</p>
                <p className="mb-1 text-white text-sm sm:text-lg">Edit</p>
                <p className="mb-1 text-white text-sm sm:text-lg">Remove</p></div>

            {clients && clients.map((element) =>
                <ClientItem
                    key={element._id}
                    client={element} />)
            }
        </div >
    )
}

export default ListClient


