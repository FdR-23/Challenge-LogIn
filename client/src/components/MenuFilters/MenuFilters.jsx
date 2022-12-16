import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getByNameClient, searchRangeAge, orderByAscDes, getAllClient } from '../../redux/actions';

function MenuFilters({ toggleopen, handleToggle }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.token)
    const client = useSelector((state) => state.clients)
    const [name, setName] = useState('');
    const [inputAge, setInputAge] = useState({
        to: '',
        from: '',
    })
    const ExpresionNumber = new RegExp('^[0-9]+$', 'i');



    //ORDER BY ASC-DES
    const handleFilterAscDes = (e) => {
        dispatch(orderByAscDes(e, client))
    }


    //SEARCH BY NAME
    const handleChangeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const handleSubmitSearchByName = (e) => {
        e.preventDefault();
        const data = name.trim().toLowerCase()
        dispatch(getByNameClient(data))
        setName('')
    }
    //CLEAR FILTERS
    const handleClearFilters = () => {
        dispatch(getAllClient(data.token))
    }

    //FILTER BY RANGE AGE
    const handleChangeRangeAge = (e) => {
        e.preventDefault();
        setInputAge({
            ...inputAge,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmitRangeAge = (e) => {
        e.preventDefault();
        if (inputAge.to === "" || inputAge.from === "") {
            return alert("please fill in both entries with numbers")
        } else if (!ExpresionNumber.test(inputAge.to) || !ExpresionNumber.test(inputAge.from)) {
            return alert("please fill in both entries only numbers")
        } else if (Number(inputAge.to) > Number(inputAge.from)) {
            return alert(`"Min" cannot be greater than "Max", please try again`)
        }


        else {
            dispatch(searchRangeAge(inputAge, client))
            setInputAge({
                to: '',
                from: '',
            })
        }
    }


    return (
        <div
            className={`${toggleopen ? 'absolute flex flex-col justify-center bg-sky-900 rounded-md items-center w-60 p-2 ' : 'hidden  sm:flex flex-col h-full w-60 items-center p-2 rounded-sm bg-slate-900/20'} `}>
            <p
                className='p-2 text-xl font-bold text-white'>FILTERS</p>
            <button
                className={`${!toggleopen ? 'hidden' :
                    'bg-indigo-600 hover:bg-indigo-800 btn btn-xs btn-circle  absolute right-2 top-2'}
                    `}
                onClick={() => handleToggle()}>
                <p className='font-bold text-white '>✕</p>
            </button>

            <div
                className=' bg-white/50 p-2 rounded-lg '>

                <div
                    className='p-2 m-2'>
                    <p
                        className='text-center font-semibold'
                    >SEARCH BY NAME</p>

                    <form
                        className='p-2 flex flex-row justify-evenly'
                        onSubmit={(e) => handleSubmitSearchByName(e)}>

                        <input
                            className="input input-bordered input-xs  w-28 max-w-xs"
                            type="text"
                            name='name'
                            value={name}
                            placeholder='Name'
                            autoComplete='off'
                            onChange={(e) => handleChangeName(e)}
                        />
                        <button
                            className='btn btn-xs  bg-indigo-500  hover:bg-indigo-600'
                            type="submit">go</button>
                    </form>
                </div>



                <div
                    className='p-2 m-2'>
                    <p
                        className='text-center font-semibold'
                    >SEARCH  BY RANGE AGE</p>
                    <form
                        className='p-2 flex flex-row justify-evenly'
                        onSubmit={(e) => handleSubmitRangeAge(e)}>
                        <input
                            className="input input-bordered input-xs w-12  max-w-xs"
                            type="text"
                            name='to'
                            value={inputAge.to}
                            placeholder='min'
                            onChange={(e) => handleChangeRangeAge(e)}
                        />
                        <input
                            className="input input-bordered input-xs w-12  max-w-xs"
                            type="text"
                            name='from'
                            value={inputAge.from}
                            placeholder='max'
                            onChange={(e) => handleChangeRangeAge(e)}
                        />
                        <button
                            className='btn btn-xs  bg-indigo-500  hover:bg-indigo-600'
                            type="submit">go</button>
                    </form>
                </div>

                <div
                    className='p-2 m-2'>
                    <p
                        className='text-center font-semibold'>ORDER BY</p>
                    <div
                        className='p-2 flex flex-row justify-evenly'>
                        <p
                            className='btn btn-xs w-12 bg-indigo-500  hover:bg-indigo-600'
                            onClick={() => handleFilterAscDes('ASC')}
                        >A-Z</p>
                        <p
                            className='btn btn-xs w-12 bg-indigo-500 hover:bg-indigo-600'
                            onClick={() => handleFilterAscDes('DES')}
                        >Z-A</p>
                    </div>
                </div>

                <div
                    className='p-2 flex flex-row justify-evenly'>
                    <button
                        className='btn btn-sm  bg-indigo-500 hover:bg-indigo-600'
                        onClick={() => handleClearFilters()}
                    >CLEAR FILTERS</button>
                </div>



            </div>
        </div>
    )
}

export default MenuFilters