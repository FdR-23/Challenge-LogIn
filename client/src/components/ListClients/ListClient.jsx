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
            <div className='grid grid-cols-8 border-b-2 mx-2 pt-2 border-stone-700 text-center font-semibold text-sm'>
                <p className="mb-1"># </p>
                <p className="mb-1 col-span-2">Name</p>
                <p className="mb-1">Last Name</p>
                <p className="mb-1">Age</p>
                <p className="mb-1">Gender</p>
                <p className="mb-1">Edit</p>
                <p className="mb-1">Remove</p></div>

            {clients && clients.map((element) =>
                <ClientItem
                    key={element._id}
                    client={element} />)
            }
        </div >
    )
}

export default ListClient


