import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import './SignUp.css'
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const Input = styled('input')({
    display: 'none',
});


const SignUp = ({ handleToggle }) => {

    const [avatar, setAvatar] = useState('')
    const [fullAvatar, setFulAvatar] = useState('')
    const [avatarValidate, setAvatarValidate] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [nameValidate, setNameValidate] = useState(false)
    const [passwordValidate, setPasswordValidate] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const handleOnChangeInput = (e) => {
        if (e.target.name === 'username') { setName(e.target.value); setNameValidate(false) }
        if (e.target.name === 'password') { setPassword(e.target.value); setPasswordValidate(false) }
    }

    const handleChangeAvatar = (file) => {
        if (file.type === 'image/jpeg' || file.type === 'image/png') {
            setFulAvatar(file)
            setAvatar(file.name)
            setAvatarValidate(false)
        } else {
            setAvatarValidate(true)
            setAvatar('File không hợp lệ')
        }

    }

    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault()
            if (!avatar) {
                setAvatarValidate(true)
            }
            if (!name) {
                setNameValidate(true)
            }
            if (!password) {
                setPasswordValidate(true)
            }

            if (!avatar || !name || !password) {
                return
            }

            setIsLoading(true)
            const form = e.target
            let res

            if (fullAvatar.type === 'image/jpeg' || fullAvatar.type === 'image/png') {
                const avatarFile = form.avatar.files[0];
                const formData1 = new FormData();
                formData1.append('upload_preset', 'my-uploads');
                formData1.append('file', avatarFile)

                res = await axios.post('https://api.cloudinary.com/v1_1/duoqoiqsg/upload', formData1, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            }

            const user = {
                avatar: res.data.url,
                username: name,
                password: password
            }

            await axios.post('http://localhost:5000/posts/register', user).then(() => handleToggle())
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }


    }
    return (
        <div className='signUp-container'>
            <form onSubmit={handleOnSubmit}>
                <div className='form-signUp'>
                    <h2 className='header-new-card'>Sign Up</h2>
                    <div className='form-avatar-signUp'>
                        <span style={avatarValidate ? { color: 'red' } : {}} className='name-field'>Avatar<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>

                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label className='wrap-btn-upload' style={{ display: 'flex' }} htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" name="avatar" disabled={isLoading} onChange={(e) => { handleChangeAvatar(e.target.files[0]) }} />

                                <span >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.997" viewBox="0 0 20 19.997">
                                        <path style={avatarValidate ? { fill: 'red' } : {}} id="upload-solid" d="M11.562,15.072H8.438a.935.935,0,0,1-.938-.937V7.572H4.074A.78.78,0,0,1,3.523,6.24L9.465.295a.757.757,0,0,1,1.066,0L16.477,6.24a.78.78,0,0,1-.551,1.332H12.5v6.563A.935.935,0,0,1,11.562,15.072ZM20,14.76v4.375a.935.935,0,0,1-.937.938H.937A.935.935,0,0,1,0,19.135V14.76a.935.935,0,0,1,.937-.937H6.25v.313a2.189,2.189,0,0,0,2.188,2.187h3.125a2.189,2.189,0,0,0,2.188-2.187v-.312h5.313A.935.935,0,0,1,20,14.76ZM15.156,18.2a.781.781,0,1,0-.781.781A.784.784,0,0,0,15.156,18.2Zm2.5,0a.781.781,0,1,0-.781.781A.784.784,0,0,0,17.656,18.2Z" transform="translate(0 -0.075)" fill="#064ebc" />
                                    </svg>
                                </span>
                                <p style={avatarValidate ? { color: 'red' } : {}} className='add-card-upload' variant="contained" component="span">{avatar || 'Upload avatar'}</p>
                            </label>
                        </Stack>

                    </div>

                    <div className='username-input'>
                        <span style={nameValidate ? { color: 'red' } : {}}>Username<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                        <input
                            name="username"
                            style={nameValidate ? { borderColor: 'red' } : {}}
                            className='input-data'
                            value={name}
                            disabled={isLoading}
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
                            disabled={isLoading}
                            onChange={handleOnChangeInput}
                        />
                    </div>
                    <div className='btn-signUp'>
                        <button type='submit' className='btn-register' disabled={isLoading || avatarValidate || nameValidate || passwordValidate}>
                            {isLoading ? <CircularProgress style={{ width: '20px', height: '20px' }} /> : 'Register'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp