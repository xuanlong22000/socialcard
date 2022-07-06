import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';

import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { useDispatch } from "react-redux";
import './AddCard.css';
import { addPosts } from '../CardSlice';
import axios from 'axios';


const Input = styled('input')({
    display: 'none',
});

function AddCard(props) {
    const close = props.props
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [validate, setValidate] = useState(false)


    const handleOnChangeInput = (e) => {
        if (e.target.name === 'name') setName(e.target.value);
        if (e.target.name === 'desc') setDesc(e.target.value);
    }

    async function handleOnSubmit(event) {
        try {
            event.preventDefault();
            if (!name || !desc) {
                setValidate(true);
                return;
            }
            setIsLoading(true)

            const form = event.currentTarget;
            const avatarFile = form.avatar.files[0];
            const formData1 = new FormData();
            formData1.append('upload_preset', 'my-uploads');
            formData1.append('file', avatarFile)

            let res1, res2;
            if (form.image.files.length > 0) {
                const imageFile = form.image.files[0]


                const formData2 = new FormData();
                formData2.append('upload_preset', 'my-uploads');
                formData2.append('file', imageFile);

                [res1, res2] = await Promise.all([
                    axios.post('https://api.cloudinary.com/v1_1/duoqoiqsg/upload', formData1, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }),
                    axios.post('https://api.cloudinary.com/v1_1/duoqoiqsg/upload', formData2, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                ]);
            } else {
                res1 = await axios.post('https://api.cloudinary.com/v1_1/duoqoiqsg/upload', formData1, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }

            const newCard = {
                avatar: res1.data.url,
                name: name,
                desc: desc,
                image: res2?.data?.url || 'https://res.cloudinary.com/duoqoiqsg/image/upload/v1657008717/my-uploads/qgwjrp2acfy4of3kwac6.png'
            }

            dispatch(addPosts(newCard))
            close()


        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }


    }

    return (
        <div className='add-card-container'>

            <form onSubmit={handleOnSubmit}>
                <div className='form-add-card'>
                    <h2 className='header-new-card'>Add a New Card</h2>

                    <div className='form-avatar'>
                        <span style={validate ? { color: 'red' } : {}} className='name-field'>Avatar<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>

                        {/* <input
                            type="text"
                            className="form-control"
                            value={avatar}
                            onChange={onAvatarChanged} /> */}

                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label className='wrap-btn-upload' style={{ display: 'flex' }} htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" name="avatar" />

                                <span >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.997" viewBox="0 0 20 19.997">
                                        <path style={validate ? { fill: 'red' } : {}} id="upload-solid" d="M11.562,15.072H8.438a.935.935,0,0,1-.938-.937V7.572H4.074A.78.78,0,0,1,3.523,6.24L9.465.295a.757.757,0,0,1,1.066,0L16.477,6.24a.78.78,0,0,1-.551,1.332H12.5v6.563A.935.935,0,0,1,11.562,15.072ZM20,14.76v4.375a.935.935,0,0,1-.937.938H.937A.935.935,0,0,1,0,19.135V14.76a.935.935,0,0,1,.937-.937H6.25v.313a2.189,2.189,0,0,0,2.188,2.187h3.125a2.189,2.189,0,0,0,2.188-2.187v-.312h5.313A.935.935,0,0,1,20,14.76ZM15.156,18.2a.781.781,0,1,0-.781.781A.784.784,0,0,0,15.156,18.2Zm2.5,0a.781.781,0,1,0-.781.781A.784.784,0,0,0,17.656,18.2Z" transform="translate(0 -0.075)" fill="#064ebc" />
                                    </svg>
                                </span>
                                <p style={validate ? { color: 'red' } : {}} className='add-card-upload' variant="contained" component="span">Upload image</p>
                            </label>
                        </Stack>

                    </div>

                    <div className='name_post'>
                        <span style={validate ? { color: 'red' } : {}}>Name<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                        <input
                            name="name"
                            style={validate ? { borderColor: 'red' } : {}}
                            className='input-data'
                            value={name}
                            onChange={handleOnChangeInput}
                        />
                    </div>
                    <div className='name_post'>
                        <span style={validate ? { color: 'red' } : {}}>Description<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                        <input
                            name="desc"
                            style={validate ? { borderColor: 'red' } : {}}
                            className='input-data'
                            value={desc}
                            onChange={handleOnChangeInput}
                        />
                    </div>


                    <div className='form-avatar'>
                        <span className='name-field-image'>Image</span>

                        {/* <input value={image} className='input-data' onChange={onImageChanged} type="text" /> */}

                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label className='wrap-btn-upload' style={{ display: 'flex' }} htmlFor="contained-button-image">
                                <Input accept="image/*" id="contained-button-image" multiple type="file" name="image" />

                                <span >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.997" viewBox="0 0 20 19.997">
                                        <path id="upload-solid" d="M11.562,15.072H8.438a.935.935,0,0,1-.938-.937V7.572H4.074A.78.78,0,0,1,3.523,6.24L9.465.295a.757.757,0,0,1,1.066,0L16.477,6.24a.78.78,0,0,1-.551,1.332H12.5v6.563A.935.935,0,0,1,11.562,15.072ZM20,14.76v4.375a.935.935,0,0,1-.937.938H.937A.935.935,0,0,1,0,19.135V14.76a.935.935,0,0,1,.937-.937H6.25v.313a2.189,2.189,0,0,0,2.188,2.187h3.125a2.189,2.189,0,0,0,2.188-2.187v-.312h5.313A.935.935,0,0,1,20,14.76ZM15.156,18.2a.781.781,0,1,0-.781.781A.784.784,0,0,0,15.156,18.2Zm2.5,0a.781.781,0,1,0-.781.781A.784.784,0,0,0,17.656,18.2Z" transform="translate(0 -0.075)" fill="#064ebc" />
                                    </svg>
                                </span>
                                <p className='add-card-upload' variant="contained" component="span">Upload image</p>
                            </label>
                        </Stack>
                    </div>


                    <div className='btn-add-card'>
                        <button
                            type="submit"
                            className="btn-save-add"
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress style={{ width: '20px', height: '20px' }} /> : 'Save'}
                        </button>
                        <button type="button" className="btn-cancel-add" onClick={close}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddCard;