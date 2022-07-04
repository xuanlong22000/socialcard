import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./ItemCard.css";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { format } from 'date-format-parse';
import { deletePosts } from '../CardSlice';
import UpdateCard from '../UpdateCard/UpdateCard';


function ItemCard(props) {
    const post = props.props

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const dispatch = useDispatch()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    function handleDelete(id) {
        dispatch(deletePosts(id))
        handleClose2()
    }
    return (
        <div>
            <article className="cards" key={post._id}>
                <div className="cards_header">
                    <div className="cards_user">

                        <img className="avatar" src={post.avatar} alt='' />

                        <div className='avatar-list-content'>
                            <p className='name-list'>{post.name}</p>
                            <p className='date-list'>{format(post.createdAt, 'DD/MM/YYYY')}</p>
                        </div>
                    </div>

                    <div className="cards_icon">

                        <span onClick={handleOpen} className="pencil">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path id="pencil-alt-solid" d="M17.528,5.068,15.907,6.689a.422.422,0,0,1-.6,0l-3.9-3.9a.422.422,0,0,1,0-.6L13.028.568a1.691,1.691,0,0,1,2.387,0l2.113,2.113A1.685,1.685,0,0,1,17.528,5.068ZM10.015,3.581.782,12.814.037,17.085a.845.845,0,0,0,.977.977l4.272-.749,9.232-9.232a.422.422,0,0,0,0-.6l-3.9-3.9a.427.427,0,0,0-.6,0ZM4.386,12.023a.49.49,0,0,1,0-.7L9.8,5.912a.492.492,0,1,1,.7.7L5.082,12.023a.49.49,0,0,1-.7,0ZM3.117,14.979H4.8v1.276l-2.268.4L1.443,15.559l.4-2.268H3.117Z" transform="translate(-0.024 -0.075)" fill="#064ebc" />
                            </svg>
                        </span>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box >
                                <UpdateCard props={handleClose} />
                            </Box>
                        </Modal>


                        <span onClick={handleOpen2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20.571" viewBox="0 0 18 20.571">
                                <path id="trash-alt-regular" d="M10.768,16.714h.964a.482.482,0,0,0,.482-.482V7.554a.482.482,0,0,0-.482-.482h-.964a.482.482,0,0,0-.482.482v8.679A.482.482,0,0,0,10.768,16.714Zm6.589-13.5H14.046L12.68.936A1.929,1.929,0,0,0,11.025,0H6.975A1.929,1.929,0,0,0,5.321.936L3.954,3.214H.643A.643.643,0,0,0,0,3.857V4.5a.643.643,0,0,0,.643.643h.643v13.5a1.929,1.929,0,0,0,1.929,1.929H14.786a1.929,1.929,0,0,0,1.929-1.929V5.143h.643A.643.643,0,0,0,18,4.5V3.857A.643.643,0,0,0,17.357,3.214ZM6.9,2.045a.241.241,0,0,1,.207-.117h3.777a.241.241,0,0,1,.207.117l.7,1.169H6.2Zm7.881,16.6H3.214V5.143H14.786ZM6.268,16.714h.964a.482.482,0,0,0,.482-.482V7.554a.482.482,0,0,0-.482-.482H6.268a.482.482,0,0,0-.482.482v8.679A.482.482,0,0,0,6.268,16.714Z" fill="#f3115e" />
                            </svg>
                        </span>
                        <Modal
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box>
                                <div className="form-item-card">
                                    <div className="title-item-card">Your about to delete a item</div>
                                    <span className="trash-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="57.143" viewBox="0 0 50 57.143">
                                            <path id="trash-can-regular" d="M17.857,44.643a1.786,1.786,0,0,1-3.571,0V21.429a1.786,1.786,0,0,1,3.571,0Zm8.929,0a1.786,1.786,0,0,1-3.571,0V21.429a1.786,1.786,0,0,1,3.571,0Zm8.929,0a1.786,1.786,0,0,1-3.571,0V21.429a1.786,1.786,0,0,1,3.571,0ZM35.435,2.783l4.1,6.145h7.79a2.679,2.679,0,0,1,0,5.357h-.893V48.214A8.926,8.926,0,0,1,37.5,57.143h-25a8.928,8.928,0,0,1-8.929-8.929V14.286H2.679a2.679,2.679,0,0,1,0-5.357h7.792l4.094-6.145A6.256,6.256,0,0,1,19.766,0H30.234a6.256,6.256,0,0,1,5.2,2.783ZM16.908,8.929H33.092L30.971,5.754a.9.9,0,0,0-.737-.4H19.766c-.29,0-.67.15-.737.4ZM8.929,48.214A3.57,3.57,0,0,0,12.5,51.786h25a3.568,3.568,0,0,0,3.571-3.571V14.286H8.929Z" fill="#f3115e" />
                                        </svg>
                                    </span>
                                    <p className="question-delete">This will delete your item form list <br /> Are you sure?</p>

                                    <div className="btn-delete-card">

                                        <button type="button" className="btn-delete" onClick={() => handleDelete(post._id)}>Delete</button>
                                        <button type="button" className="btn-cancel-delete" onClick={() => handleClose2()}>Cancel</button>
                                    </div>
                                </div>

                            </Box>
                        </Modal>
                    </div>
                </div>
                <div className="cards_footer">
                    <p className="description">{post.desc}</p>
                    <img src={post.image} alt='' />
                </div>

            </article>
        </div>
    )
}

export default ItemCard