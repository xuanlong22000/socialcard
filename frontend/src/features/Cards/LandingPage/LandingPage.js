import React, { useEffect, useState } from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'
import axios from 'axios';

const LandingPage = () => {
    const [toggle, setToggle] = useState(true)

    const page = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/posts/isUserAuth', {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        }).then(res => res.data.isLoggedIn ? page('/home') : null)
    }, [])

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='landing-container'>
            <div className='toggle-button'>
                <Button variant="outlined" onClick={handleToggle}>{toggle ? 'Sign In' : 'Sign Up'}</Button>
            </div>
            {
                !toggle ? <SignIn /> : <SignUp handleToggle={handleToggle} />
            }
        </div>
    )
}

export default LandingPage