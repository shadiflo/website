import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import FsLightbox from 'fslightbox-react';
import SectionTitle from '../../elements/section-title/SectionTitle';


const VideoTwo = () => {
    
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <div className="section section-padding-equal">
                <div className="container">
                    <SectionTitle 
                        subtitle="Experts in field"
                        title="Design startup <br> movement"
                        description=""
                        textAlignment=""
                        textColor=""
                    />
                    <div className="about-expert">
                        <div className="thumbnail">
                            <img src={process.env.PUBLIC_URL + "/images/about/about-1.png"} alt="Thumbnail" />
                            <div className="popup-video">
                                <button className="play-btn" onClick={ () => setToggler(!toggler) }><FaPlay /></button>
                            </div>
                        </div>
                        <ul className="frame-shape list-unstyled">
                            <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/about/frame-1.png"} alt="Frame" /></li>
                            <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/about/frame-2.png"} alt="Frame" /></li>
                        </ul>
                    </div>
                </div>
                <ul className="shape-group-16 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>
            </div>
            <FsLightbox toggler={ toggler } sources={ ['https://www.youtube.com/watch?v=1iIZeIy7TqM'] }/>
        </>
    )
}

export default VideoTwo;

