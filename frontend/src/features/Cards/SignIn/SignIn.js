import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css'

const SignIn = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [nameValidate, setNameValidate] = useState(false)
    const [passwordValidate, setPasswordValidate] = useState(false)

    const page = useNavigate()

    const handleOnChangeInput = (e) => {
        if (e.target.name === 'username') { setName(e.target.value); setNameValidate(false) }
        if (e.target.name === 'password') { setPassword(e.target.value); setPasswordValidate(false) }
    }

    const handleLogin = (token, message) => {
        localStorage.setItem("token", token)
        toast.success(`${message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
        page('/home')
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (!name) {
            setNameValidate(true)
        }
        if (!password) {
            setPasswordValidate(true)
        }
        const user = {
            username: name,
            password: password
        }

        await axios.post('http://localhost:5000/posts/login', user).then(res =>
            res.data.token
                ? handleLogin(res.data.token, res.data.message)
                : toast.warn(`${res.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }))
    }

    return (
        <div className='signIn-container'>

            <form onSubmit={handleOnSubmit}>
                <div className='form-signIn'>
                    <h2 className='header-new-card'>Sign In</h2>
                    <div className='username-input'>
                        <span style={nameValidate ? { color: 'red' } : {}}>Username<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                        <input
                            name="username"
                            style={nameValidate ? { borderColor: 'red' } : {}}
                            className='input-data'
                            value={name}
                            onChange={handleOnChangeInput}
                        />
                    </div>

                    <div className='password-input'>
                        <span style={passwordValidate ? { color: 'red' } : {}}>Password<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                        <input
                            type='password'
                            name="password"
                            style={passwordValidate ? { borderColor: 'red' } : {}}
                            className='input-data'
                            value={password}
                            onChange={handleOnChangeInput}
                        />
                    </div>
                    <div className='btn-signUp'>
                        <button type='submit' className='btn-logIn' disabled={nameValidate || passwordValidate}>Log In</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn