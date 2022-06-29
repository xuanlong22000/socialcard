import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateCard() {
    const dispatch = useDispatch()

    const [data, setData] = useState([])
    const { id } = useParams()

    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')


    useEffect(() => {
        axios.get(`http://localhost:5000/posts/update/${id}`).then(res => console.log(res.data))
    }, [])

    const onAvatarChanged = e => setAvatar(e.target.value)
    const onNameChanged = e => setName(e.target.value)
    const onDescChanged = e => setDesc(e.target.value)
    const onImageChanged = e => setImage(e.target.value)

    const updateCard = () => {

    }

    return (
        <section>
            <h2>Update Card</h2>
            <form>
                <div className="input-group">Avatar:
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
                        onClick={updateCard}
                    >Save</button>
                    <Link to="/"><button type="button" className="btn btn-outline-primary">Cancel</button></Link>


                </div>
            </form>
        </section>
    );
}

export default UpdateCard;