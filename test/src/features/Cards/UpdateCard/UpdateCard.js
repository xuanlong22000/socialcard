import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updatePosts } from '../CardSlice';

const Input = styled('input')({
    display: 'none',
});

function UpdateCard(props) {

    const close = props.props
    const editId = props.edit
    const [data, setData] = useState({})
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`http://192.168.0.120:5000/posts/details/${editId}`)
            .then(res => setData(res.data))
    }, [])


    async function handleOnSubmit(event) {
        try {
            event.preventDefault();

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
                avatar: res1.data.url || data?.avatar,
                name: name,
                desc: desc,
                image: res2?.data?.url || data?.image
            }

            dispatch(updatePosts(data._id, newCard))
            close()


        } catch (error) {
            console.log(error)
        }


    }


    return (
        <div className='add-card-container'>

            <form onSubmit={handleOnSubmit}>
                <div className='form-add-card'>
                    <h2 className='header-new-card'>Update Card</h2>
                    <div className='form-avatar'>
                        <span className='name-field'>Avatar<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                        <Stack direction="row" alignItems="center" spacing={10}>
                            <label className='wrap-btn-upload' style={{ display: 'flex' }} htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" name="avatar" />

                                <span >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.997" viewBox="0 0 20 19.997">
                                        <path id="upload-solid" d="M11.562,15.072H8.438a.935.935,0,0,1-.938-.937V7.572H4.074A.78.78,0,0,1,3.523,6.24L9.465.295a.757.757,0,0,1,1.066,0L16.477,6.24a.78.78,0,0,1-.551,1.332H12.5v6.563A.935.935,0,0,1,11.562,15.072ZM20,14.76v4.375a.935.935,0,0,1-.937.938H.937A.935.935,0,0,1,0,19.135V14.76a.935.935,0,0,1,.937-.937H6.25v.313a2.189,2.189,0,0,0,2.188,2.187h3.125a2.189,2.189,0,0,0,2.188-2.187v-.312h5.313A.935.935,0,0,1,20,14.76ZM15.156,18.2a.781.781,0,1,0-.781.781A.784.784,0,0,0,15.156,18.2Zm2.5,0a.781.781,0,1,0-.781.781A.784.784,0,0,0,17.656,18.2Z" transform="translate(0 -0.075)" fill="#064ebc" />
                                    </svg>
                                </span>
                                <p className='add-card-upload' variant="contained" component="span">Upload image</p>
                            </label>
                        </Stack>

                    </div>
                    <div className='name_post'>
                        <span >Name<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                        <input
                            className='input-data'
                            value={data?.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='name_post'>
                        <span >Description<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                        <input
                            className='input-data'
                            value={data?.desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <div className='form-avatar'>
                        <span className='name-field-image'>Image</span>
                        {/* <input value={image} className='input-data' onChange={onImageChanged} type="text" /> */}
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label className='wrap-btn-upload' htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" name="image" />
                                <div style={{ display: 'flex' }}>
                                    <span >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.997" viewBox="0 0 20 19.997">
                                            <path id="upload-solid" d="M11.562,15.072H8.438a.935.935,0,0,1-.938-.937V7.572H4.074A.78.78,0,0,1,3.523,6.24L9.465.295a.757.757,0,0,1,1.066,0L16.477,6.24a.78.78,0,0,1-.551,1.332H12.5v6.563A.935.935,0,0,1,11.562,15.072ZM20,14.76v4.375a.935.935,0,0,1-.937.938H.937A.935.935,0,0,1,0,19.135V14.76a.935.935,0,0,1,.937-.937H6.25v.313a2.189,2.189,0,0,0,2.188,2.187h3.125a2.189,2.189,0,0,0,2.188-2.187v-.312h5.313A.935.935,0,0,1,20,14.76ZM15.156,18.2a.781.781,0,1,0-.781.781A.784.784,0,0,0,15.156,18.2Zm2.5,0a.781.781,0,1,0-.781.781A.784.784,0,0,0,17.656,18.2Z" transform="translate(0 -0.075)" fill="#064ebc" />
                                        </svg>
                                    </span>
                                    <p className='add-card-upload' variant="contained" component="span">Upload image</p>
                                </div>

                            </label>
                        </Stack>
                    </div>

                    <div className='btn-add-card'>
                        <button
                            type="submit"
                            className="btn-save-add"
                            onClick={handleOnSubmit}
                        >Save</button>
                        <button type="button" className="btn-cancel-add" onClick={close}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UpdateCard;