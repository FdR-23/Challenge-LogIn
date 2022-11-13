import React, { useState } from 'react'





function MenuFilters() {

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
            className='bg-red-400  flex flex-col'>MenuFIlters

            <div
                className='bg-red-400  flex flex-row'>

                <p>ORDER BY:</p>
                <div>
                    <p
                        onClick={() => handleFilterAscDes('ASC')}
                    >A-Z</p>
                    <p
                        onClick={() => handleFilterAscDes('DES')}
                    >Z-A</p>
                </div>
            </div>

            <div>
                <p>SEARCH  BY RANGE AGE</p>
                <form
                    onSubmit={(e) => handleSubmitRangeAge(e)}>
                    <input
                        type="text"
                        name='to'
                        value={inputAge.to}
                        placeholder='min'
                        onChange={(e) => handleChangeRangeAge(e)}
                    />
                    <input
                        type="text"
                        name='from'
                        value={inputAge.from}
                        placeholder='max'
                        onChange={(e) => handleChangeRangeAge(e)}
                    />
                    <button type="submit">SEARCH</button>
                </form>
            </div>

            <div>
                <p>SEARCH BY NAME</p>
                <form
                    onSubmit={(e) => handleSubmitSearchByName(e)}>
                    <input
                        type="text"
                        name='name'
                        value={name}
                        placeholder='Name'
                        autoComplete='off'
                        onChange={(e) => handleChangeName(e)}
                    />
                    <button type="submit">SEARCH</button>


                </form>
            </div>
        </div>
    )
}

export default MenuFilters