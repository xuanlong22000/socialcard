import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddCard from "../AddCard/AddCard";
import ItemCard from "../ItemCard/ItemCard";
import "./PostCard.css";
import axios from 'axios';
import { getPosts } from '../CardSlice';
import { revertDelete } from '../RevertSlice';
import { env } from '../../../config';
import { CircularProgress } from '@mui/material';

// This is LIST social

const PostCard = () => {

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('')
    const loadingSpinner = useSelector(state => state.posts.loading)
    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts.posts)
    const ListReverts = useSelector(state => state.reverts.revert)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRevert = async () => {
        if (ListReverts.length > 0) {
            await axios.put(`${env.API_HOST}/posts/revert/${ListReverts[0]}`)
            dispatch(revertDelete())
            dispatch(getPosts())
        } else {
            alert('Index Start')
        }

    }

    const filterPosts = posts.filter(post => (post.name.toLowerCase().includes(search.toLowerCase()) || post.desc.toLowerCase().includes(search.toLowerCase())) && !post.deleted)

    return (
        <section className='container-social-card'>
            <h2 className='title-list-social'>LIST SOCIAL CARD</h2>
            <div className="group">
                <button className="btn-revert" type="button" onClick={handleRevert}>Revert</button>
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
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="search" placeholder="Search name..." />

                <svg className='glasses' xmlns="http://www.w3.org/2000/svg" width="20" height="20.003" viewBox="0 0 20 20.003">
                    <path id="search-solid" d="M19.728,17.294,15.833,13.4a.937.937,0,0,0-.664-.273h-.637a8.122,8.122,0,1,0-1.406,1.406v.637a.937.937,0,0,0,.273.664l3.895,3.895a.934.934,0,0,0,1.324,0l1.106-1.106A.942.942,0,0,0,19.728,17.294Zm-11.6-4.168a5,5,0,1,1,5-5A5,5,0,0,1,8.126,13.126Z" fill="#bdbdbd" opacity="0.3" />
                </svg>

            </div>
            <div className='group-list-container'>

                <div className="group_list">
                    {
                        loadingSpinner
                            ?
                            <>
                                <CircularProgress style={{ marginTop: '250px', color: 'deeppink' }} size={80} />
                            </>
                            :
                            filterPosts.length === 0
                                ?
                                <div className='empty-search'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="186.305" viewBox="0 0 250 186.305">
                                            <g id="image-empty" transform="translate(37.47 -0.79)">
                                                <g id="Background_Complete" data-name="Background Complete" transform="translate(-37.47 0.79)">
                                                    <rect id="Rectangle_198" data-name="Rectangle 198" width="250" height="0.125" transform="translate(0 163.725)" fill="#ebebeb" />
                                                    <rect id="Rectangle_199" data-name="Rectangle 199" width="16.56" height="0.125" transform="translate(208.39 171.77)" fill="#ebebeb" />
                                                    <rect id="Rectangle_200" data-name="Rectangle 200" width="4.345" height="0.125" transform="translate(161.265 173.13)" fill="#ebebeb" />
                                                    <rect id="Rectangle_201" data-name="Rectangle 201" width="9.595" height="0.125" transform="translate(198.295 167.13)" fill="#ebebeb" />
                                                    <rect id="Rectangle_202" data-name="Rectangle 202" width="21.595" height="0.125" transform="translate(26.23 167.97)" fill="#ebebeb" />
                                                    <rect id="Rectangle_203" data-name="Rectangle 203" width="3.165" height="0.125" transform="translate(52.28 167.97)" fill="#ebebeb" />
                                                    <rect id="Rectangle_204" data-name="Rectangle 204" width="46.84" height="0.125" transform="translate(65.735 170.08)" fill="#ebebeb" />
                                                    <path id="Path_1" data-name="Path 1" d="M100.14,142.215H3.59A2.855,2.855,0,0,1,.74,139.36V3.645A2.855,2.855,0,0,1,3.59.79h96.55A2.855,2.855,0,0,1,103,3.645V139.36A2.855,2.855,0,0,1,100.14,142.215ZM3.59.895A2.73,2.73,0,0,0,.87,3.645V139.36A2.73,2.73,0,0,0,3.6,142.09h96.55a2.735,2.735,0,0,0,2.73-2.73V3.645A2.735,2.735,0,0,0,100.14.895Z" transform="translate(18.365 -0.79)" fill="#ebebeb" />
                                                    <path id="Path_2" data-name="Path 2" d="M316.435,142.215h-96.55a2.855,2.855,0,0,1-2.855-2.855V3.645A2.855,2.855,0,0,1,219.885.79h96.55a2.855,2.855,0,0,1,2.855,2.855V139.36a2.855,2.855,0,0,1-2.855,2.855ZM219.885.895a2.735,2.735,0,0,0-2.73,2.73V139.36a2.735,2.735,0,0,0,2.73,2.73h96.55a2.735,2.735,0,0,0,2.73-2.73V3.645a2.735,2.735,0,0,0-2.73-2.75Z" transform="translate(-89.78 -0.79)" fill="#ebebeb" />
                                                    <rect id="Rectangle_205" data-name="Rectangle 205" width="68.89" height="45.115" transform="translate(213.735 59.555) rotate(180)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_206" data-name="Rectangle 206" width="70.01" height="45.115" transform="translate(212.75 59.555) rotate(180)" fill="#f0f0f0" />
                                                    <rect id="Rectangle_207" data-name="Rectangle 207" width="68.89" height="8.855" transform="translate(213.735 68.405) rotate(180)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_208" data-name="Rectangle 208" width="70.01" height="8.855" transform="translate(209.255 68.405) rotate(180)" fill="#f0f0f0" />
                                                    <rect id="Rectangle_209" data-name="Rectangle 209" width="39.23" height="64.125" transform="translate(209.81 17.385) rotate(90)" fill="#fafafa" />
                                                    <path id="Path_3" data-name="Path 3" d="M332.26,74.785,324.07,35.56H311.29l8.19,39.225Z" transform="translate(-136.91 -18.175)" fill="#fff" />
                                                    <path id="Path_4" data-name="Path 4" d="M379.22,73.555a.21.21,0,0,0,.21-.21V39.17a.21.21,0,0,0-.42,0V73.345a.2.2,0,0,0,.21.21Z" transform="translate(-170.77 -19.875)" fill="#f0f0f0" />
                                                    <path id="Path_5" data-name="Path 5" d="M309,74.785l-8.19-39.225H295.83l8.19,39.225Z" transform="translate(-129.18 -18.175)" fill="#fff" />
                                                    <rect id="Rectangle_210" data-name="Rectangle 210" width="39.23" height="0.375" transform="translate(146.06 17.385) rotate(90)" fill="#e6e6e6" />
                                                    <path id="Path_6" data-name="Path 6" d="M246.62,41.135h68.89l.275-3.3h-68.89Z" transform="translate(-104.575 -19.315)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_7" data-name="Path 7" d="M246.62,51.94h68.89l.275-3.29h-68.89Z" transform="translate(-104.575 -24.72)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_8" data-name="Path 8" d="M246.62,62.74h68.89l.275-3.29h-68.89Z" transform="translate(-104.575 -30.12)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_9" data-name="Path 9" d="M246.62,73.545h68.89l.275-3.295h-68.89Z" transform="translate(-104.575 -35.52)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_10" data-name="Path 10" d="M246.62,84.345h68.89l.275-3.295h-68.89Z" transform="translate(-104.575 -40.92)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_11" data-name="Path 11" d="M246.62,95.145h68.89l.275-3.295h-68.89Z" transform="translate(-104.575 -46.32)" fill="#ebebeb" opacity="0.6" />
                                                    <rect id="Rectangle_211" data-name="Rectangle 211" width="14.445" height="2.85" transform="translate(189.4 130.915)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_212" data-name="Rectangle 212" width="2.665" height="65.535" transform="translate(164.82 163.725) rotate(180)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_213" data-name="Rectangle 213" width="36.48" height="2.85" transform="translate(189.395 133.76) rotate(180)" fill="#f5f5f5" />
                                                    <rect id="Rectangle_214" data-name="Rectangle 214" width="14.445" height="2.85" transform="translate(189.4 146.5)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_215" data-name="Rectangle 215" width="36.48" height="2.85" transform="translate(189.395 149.345) rotate(180)" fill="#f5f5f5" />
                                                    <rect id="Rectangle_216" data-name="Rectangle 216" width="14.445" height="2.85" transform="translate(189.4 99.75)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_217" data-name="Rectangle 217" width="36.48" height="2.85" transform="translate(189.395 102.595) rotate(180)" fill="#f5f5f5" />
                                                    <rect id="Rectangle_218" data-name="Rectangle 218" width="14.445" height="2.85" transform="translate(189.4 115.33)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_219" data-name="Rectangle 219" width="36.48" height="2.85" transform="translate(189.395 118.18) rotate(180)" fill="#f5f5f5" />
                                                    <rect id="Rectangle_220" data-name="Rectangle 220" width="2.665" height="65.535" transform="translate(201.3 163.725) rotate(180)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_221" data-name="Rectangle 221" width="2.665" height="65.535" transform="translate(189.395 163.725) rotate(180)" fill="#f5f5f5" />
                                                    <rect id="Rectangle_222" data-name="Rectangle 222" width="2.665" height="65.535" transform="translate(155.58 163.725) rotate(180)" fill="#f5f5f5" />
                                                    <rect id="Rectangle_223" data-name="Rectangle 223" width="27.29" height="52.945" transform="translate(59.975 163.72) rotate(180)" fill="#e6e6e6" />
                                                    <path id="Path_12" data-name="Path 12" d="M35.19,320.93H27.9v-7.31H42.83Z" transform="translate(4.785 -157.205)" fill="#fafafa" />
                                                    <rect id="Rectangle_224" data-name="Rectangle 224" width="27.29" height="52.945" transform="translate(134.38 163.72) rotate(180)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_225" data-name="Rectangle 225" width="80.765" height="50.43" transform="translate(113.455 161.205) rotate(180)" fill="#fafafa" />
                                                    <path id="Path_13" data-name="Path 13" d="M167.22,320.93h7.285v-7.31H159.58Z" transform="translate(-61.055 -157.205)" fill="#fafafa" />
                                                    <rect id="Rectangle_226" data-name="Rectangle 226" width="69.46" height="12.62" transform="translate(107.8 142.19) rotate(180)" fill="#f0f0f0" />
                                                    <rect id="Rectangle_227" data-name="Rectangle 227" width="69.46" height="12.62" transform="translate(107.8 157.51) rotate(180)" fill="#f0f0f0" />
                                                    <path id="Path_14" data-name="Path 14" d="M2.3,0H45.36a2.29,2.29,0,0,1,2.29,2.29v.155H0V2.29A2.29,2.29,0,0,1,2.3,0Z" transform="translate(96.905 130.92) rotate(180)" fill="#fafafa" />
                                                    <rect id="Rectangle_228" data-name="Rectangle 228" width="69.46" height="12.62" transform="translate(107.8 126.875) rotate(180)" fill="#f0f0f0" />
                                                    <path id="Path_15" data-name="Path 15" d="M2.3,0H45.36a2.29,2.29,0,0,1,2.29,2.29v.155H0V2.29A2.29,2.29,0,0,1,2.3,0Z" transform="translate(96.905 115.6) rotate(180)" fill="#fafafa" />
                                                    <path id="Path_16" data-name="Path 16" d="M2.305,0H45.36a2.29,2.29,0,0,1,2.29,2.31v.155H0V2.31A2.29,2.29,0,0,1,2.305,0Z" transform="translate(96.905 146.235) rotate(180)" fill="#fafafa" />
                                                    <rect id="Rectangle_229" data-name="Rectangle 229" width="68.89" height="45.115" transform="translate(105.925 59.555) rotate(180)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_230" data-name="Rectangle 230" width="70.01" height="45.115" transform="translate(104.945 59.555) rotate(180)" fill="#f0f0f0" />
                                                    <rect id="Rectangle_231" data-name="Rectangle 231" width="68.89" height="8.855" transform="translate(105.925 68.405) rotate(180)" fill="#e6e6e6" />
                                                    <rect id="Rectangle_232" data-name="Rectangle 232" width="70.01" height="8.855" transform="translate(101.44 68.405) rotate(180)" fill="#f0f0f0" />
                                                    <rect id="Rectangle_233" data-name="Rectangle 233" width="39.23" height="64.125" transform="translate(102 17.385) rotate(90)" fill="#fafafa" />
                                                    <path id="Path_17" data-name="Path 17" d="M116.64,74.785,108.45,35.56H95.67l8.19,39.225Z" transform="translate(-29.1 -18.175)" fill="#fff" />
                                                    <path id="Path_18" data-name="Path 18" d="M163.59,73.555a.205.205,0,0,0,.21-.21V39.17a.21.21,0,0,0-.42,0V73.345a.21.21,0,0,0,.21.21Z" transform="translate(-62.955 -19.875)" fill="#f0f0f0" />
                                                    <path id="Path_19" data-name="Path 19" d="M93.385,74.785,85.195,35.56H80.21L88.4,74.785Z" transform="translate(-21.37 -18.175)" fill="#fff" />
                                                    <rect id="Rectangle_234" data-name="Rectangle 234" width="39.23" height="0.375" transform="translate(38.25 17.38) rotate(90)" fill="#e6e6e6" />
                                                    <path id="Path_20" data-name="Path 20" d="M31,41.135H99.89l.27-3.3H31.27Z" transform="translate(3.235 -19.315)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_21" data-name="Path 21" d="M31,44.855H99.89l.27-3.3H31.27Z" transform="translate(3.235 -21.175)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_22" data-name="Path 22" d="M31,48.565H99.89l.27-3.295H31.27Z" transform="translate(3.235 -23.03)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_23" data-name="Path 23" d="M31,52.285H99.89l.27-3.295H31.27Z" transform="translate(3.235 -24.89)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_24" data-name="Path 24" d="M31,56H99.89l.27-3.3H31.27Z" transform="translate(3.235 -26.745)" fill="#ebebeb" opacity="0.6" />
                                                    <path id="Path_25" data-name="Path 25" d="M31,59.715H99.89l.27-3.3H31.27Z" transform="translate(3.235 -28.605)" fill="#ebebeb" opacity="0.6" />
                                                    <rect id="Rectangle_235" data-name="Rectangle 235" width="2.38" height="26.545" transform="translate(50.39 109.16) rotate(180)" fill="#f5f5f5" />
                                                    <rect id="Rectangle_236" data-name="Rectangle 236" width="0.675" height="26.545" transform="translate(48.985 109.14) rotate(180)" fill="#fafafa" />
                                                    <rect id="Rectangle_237" data-name="Rectangle 237" width="0.265" height="26.545" transform="translate(49.53 109.14) rotate(180)" fill="#fafafa" />
                                                    <path id="Path_26" data-name="Path 26" d="M0,0H17.635a2.22,2.22,0,0,1-2.22,2.22H2.22A2.22,2.22,0,0,1,0,0Z" transform="translate(58.015 110.78) rotate(180)" fill="#f0f0f0" />
                                                    <path id="Path_27" data-name="Path 27" d="M51.68,180.215h0a.685.685,0,0,0,.685-.685V162.115a.685.685,0,0,0-.685-.685h0a.685.685,0,0,0-.68.685V179.52A.69.69,0,0,0,51.68,180.215Z" transform="translate(-6.765 -81.11)" fill="#f0f0f0" />
                                                    <path id="Path_28" data-name="Path 28" d="M39.6,163.74H60.925l-2.455-14.9H42.055Z" transform="translate(-1.065 -74.815)" fill="#e0e0e0" />
                                                </g>
                                                <g id="Shadow" transform="translate(-9.415 175.775)">
                                                    <ellipse id="_Path_" data-name="&lt;Path&gt;" cx="96.945" cy="5.66" rx="96.945" ry="5.66" fill="#f5f5f5" />
                                                </g>
                                                <g id="Window_No_Data" data-name="Window No Data" transform="translate(14.089 49.025)">
                                                    <rect id="Rectangle_238" data-name="Rectangle 238" width="0.5" height="9.245" transform="translate(0 25.507) rotate(-4.12)" fill="#407bff" />
                                                    <rect id="Rectangle_239" data-name="Rectangle 239" width="0.5" height="3.48" transform="translate(1.008 39.488) rotate(-4.12)" fill="#407bff" />
                                                    <path id="Path_29" data-name="Path 29" d="M183.165,179.13H76.085a4.825,4.825,0,0,1-4.72-4.4L66.1,101.66a4.05,4.05,0,0,1,4.085-4.4H177.27a4.825,4.825,0,0,1,4.72,4.4l5.26,73.065a4.055,4.055,0,0,1-4.085,4.4Z" transform="translate(-65.869 -97.259)" fill="#407bff" />
                                                    <path id="Path_30" data-name="Path 30" d="M183.985,179.13H76.9a4.825,4.825,0,0,1-4.72-4.4l-5.26-73.065a4.05,4.05,0,0,1,4.085-4.4H178.09a4.825,4.825,0,0,1,4.72,4.4l5.26,73.065a4.05,4.05,0,0,1-4.085,4.4Z" transform="translate(-66.279 -97.259)" fill="#407bff" />
                                                    <path id="Path_31" data-name="Path 31" d="M183.985,179.13H76.9a4.825,4.825,0,0,1-4.72-4.4l-5.26-73.065a4.05,4.05,0,0,1,4.085-4.4H178.09a4.825,4.825,0,0,1,4.72,4.4l5.26,73.065a4.05,4.05,0,0,1-4.085,4.4Z" transform="translate(-66.279 -97.259)" fill="#fff" opacity="0.5" />
                                                    <path id="Path_32" data-name="Path 32" d="M180.36,101.66H72.92c-2.735.225-2.175,4.39.585,4.39h107.26c2.765,0,2.725-4.165-.045-4.39Z" transform="translate(-68.389 -99.46)" fill="#407bff" />
                                                    <path id="Path_33" data-name="Path 33" d="M78.977,105.06a.925.925,0,0,1-.94,1,1.1,1.1,0,0,1-1.08-1,.93.93,0,0,1,.935-1,1.1,1.1,0,0,1,1.085,1Z" transform="translate(-71.301 -100.66)" fill="#fafafa" />
                                                    <path id="Path_34" data-name="Path 34" d="M85.857,105.06a.925.925,0,0,1-.94,1,1.1,1.1,0,0,1-1.08-1,.93.93,0,0,1,.935-1A1.11,1.11,0,0,1,85.857,105.06Z" transform="translate(-74.741 -100.66)" fill="#fafafa" />
                                                    <path id="Path_35" data-name="Path 35" d="M92.722,105.06a.925.925,0,0,1-.935,1,1.1,1.1,0,0,1-1.08-1,.925.925,0,0,1,.935-1A1.105,1.105,0,0,1,92.722,105.06Z" transform="translate(-78.176 -100.66)" fill="#fafafa" />
                                                    <path id="Path_36" data-name="Path 36" d="M186.885,183.135H84.435a1.74,1.74,0,0,1-1.71-1.6l-4.33-60.085a1.47,1.47,0,0,1,1.5-1.595h102.45a1.74,1.74,0,0,1,1.71,1.6l4.33,60.085a1.465,1.465,0,0,1-1.5,1.6Z" transform="translate(-72.019 -108.559)" fill="#fff" />
                                                    <path id="Path_37" data-name="Path 37" d="M188.435,174.435l-1.67-23.16-5.05-3.045H167.81l1.89,26.2Z" transform="translate(-116.729 -122.745)" fill="#fff" />
                                                    <path id="Path_38" data-name="Path 38" d="M188.194,174.435H169.459a.245.245,0,0,1-.245-.225l-1.885-26.2a.25.25,0,0,1,.065-.185.255.255,0,0,1,.175-.075h13.9a.235.235,0,0,1,.125.035l5.065,3.04a.24.24,0,0,1,.12.19l1.665,23.16a.23.23,0,0,1-.065.185A.235.235,0,0,1,188.194,174.435Zm-18.5-.5h18.25L186.3,151.16l-4.89-2.94H167.829Z" transform="translate(-116.488 -122.505)" fill="#407bff" />
                                                    <path id="Path_39" data-name="Path 39" d="M200.67,151.275l-5.05-3.045,1.855,4.03Z" transform="translate(-130.634 -122.745)" fill="#ebebeb" />
                                                    <path id="Path_40" data-name="Path 40" d="M197.229,152.261a.245.245,0,0,1-.22-.14l-1.855-4.03a.24.24,0,0,1,.345-.31l5.065,3.04a.245.245,0,0,1-.05.44l-3.2,1Zm-1.31-3.66,1.44,3.12,2.5-.765Z" transform="translate(-130.388 -122.501)" fill="#407bff" />
                                                    <path id="Path_41" data-name="Path 41" d="M181.361,170.784a1,1,0,0,1-1,1.06,1.16,1.16,0,0,1-1.135-1.06.97.97,0,0,1,1-1.055,1.155,1.155,0,0,1,1.135,1.055Z" transform="translate(-122.435 -133.494)" fill="#407bff" />
                                                    <path id="Path_42" data-name="Path 42" d="M195.091,170.784a.97.97,0,0,1-1,1.06,1.155,1.155,0,0,1-1.135-1.06.97.97,0,0,1,1-1.055A1.15,1.15,0,0,1,195.091,170.784Z" transform="translate(-129.3 -133.494)" fill="#407bff" />
                                                    <path id="Path_43" data-name="Path 43" d="M188.943,181.775a.235.235,0,0,1-.24-.225c-.125-1.7-2.795-3.085-5.95-3.085a6.906,6.906,0,0,0-4.905,1.625,1.87,1.87,0,0,0-.57,1.425.251.251,0,1,1-.5.035,2.375,2.375,0,0,1,.7-1.79,7.355,7.355,0,0,1,5.26-1.78c3.465,0,6.29,1.555,6.43,3.535a.24.24,0,0,1-.225.26Z" transform="translate(-121.212 -137.62)" fill="#407bff" />
                                                    <path id="Path_44" data-name="Path 44" d="M175.464,165.931a.25.25,0,0,1-.165-.06.245.245,0,0,1,0-.345l1.06-1.145a.25.25,0,0,1,.345,0,.24.24,0,0,1,0,.34l-1.065,1.145A.235.235,0,0,1,175.464,165.931Z" transform="translate(-120.438 -130.786)" fill="#407bff" />
                                                    <path id="Path_45" data-name="Path 45" d="M198.647,165.931a.25.25,0,0,1-.165-.065l-1.225-1.14a.24.24,0,0,1,0-.345.245.245,0,0,1,.34,0l1.225,1.145a.24.24,0,0,1,0,.34A.255.255,0,0,1,198.647,165.931Z" transform="translate(-131.416 -130.786)" fill="#407bff" />
                                                    <path id="Path_46" data-name="Path 46" d="M164.79,211h1.13l1.63,2.165L167.395,211h1.14l.28,3.915h-1.14l-1.62-2.15.155,2.15h-1.14Z" transform="translate(-115.219 -154.13)" fill="#407bff" />
                                                    <path id="Path_47" data-name="Path 47" d="M173.84,212.87a1.9,1.9,0,0,1,.43-1.5,1.86,1.86,0,0,1,1.45-.535,2.17,2.17,0,0,1,1.54.5,2.115,2.115,0,0,1,.635,1.47,2.28,2.28,0,0,1-.15,1.125,1.46,1.46,0,0,1-.615.685,2.145,2.145,0,0,1-1.07.245,2.625,2.625,0,0,1-1.115-.21,1.845,1.845,0,0,1-.75-.67A2.33,2.33,0,0,1,173.84,212.87Zm1.21,0a1.415,1.415,0,0,0,.285.855.81.81,0,0,0,.615.26.7.7,0,0,0,.59-.255,1.375,1.375,0,0,0,.145-.91,1.285,1.285,0,0,0-.28-.81.82.82,0,0,0-.625-.255.685.685,0,0,0-.57.26,1.275,1.275,0,0,0-.16.86Z" transform="translate(-119.734 -154.044)" fill="#407bff" />
                                                    <path id="Path_48" data-name="Path 48" d="M186.68,211h1.8a2.256,2.256,0,0,1,.87.145,1.53,1.53,0,0,1,.57.415,1.88,1.88,0,0,1,.355.625,3.149,3.149,0,0,1,.15.76,2.54,2.54,0,0,1-.075,1,1.4,1.4,0,0,1-.355.58,1.15,1.15,0,0,1-.5.31,2.781,2.781,0,0,1-.715.105h-1.795Zm1.275.885.155,2.14h.295a1.24,1.24,0,0,0,.535-.08.54.54,0,0,0,.23-.295,1.77,1.77,0,0,0,.04-.68,1.39,1.39,0,0,0-.265-.855.925.925,0,0,0-.69-.23Z" transform="translate(-126.164 -154.129)" fill="#407bff" />
                                                    <path id="Path_49" data-name="Path 49" d="M197.245,214.26H195.87l-.145.645H194.49l1.19-3.915H197l1.755,3.915h-1.27Zm-.315-.845-.54-1.42-.33,1.41Z" transform="translate(-130.069 -154.125)" fill="#407bff" />
                                                    <path id="Path_50" data-name="Path 50" d="M201.9,211h3.68l.065.97h-1.23l.21,2.945h-1.21l-.21-2.945H201.95Z" transform="translate(-133.774 -154.13)" fill="#407bff" />
                                                    <path id="Path_51" data-name="Path 51" d="M212.14,214.26h-1.37l-.145.645H209.39l1.19-3.915h1.32l1.75,3.915h-1.265Zm-.31-.845-.535-1.42-.325,1.41Z" transform="translate(-137.519 -154.125)" fill="#407bff" />
                                                </g>
                                                <g id="Character" transform="translate(106.249 29.811)">
                                                    <path id="Path_52" data-name="Path 52" d="M316.22,98.57c.445-.225,1-.5,1.47-.785s1-.565,1.5-.86c1-.6,1.965-1.2,2.9-1.865a38.069,38.069,0,0,0,5.26-4.325c.2-.19.385-.4.58-.6l.285-.305.14-.155.07-.075h0v.025c-.07.135,0,.1,0-.035a2.64,2.64,0,0,0,.075-.545,15.257,15.257,0,0,0-.365-3.16c-.445-2.245-1.12-4.55-1.785-6.81l1.94-.85a40.875,40.875,0,0,1,3.055,6.8,15.786,15.786,0,0,1,.86,3.945,6,6,0,0,1-.04,1.255,3.835,3.835,0,0,1-.61,1.64l-.085.115-.065.085-.075.1-.155.185-.31.375c-.21.25-.405.5-.625.74a40.571,40.571,0,0,1-8.835,7.17c-.535.33-1.08.64-1.635.945s-1.095.585-1.735.88Z" transform="translate(-283.094 -68.526)" fill="#ffb573" />
                                                    <path id="Path_53" data-name="Path 53" d="M306.349,352.938a5.045,5.045,0,0,0,1.105-.15.1.1,0,0,0,.035-.18c-.145-.095-1.415-.915-1.9-.7a.34.34,0,0,0-.2.28.57.57,0,0,0,.165.525A1.175,1.175,0,0,0,306.349,352.938Zm.825-.3a2.052,2.052,0,0,1-1.5-.07.385.385,0,0,1-.1-.355.135.135,0,0,1,.085-.125c.265-.1,1,.25,1.53.56Z" transform="translate(-277.672 -205.354)" fill="#407bff" />
                                                    <path id="Path_54" data-name="Path 54" d="M308.367,351.835h.05a.11.11,0,0,0,.05-.09c0-.05,0-1.255-.46-1.66a.525.525,0,0,0-.42-.13.34.34,0,0,0-.335.275c-.095.475.665,1.375,1.065,1.6Zm-.715-1.7a.305.305,0,0,1,.22.085,2.265,2.265,0,0,1,.39,1.32c-.4-.32-.875-1-.815-1.285,0-.045.035-.1.16-.12Z" transform="translate(-278.605 -204.392)" fill="#407bff" />
                                                    <path id="Path_55" data-name="Path 55" d="M300.559,93.9c-.5,2.5-1.5,7.5.225,9.18,0,0-.68,2.5-5.295,2.5-5.08,0-2.43-2.5-2.43-2.5,2.775-.66,2.7-2.72,2.22-4.65Z" transform="translate(-271.168 -76.366)" fill="#ffb573" />
                                                    <path id="Path_56" data-name="Path 56" d="M291.438,111.43c-.795.11-.115-1.955.2-2.17.75-.5,10.425-1.195,10.365,0a3.129,3.129,0,0,1-.7,1.825C300.888,111.41,298.4,110.39,291.438,111.43Z" transform="translate(-270.517 -83.716)" fill="#263238" />
                                                    <path id="Path_57" data-name="Path 57" d="M294.491,108.959c-.635.215-.575-1.865-.36-2.115.5-.58,8.335-2.59,8.565-1.455a3.183,3.183,0,0,1-.135,1.855C302.291,107.6,299.991,106.994,294.491,108.959Z" transform="translate(-271.974 -81.94)" fill="#263238" />
                                                    <path id="Path_58" data-name="Path 58" d="M287.459,83.914a.215.215,0,0,1-.165-.075,1.59,1.59,0,0,0-1.3-.615.2.2,0,0,1-.22-.175.205.205,0,0,1,.175-.22,2,2,0,0,1,1.645.76.2.2,0,0,1-.025.28A.25.25,0,0,1,287.459,83.914Z" transform="translate(-267.873 -70.83)" fill="#263238" />
                                                    <path id="Path_59" data-name="Path 59" d="M286.2,89.84a8.955,8.955,0,0,1-1,2.265,1.45,1.45,0,0,0,1.22.105Z" transform="translate(-267.584 -74.336)" fill="#ff5652" />
                                                    <path id="Path_60" data-name="Path 60" d="M286.891,88.054c.035.34-.12.63-.34.65s-.425-.235-.455-.57.115-.625.335-.645S286.856,87.744,286.891,88.054Z" transform="translate(-268.03 -73.16)" fill="#263238" />
                                                    <path id="Path_61" data-name="Path 61" d="M286.17,87.35l-.83-.15S285.8,87.79,286.17,87.35Z" transform="translate(-267.654 -73.016)" fill="#263238" />
                                                    <path id="Path_62" data-name="Path 62" d="M315.04,343.825h-4.19l.33-9.695h4.19Z" transform="translate(-280.409 -196.481)" fill="#ffb573" />
                                                    <path id="Path_63" data-name="Path 63" d="M304.154,352.55h4.705a.335.335,0,0,1,.335.29l.535,3.72a.675.675,0,0,1-.67.745c-1.64-.03-2.43-.125-4.5-.125-1.275,0-3.135.135-4.89.135s-1.855-1.74-1.12-1.9a8.186,8.186,0,0,0,4.9-2.605,1.085,1.085,0,0,1,.7-.26Z" transform="translate(-274.042 -205.691)" fill="#263238" />
                                                    <g id="Group_57" data-name="Group 57" transform="translate(30.601 137.649)" opacity="0.2">
                                                        <path id="Path_64" data-name="Path 64" d="M315.53,334.13h-4.19l-.17,5h4.19Z" transform="translate(-311.17 -334.13)" />
                                                    </g>
                                                    <path id="Path_65" data-name="Path 65" d="M267.934,102.875a75.552,75.552,0,0,1-7.5-3.375,45.656,45.656,0,0,1-7.2-4.39,16,16,0,0,1-1.71-1.535c-.14-.15-.28-.285-.415-.46a5.654,5.654,0,0,1-.44-.565,3.97,3.97,0,0,1-.685-1.805,4.11,4.11,0,0,1,.245-1.81,5.45,5.45,0,0,1,.7-1.305,9.354,9.354,0,0,1,1.7-1.76,21.255,21.255,0,0,1,3.65-2.33c.62-.33,1.25-.625,1.89-.9s1.27-.535,1.955-.77l.86,1.925a34.231,34.231,0,0,0-6.1,4.58,7.217,7.217,0,0,0-1,1.245c-.235.4-.235.69-.19.665s0,0,.07.05l.2.215a3.442,3.442,0,0,0,.27.27,12.785,12.785,0,0,0,1.35,1.085,32.375,32.375,0,0,0,3.22,2c1.125.625,2.285,1.225,3.465,1.8,2.36,1.13,4.8,2.215,7.195,3.2Z" transform="translate(-249.967 -70.351)" fill="#ffb573" />
                                                    <path id="Path_66" data-name="Path 66" d="M271.651,80.4l.69-1.5-3.145-1.1s-1,2.95.185,4.315h0A3.035,3.035,0,0,0,271.651,80.4Z" transform="translate(-259.384 -68.321)" fill="#ffb573" />
                                                    <path id="Path_67" data-name="Path 67" d="M272.735,72.765l-2.515-.725-.63,2.88,3.145,1.1Z" transform="translate(-259.779 -65.436)" fill="#ffb573" />
                                                    <path id="Path_68" data-name="Path 68" d="M338,76.78l.365-3.5-3.245.76s-.045,3.29,1.67,3.815Z" transform="translate(-292.543 -66.056)" fill="#ffb573" />
                                                    <path id="Path_69" data-name="Path 69" d="M336.375,68.34l-2.115.99.435,2.23,3.24-.76Z" transform="translate(-292.114 -63.586)" fill="#ffb573" />
                                                    <path id="Path_70" data-name="Path 70" d="M298.4,78.566c.155,4.155.3,5.91-1.57,8.235-2.825,3.5-7.96,2.775-9.35-1.25-1.25-3.62-1.29-9.805,2.59-11.845a5.67,5.67,0,0,1,8.33,4.86Z" transform="translate(-268.345 -65.938)" fill="#ffb573" />
                                                    <path id="Path_71" data-name="Path 71" d="M296.2,83.817c4.08-1.77,6.775-5.475,5.63-11.27-1.085-5.56-4.84-6.11-6.39-4.955s-5.41-.565-7.73,1.385c-4,3.38-.22,7,1.76,9.185C290.646,80.577,292.2,85.547,296.2,83.817Z" transform="translate(-267.955 -62.964)" fill="#263238" />
                                                    <path id="Path_72" data-name="Path 72" d="M302.238,69.31a4.145,4.145,0,1,0,.915-5.955,4.27,4.27,0,0,0-.915,5.955Z" transform="translate(-275.692 -60.726)" fill="#407bff" />
                                                    <path id="Path_73" data-name="Path 73" d="M305.109,63.836c-.59-3.35,2.58-5.93,6.82-4.685s2,5,1.125,8,1.41,5.86,2.365,3.575-.65-3-.65-3,4.5,1.165.32,6.235-7.965-.525-6.94-3.83C308.974,67.471,305.664,67,305.109,63.836Z" transform="translate(-277.503 -58.833)" fill="#263238" />
                                                    <path id="Path_74" data-name="Path 74" d="M289.03,70.469c-1.935-1-5.21-1.825-7.075,1.31a5.909,5.909,0,0,0-.54,3.5l5.7.38Z" transform="translate(-265.659 -64.2)" fill="#263238" />
                                                    <path id="Path_75" data-name="Path 75" d="M280.02,74.049h0a.13.13,0,0,1-.12-.135,5.906,5.906,0,0,1,1.36-3.36c2.93-3.045,6.375-.5,7.355.33a.125.125,0,1,1-.16.19c-.945-.81-4.235-3.235-7-.345a5.781,5.781,0,0,0-1.29,3.2.13.13,0,0,1-.145.12Z" transform="translate(-264.933 -63.965)" fill="#263238" />
                                                    <path id="Path_76" data-name="Path 76" d="M291.833,87.646a3.455,3.455,0,0,1-.825,2.14c-.695.805-1.5.41-1.665-.5a2.663,2.663,0,0,1,.87-2.69C291.083,86.106,291.843,86.711,291.833,87.646Z" transform="translate(-269.627 -72.627)" fill="#ffb573" />
                                                    <path id="Path_77" data-name="Path 77" d="M292.58,165s.27,29.07,2.79,45.27c2.035,13.09,5.8,43.345,5.8,43.345h5.715s.555-29.21-.5-42.15c-2.615-32.75,4.14-38.875-1.31-46.465Z" transform="translate(-271.274 -111.916)" fill="#263238" />
                                                    <path id="Path_78" data-name="Path 78" d="M292.58,165s.27,29.07,2.79,45.27c2.035,13.09,5.8,43.345,5.8,43.345h5.715s.555-29.21-.5-42.15c-2.615-32.75,4.14-38.875-1.31-46.465Z" transform="translate(-271.274 -111.916)" fill="#fff" opacity="0.1" />
                                                    <path id="Path_79" data-name="Path 79" d="M295.865,188.862c2,8.775.4,22.6-.69,28.68-1.16-9.24-1.745-21.215-2.035-30C294.175,185.872,295.155,185.762,295.865,188.862Z" transform="translate(-271.553 -122.608)" opacity="0.3" />
                                                    <path id="Path_80" data-name="Path 80" d="M308.17,339.61h7.275l.38-2.55-7.695-.26Z" transform="translate(-279.049 -197.816)" fill="#407bff" />
                                                    <path id="Path_81" data-name="Path 81" d="M311.809,113.665c.685-1.36,4.365-2.215,6.375-2.215l1.5,6.685s-4,5.945-5.67,5.315C312.049,122.725,310.344,116.58,311.809,113.665Z" transform="translate(-280.612 -85.141)" fill="#407bff" />
                                                    <path id="Path_82" data-name="Path 82" d="M311.809,113.665c.685-1.36,4.365-2.215,6.375-2.215l1.5,6.685s-4,5.945-5.67,5.315C312.049,122.725,310.344,116.58,311.809,113.665Z" transform="translate(-280.612 -85.141)" opacity="0.4" />
                                                    <path id="Path_83" data-name="Path 83" d="M301.424,339a.1.1,0,0,0,0-.1.105.105,0,0,0-.105-.05c-.21.03-2.06.325-2.31.855a.315.315,0,0,0,0,.31.535.535,0,0,0,.43.285c.6.065,1.5-.775,1.95-1.285C301.419,339.009,301.424,339,301.424,339Zm-2.22.77a3.922,3.922,0,0,1,1.86-.675c-.66.67-1.24,1.045-1.58,1a.365.365,0,0,1-.28-.19.125.125,0,0,1,0-.125A.007.007,0,0,1,299.2,339.769Z" transform="translate(-274.468 -198.84)" fill="#407bff" />
                                                    <path id="Path_84" data-name="Path 84" d="M301.71,338.117a.1.1,0,0,0,0-.095,2.789,2.789,0,0,0-1.455-.935.7.7,0,0,0-.545.185c-.205.18-.19.34-.135.445.215.43,1.545.575,2.08.465A.09.09,0,0,0,301.71,338.117Zm-1.94-.63a.4.4,0,0,1,.08-.09.5.5,0,0,1,.395-.135,2.325,2.325,0,0,1,1.195.73c-.595.05-1.555-.13-1.685-.385a.12.12,0,0,1,.015-.12Z" transform="translate(-274.753 -197.958)" fill="#407bff" />
                                                    <path id="Path_85" data-name="Path 85" d="M304.58,326.855l-3.83,1.705L299.045,325l-2.23-4.65-.265-.545,3.83-1.7.3.605,2.16,4.5Z" transform="translate(-273.259 -188.471)" fill="#ffb573" />
                                                    <path id="Path_86" data-name="Path 86" d="M303.1,323.825l-3.79,1.785-2.23-4.65,3.86-1.64Z" transform="translate(-273.524 -189.076)" opacity="0.2" />
                                                    <path id="Path_87" data-name="Path 87" d="M274.11,164.98s-12.235,30.415-8.92,44.74c3,12.945,16.25,37.46,16.25,37.46l5.125-2.57s-8.195-29.63-9.08-36.045c-1.73-12.5,9.385-30.165,9.385-43.605Z" transform="translate(-257.294 -111.896)" fill="#263238" />
                                                    <path id="Path_88" data-name="Path 88" d="M274.11,164.98s-12.235,30.415-8.92,44.74c3,12.945,16.25,37.46,16.25,37.46l5.125-2.57s-8.195-29.63-9.08-36.045c-1.73-12.5,9.385-30.165,9.385-43.605Z" transform="translate(-257.294 -111.896)" fill="#fff" opacity="0.1" />
                                                    <path id="Path_89" data-name="Path 89" d="M300.011,335.1l3.8-2.77a.335.335,0,0,1,.44.035l2.625,2.7a.675.675,0,0,1-.105,1c-1.345.94-2.04,1.33-3.71,2.545-1.03.75-3.08,2.405-4.5,3.44s-2.5-.315-2-.875a11.367,11.367,0,0,0,3.06-5.45A1.105,1.105,0,0,1,300.011,335.1Z" transform="translate(-273.204 -195.55)" fill="#263238" />
                                                    <path id="Path_90" data-name="Path 90" d="M296.285,325.81l6.615-3.025-.85-2.7-7.08,3.23Z" transform="translate(-272.469 -189.461)" fill="#407bff" />
                                                    <path id="Path_91" data-name="Path 91" d="M281.31,111.7c-.545-1.42-5.325-3-7.725-3.5l-1.055,7.885s3.915,5.63,5.635,5.165C280.195,120.675,282.49,114.745,281.31,111.7Z" transform="translate(-261.249 -83.516)" fill="#407bff" />
                                                    <path id="Path_92" data-name="Path 92" d="M281.31,111.7c-.545-1.42-5.325-3-7.725-3.5l-1.055,7.885s3.915,5.63,5.635,5.165C280.195,120.675,282.49,114.745,281.31,111.7Z" transform="translate(-261.249 -83.516)" opacity="0.4" />
                                                    <path id="Path_93" data-name="Path 93" d="M279.1,113.2s-2,.7,2,25.275h17c-.285-6.925-.295-11.19,3-25.4a50.14,50.14,0,0,0-7.225-.95,53.776,53.776,0,0,0-7.725,0C282.86,112.421,279.1,113.2,279.1,113.2Z" transform="translate(-264.284 -85.408)" fill="#407bff" />
                                                    <path id="Path_94" data-name="Path 94" d="M279.1,113.2s-2,.7,2,25.275h17c-.285-6.925-.295-11.19,3-25.4a50.14,50.14,0,0,0-7.225-.95,53.776,53.776,0,0,0-7.725,0C282.86,112.421,279.1,113.2,279.1,113.2Z" transform="translate(-264.284 -85.408)" opacity="0.4" />
                                                    <path id="Path_95" data-name="Path 95" d="M300.335,162.869l.765,1.5c.06.115-.08.24-.275.24h-17.84c-.155,0-.28-.075-.29-.175l-.155-1.5c0-.105.125-.2.29-.2h17.225a.315.315,0,0,1,.28.13Z" transform="translate(-266.254 -110.785)" fill="#407bff" />
                                                    <path id="Path_96" data-name="Path 96" d="M300.335,162.869l.765,1.5c.06.115-.08.24-.275.24h-17.84c-.155,0-.28-.075-.29-.175l-.155-1.5c0-.105.125-.2.29-.2h17.225a.315.315,0,0,1,.28.13Z" transform="translate(-266.254 -110.785)" fill="#fff" opacity="0.3" />
                                                    <path id="Path_97" data-name="Path 97" d="M313.095,164.61h.46c.1,0,.165-.05.155-.1l-.215-2c0-.06-.085-.105-.18-.105h-.47c-.09,0-.16.045-.155.105l.215,2A.2.2,0,0,0,313.095,164.61Z" transform="translate(-281.328 -110.616)" fill="#263238" />
                                                    <path id="Path_98" data-name="Path 98" d="M290.744,164.61h.46c.09,0,.16-.05.155-.1l-.215-2c0-.06-.09-.105-.18-.105h-.46c-.1,0-.165.045-.155.105l.215,2C290.569,164.56,290.674,164.61,290.744,164.61Z" transform="translate(-270.158 -110.616)" fill="#263238" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <div className='text-empty-search'>
                                        <div className='result-search-1'>No Results Found</div>
                                        <div className='result-search-2'>No content matched your criteria. Try searching for something else.</div>
                                    </div>
                                </div>
                                :
                                filterPosts.map((e, i) => (
                                    <ItemCard revertDelete={handleRevert} props={e} key={i} />
                                ))
                    }
                </div>
            </div>
        </section >
    )
}

export default PostCard

