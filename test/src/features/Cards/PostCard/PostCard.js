import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCard from "../AddCard/AddCard";
import ItemCard from "../ItemCard/ItemCard";
import "./PostCard.css";

// This is LIST social

const PostCard = () => {

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts.posts)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // dispatch(getPosts())

    // function handleDelete(post) {
    //     console.log('post', post);
    //     // dispatch(deletePost(id))
    //     // window.location.reload()
    // }
    // function handleUpdate(id) {
    //     SocialCardsApi.update(id)
    // }

    const filterPosts = posts.filter(post => post.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <section className='container-social-card'>
            <h2 className='title-list-social'>LIST SOCIAL CARD</h2>
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
                        <AddCard props={handleClose} />
                    </Box>
                </Modal>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" className="search" placeholder="Search name..." />

                <svg className='glasses' xmlns="http://www.w3.org/2000/svg" width="20" height="20.003" viewBox="0 0 20 20.003">
                    <path id="search-solid" d="M19.728,17.294,15.833,13.4a.937.937,0,0,0-.664-.273h-.637a8.122,8.122,0,1,0-1.406,1.406v.637a.937.937,0,0,0,.273.664l3.895,3.895a.934.934,0,0,0,1.324,0l1.106-1.106A.942.942,0,0,0,19.728,17.294Zm-11.6-4.168a5,5,0,1,1,5-5A5,5,0,0,1,8.126,13.126Z" fill="#bdbdbd" opacity="0.3" />
                </svg>

            </div>
            <div className='group-list-container'>

                <div className="group_list">
                    {filterPosts.map((e, i) => (
                        <ItemCard props={e} key={i} />
                    ))}
                </div>
            </div>
        </section >
    )
}

export default PostCard

