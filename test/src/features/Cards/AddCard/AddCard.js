import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AddCard.css';
import { postAdded } from '../CardSlice';
import { Link } from 'react-router-dom';

AddCard.propTypes = {};

function AddCard() {
    const dispatch = useDispatch()

    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')



    const onAvatarChanged = e => setAvatar(e.target.value)
    const onNameChanged = e => setName(e.target.value)
    const onDescChanged = e => setDesc(e.target.value)
    const onImageChanged = e => setImage(e.target.value)

    const onSavePostClicked = () => {
        if (avatar && name && desc && image) {
            dispatch(
                postAdded(avatar, name, desc, image)
            )
            setAvatar('')
            setName('')
            setDesc('')
            setImage('')
        }

        window.location.href = "/"
    }

    return (
        <section>
            <h2>Add a New Card</h2>
            <form>
                <div className="input-group ">Avatar:
                    <input
                        type="text"
                        className="form-control"
                        value={avatar}
                        onChange={onAvatarChanged} id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                </div>
                <div className='name_post'>
                    <label htmlFor="postName">Name:</label>
                    <input
                        type="text"
                        id="postName"
                        name="postName"
                        value={name}
                        onChange={onNameChanged}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cardContent" className="form-label">Description: </label>
                    <textarea
                        id="cardContent"
                        name="cardContent"
                        rows={"1"}
                        value={desc}
                        onChange={onDescChanged}
                    />
                </div>
                <div className="input-group">Image:
                    <input value={image} onChange={onImageChanged} type="text" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                </div>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={onSavePostClicked}
                    >Save</button>
                    <Link to="/"><button type="button" className="btn btn-outline-primary">Cancel</button></Link>


                </div>
            </form>
        </section>
    );
}

export default AddCard;