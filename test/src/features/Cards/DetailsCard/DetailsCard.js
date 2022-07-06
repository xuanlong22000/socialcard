import axios from 'axios'
import { format } from 'date-format-parse'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailsCard.css'

const DetailsCard = () => {

    const path = useParams()
    const [comments, setComments] = useState([]);
    const [saveComment, setSaveComment] = useState("");
    const [commentError, setCommentError] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://192.168.0.120:5000/posts/details/${path.id}`)
            .then(res => setData(res.data))
    }, [])


    useEffect(() => {
        axios.get(`http://192.168.0.120:5000/posts/comment/${path.id}`)
            .then((response) => setComments(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleSubmitComment = async (e) => {
        const data = { cardId: path.id, comment: saveComment }
        await axios.post(`http://192.168.0.120:5000/posts/comment/add`, data)
            .then((res) => window.location.reload())
            .catch((error) => console.log(error));
    }

    return (
        <div className='social-detail'>
            <h2 >SOCIAL CARD DETAIL</h2>
            <div className='avatar-detail-container'>
                <div className='avatar-detail'>
                    <img src={data.avatar} alt='' />
                </div>
                <div className='avatar-detail-content'>
                    <p className='name-detail'>{data.name}</p>
                    <p className='date-detail' style={{ color: '#5B7083' }}>{format(data.createdAt, 'DD/MM/YYYY')}</p>
                </div>
            </div>
            <div className='content-detail'>
                <p>{data.desc}</p>
                <div className='image-content-detail'>
                    <img src={data.image} alt='' />
                </div>
                <div className='reaction-detail'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15.393" viewBox="0 0 18 15.393">
                            <path id="heart-solid" d="M0,47.382v-.2a5.025,5.025,0,0,1,8.578-3.554L9,44.045l.39-.421a5.114,5.114,0,0,1,4.412-1.4A5.024,5.024,0,0,1,18,47.178v.2a5.259,5.259,0,0,1-1.673,3.85L9.974,57.162a1.429,1.429,0,0,1-1.948,0L1.673,51.231A5.264,5.264,0,0,1,0,47.382Z" transform="translate(0 -42.152)" fill="#f3115e" />
                        </svg>
                    </span>
                    <p style={{ marginLeft: '5px', lineHeight: '1.9' }}>2</p>

                    <span style={{ marginLeft: '25px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17.904" viewBox="0 0 18 17.904">
                            <path id="message-solid" d="M17.08,2.218V12.311a2.227,2.227,0,0,1-2.25,2.218H9.768L5.377,17.823a.424.424,0,0,1-.672-.341V14.53H1.33A2.248,2.248,0,0,1-.92,12.311V2.218A2.227,2.227,0,0,1,1.33,0h13.5A2.229,2.229,0,0,1,17.08,2.218Z" transform="translate(0.92)" fill="#064ebc" />
                        </svg>
                    </span>
                    <p style={{ marginLeft: '5px', lineHeight: '1.9' }}>{comments.length}</p>

                </div>

                <hr />

                {comments.map((item, index) => (
                    <div key={index} className='wrap-comment'>
                        <div className='comment-detail'>
                            <p className='date-detail' style={{ color: '#5B7083' }}>{format(item.createdAt, 'DD/MM/YYYY')}</p>
                            <p style={{ fontSize: '15px' }}>{item.comment}</p>
                        </div>

                    </div>
                ))}


                <div style={{ margin: '30px 0px 30px 0px' }}>
                    <hr />
                </div>
            </div>
            <div className='form-comment-detail'>
                <h4>Post a new comment</h4>
                <textarea className='input-comment-detail' placeholder='Add comment...' onChange={(e) => setSaveComment(e.target.value)}></textarea>
                <button className='form-button-detail' onClick={handleSubmitComment}>Post</button>
            </div>

        </div>
    )
}

export default DetailsCard