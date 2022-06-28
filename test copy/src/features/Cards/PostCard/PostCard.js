import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import "./PostCard.css";
import { deletePost, selectAllPosts, updatePost } from "../CardSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// This is LIST social
const PostCard = () => {

    const [data, setData] = useState([])
    const history = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        axios('http://localhost:5000/posts').then(res => setData(res.data))

    }, [])

    function handleDelete(id) {
        dispatch(deletePost(id))
        history("/")
    }

    function handleUpdate() {
        dispatch(updatePost(
            {

            }
        ))
    }


    const renderedPosts = data.map(post => (
        <article className="cards" key={post._id}>
            <div className="cards_header">
                <div className="cards_user">
                    <img className="avatar" src={post.avatar} alt='' />
                    <h3>{post.name}</h3>
                </div>

                <div className="cards_icon">
                    <Link to="/update"><span><FontAwesomeIcon className="icon_1" icon={faEdit} /></span></Link>

                    <span onClick={() => handleDelete(post._id)}><FontAwesomeIcon className="icon_2" icon={faTrash} /></span>
                </div>
            </div>
            <div className="cards_footer">
                <p>{post.desc.substring(0, 100)}</p>
                <img className="img" src={post.image} alt='' />
            </div>

        </article>
    ))

    return (
        <section>
            <h2>List social card</h2>
            <div className="group">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="button">Revert</button>
                    <Link to="/add"><button className="btn btn-warning" type="button">Add</button></Link>

                </div>
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" />
                    <span className="input-group-text" id="search-addon" >
                        <FontAwesomeIcon icon={faSearch} />
                    </span >
                </div >
            </div>


            <div className="group_list">

                {renderedPosts}
            </div>
        </section >
    )
}

export default PostCard

