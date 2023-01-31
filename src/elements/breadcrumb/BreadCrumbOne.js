import React from 'react';
import { Link } from 'react-router-dom';



const BreadCrumbOne = ({title, page}) => {
    return (
        <div className="breadcrum-area">
            <div className="container">
                <div className="breadcrumb">
                    <ul className="list-unstyled">
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                        </li>
                        <li className="active" dangerouslySetInnerHTML={{__html: page}}></li>
                    </ul>
                    <h1 className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-11.png"} alt="Bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
            </ul>
        </div>
    )
}

export default BreadCrumbOne;