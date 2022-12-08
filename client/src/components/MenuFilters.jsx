import React, { useState } from 'react'





function MenuFilters({ toggleopen }) {

    const [name, setName] = useState('');
    const [inputAge, setInputAge] = useState({
        to: '',
        from: '',
    })


    //ORDER MAYOR OR MENOR
    const handleFilterAscDes = (e) => {
        console.log(e)
    }


    //SEARCH BY NAME
    const handleChangeName = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleSubmitSearchByName = (e) => {
        e.preventDefault();

        console.log(name)
        setName('')
    }

    //FILTER BY AGE
    const handleChangeRangeAge = (e) => {
        e.preventDefault();
        setInputAge({
            ...inputAge,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmitRangeAge = (e) => {
        e.preventDefault();
        //dispatch
        console.log(inputAge)

        setInputAge({
            to: '',
            from: '',
        })
    }

    return (
        <div
            className={`${toggleopen ? '' : 'hidden sm:flex'} h-full w-60 flex flex-col  items-center p-2 rounded-sm bg-slate-900/20`}>
            <p
                className='p-2 font-semibold'>FILTERS</p>
            <div
                className=' bg-white/50 p-2 rounded-lg'>
                <div>

                </div>
                <div
                    className='p-2 m-2'>
                    <p
                        className='text-center font-semibold'>ORDER BY</p>
                    <div
                        className='p-2 flex flex-row justify-evenly'>
                        <p
                            className='btn btn-xs  bg-indigo-400  hover:bg-indigo-600'
                            onClick={() => handleFilterAscDes('ASC')}
                        >A-Z</p>
                        <p
                            className='btn btn-xs bg-indigo-400 hover:bg-indigo-600'
                            onClick={() => handleFilterAscDes('DES')}
                        >Z-A</p>
                    </div>
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
                            className='btn btn-xs  bg-indigo-400  hover:bg-indigo-600'
                            type="submit">go</button>
                    </form>
                </div>

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
                            className='btn btn-xs  bg-indigo-400  hover:bg-indigo-600'
                            type="submit">go</button>


                    </form>
                </div>
            </div>


        </div>
    )
}

export default MenuFilters