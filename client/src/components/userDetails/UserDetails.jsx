import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { userDetails, clearDetailsUser } from '../../redux/actions'
import Loading from '../Loading.jsx'

const UserDetails = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const info = useSelector((state) => state.detailsUser)
    console.log("ifnooooooooooo", info)



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
                <div>
                    <p>UserName:</p>
                    {info && <p>{info.data.username}</p>}
                    <p>Role:</p>
                    {info && <p>{info.data.role}</p>}
                </div>
            )
        }
    }
}

export default UserDetails