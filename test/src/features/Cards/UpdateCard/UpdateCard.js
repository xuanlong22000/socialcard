import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});

function UpdateCard(props) {

    const close = props.props

    return (
        <div className='add-card-container'>

            <div className='form-add-card'>
                <h2 className='header-new-card'>Update Card</h2>
                <div className='form-avatar'>
                    <span className='name-field'>Avatar<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                    <Stack direction="row" alignItems="center" spacing={10}>
                        <label className='wrap-btn-upload' style={{ display: 'flex' }} htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />

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


                    />
                </div>
                <div className='name_post'>
                    <span >Description<span style={{ color: 'red', marginLeft: '3px' }}>*</span></span>
                    <input
                        className='input-data'

                    />
                </div>
                <div className='form-avatar'>
                    <span className='name-field'>Image</span>
                    {/* <input value={image} className='input-data' onChange={onImageChanged} type="text" /> */}
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label className='wrap-btn-upload' htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
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
                        type="button"
                        className="btn-save-add"
                    >Save</button>
                    <button type="button" className="btn-cancel-add" onClick={close}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateCard;