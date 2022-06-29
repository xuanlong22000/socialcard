import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import axios from "axios";
import "./PostCard.css";
import { deletePost, selectAllPosts, updatePost } from "../CardSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialCardsApi from "../../../api/socialCardApi";
import AddCard from "../AddCard/AddCard";

// This is LIST social
const PostCard = () => {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false);
    const history = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        axios('http://localhost:5000/posts').then(res => setData(res.data))

    }, [])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleDelete(id) {
        dispatch(deletePost(id))
        window.location.reload()
    }

    function handleUpdate(id) {
        SocialCardsApi.update(id)
    }


    const renderedPosts = data.map(post => (
        <article className="cards" key={post._id}>
            <div className="cards_header">
                <div className="cards_user">
                    <img className="avatar" src={post.avatar} alt='' />
                    <h3>{post.name}</h3>
                </div>

                <div className="cards_icon">
                    <Link to={`/update/${post._id}`}>
                        <span className="pencil" onClick={() => handleUpdate(post._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path id="pencil-alt-solid" d="M17.528,5.068,15.907,6.689a.422.422,0,0,1-.6,0l-3.9-3.9a.422.422,0,0,1,0-.6L13.028.568a1.691,1.691,0,0,1,2.387,0l2.113,2.113A1.685,1.685,0,0,1,17.528,5.068ZM10.015,3.581.782,12.814.037,17.085a.845.845,0,0,0,.977.977l4.272-.749,9.232-9.232a.422.422,0,0,0,0-.6l-3.9-3.9a.427.427,0,0,0-.6,0ZM4.386,12.023a.49.49,0,0,1,0-.7L9.8,5.912a.492.492,0,1,1,.7.7L5.082,12.023a.49.49,0,0,1-.7,0ZM3.117,14.979H4.8v1.276l-2.268.4L1.443,15.559l.4-2.268H3.117Z" transform="translate(-0.024 -0.075)" fill="#064ebc" />
                            </svg>
                        </span>
                    </Link>

                    <span onClick={() => handleDelete(post._id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20.571" viewBox="0 0 18 20.571">
                            <path id="trash-alt-regular" d="M10.768,16.714h.964a.482.482,0,0,0,.482-.482V7.554a.482.482,0,0,0-.482-.482h-.964a.482.482,0,0,0-.482.482v8.679A.482.482,0,0,0,10.768,16.714Zm6.589-13.5H14.046L12.68.936A1.929,1.929,0,0,0,11.025,0H6.975A1.929,1.929,0,0,0,5.321.936L3.954,3.214H.643A.643.643,0,0,0,0,3.857V4.5a.643.643,0,0,0,.643.643h.643v13.5a1.929,1.929,0,0,0,1.929,1.929H14.786a1.929,1.929,0,0,0,1.929-1.929V5.143h.643A.643.643,0,0,0,18,4.5V3.857A.643.643,0,0,0,17.357,3.214ZM6.9,2.045a.241.241,0,0,1,.207-.117h3.777a.241.241,0,0,1,.207.117l.7,1.169H6.2Zm7.881,16.6H3.214V5.143H14.786ZM6.268,16.714h.964a.482.482,0,0,0,.482-.482V7.554a.482.482,0,0,0-.482-.482H6.268a.482.482,0,0,0-.482.482v8.679A.482.482,0,0,0,6.268,16.714Z" fill="#f3115e" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="cards_footer">
                <p className="description">{post.desc}</p>
                <img className="img" src={post.image} alt='' />
            </div>

        </article>
    ))

    return (
        <section>
            <h2>LIST SOCIAL CARD</h2>
            <div className="group">

                <button className="btn-revert" type="button">Revert</button>
                {/* <Link to="/add"></Link> */}
                <button className="btn-add" type="button" onClick={handleOpen}>Add New</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box >
                        <AddCard />
                    </Box>
                </Modal>

                <input type="search" className="search" placeholder="Search name..." />
                {/* <span className="input-group-text" id="search-addon" >
                        
                    </span > */}
            </div>


            <div className="group_list">

                {renderedPosts}
            </div>
        </section >
    )
}

export default PostCard

