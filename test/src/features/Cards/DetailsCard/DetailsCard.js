import React from 'react'
import './DetailsCard.css'

const DetailsCard = () => {
    return (
        <div className='social-detail'>
            <h2 >SOCIAL CARD DETAIL</h2>
            <div className='avatar-detail-container'>
                <div className='avatar-detail'>
                    <img src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png' alt='' />
                </div>
                <div className='avatar-detail-content'>
                    <p className='name-detail'>Binance</p>
                    <p className='date-detail' style={{ color: '#5B7083' }}>22/04/2021 (day create)</p>
                </div>
            </div>
            <div className='content-detail'>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more- or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <div className='image-content-detail'>
                    <img src='https://files.fullstack.edu.vn/f8-prod/courses/13/13.png' alt='' />
                </div>
                <div className='reaction-detail'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15.393" viewBox="0 0 18 15.393">
                            <path id="heart-solid" d="M0,47.382v-.2a5.025,5.025,0,0,1,8.578-3.554L9,44.045l.39-.421a5.114,5.114,0,0,1,4.412-1.4A5.024,5.024,0,0,1,18,47.178v.2a5.259,5.259,0,0,1-1.673,3.85L9.974,57.162a1.429,1.429,0,0,1-1.948,0L1.673,51.231A5.264,5.264,0,0,1,0,47.382Z" transform="translate(0 -42.152)" fill="#f3115e" />
                        </svg>
                    </span>
                    <p style={{ marginLeft: '5px' }}>2</p>

                    <span style={{ marginLeft: '25px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17.904" viewBox="0 0 18 17.904">
                            <path id="message-solid" d="M17.08,2.218V12.311a2.227,2.227,0,0,1-2.25,2.218H9.768L5.377,17.823a.424.424,0,0,1-.672-.341V14.53H1.33A2.248,2.248,0,0,1-.92,12.311V2.218A2.227,2.227,0,0,1,1.33,0h13.5A2.229,2.229,0,0,1,17.08,2.218Z" transform="translate(0.92)" fill="#064ebc" />
                        </svg>
                    </span>
                    <p style={{ marginLeft: '5px' }}>2</p>

                </div>

                <hr />
                <div className='wrap-comment'>
                    <div className='comment-detail'>
                        <p className='date-detail' style={{ color: '#5B7083' }}>22/04/2021 (day create)</p>
                        <p style={{ fontSize: '15px' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more- or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>

                </div>
                <div className='wrap-comment'>
                    <div className='comment-detail'>
                        <p className='date-detail' style={{ color: '#5B7083' }}>22/04/2021 (day create)</p>
                        <p style={{ fontSize: '15px' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more- or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                </div>
                <div style={{ margin: '30px 0px 30px 0px' }}>
                    <hr />
                </div>
            </div>
            <div className='form-comment-detail'>
                <h4>Post a new comment</h4>
                <textarea className='input-comment-detail' placeholder='Add comment...'></textarea>
                <button className='form-button-detail'>Post</button>
            </div>

        </div>
    )
}

export default DetailsCard