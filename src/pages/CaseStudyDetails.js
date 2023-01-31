import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import CaseStudyData from '../data/casestudy/CaseStudyData.json';
import BcrumbBannerTwo from '../elements/breadcrumb/BcrumbBannerTwo';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SectionTitle from '../elements/section-title/SectionTitle';
import { slugify } from '../utils';
import { FaPlay } from "react-icons/fa";
import ProcessOne from '../component/process/ProcessOne';
import CounterUp from '../component/counterup/CounterUp';
import FsLightbox from 'fslightbox-react';
import Tilty from 'react-tilty';

const allCaseData = CaseStudyData;


const CaseDetails = () => {

    const params = useParams();
    const caseSlug = params.slug;

    const getCaseData = allCaseData.filter(data => slugify(data.title) === caseSlug);
    const detailsCase = getCaseData[0];
    
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <SEO title={detailsCase.title} />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerTwo 
                    title={detailsCase.title}
                    paragraph ={detailsCase.excerpt}
                    mainThumb={detailsCase.thumb}
                />

                <div className="section-padding case-study-brief bg-color-mercury">
                    <div className="container">
                        <div className="row align-items-xl-center">
                        <div className="col-lg-6">
                                <div className="case-study-featured-thumb">
                                <Tilty perspective={2000}>
                                    <img src={process.env.PUBLIC_URL + detailsCase.thumb} alt="Case Study" />
                                </Tilty>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 offset-xl-1">
                                <div className="case-study-featured">
                                    <div className="section-heading heading-left">
                                        <h2 className="title">{detailsCase.title}</h2>
                                        <div dangerouslySetInnerHTML={{__html: detailsCase.details}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-padding-equal case-study-solution">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-heading heading-left">
                                    <h2 className="title">Solutions</h2>
                                    <div dangerouslySetInnerHTML={{__html: detailsCase.solution}}></div>
                                </div>
                                <div className="about-expert">
                                    <div className="thumbnail">
                                        <img src={process.env.PUBLIC_URL + "/images/about/about-1.png"} alt="Thumbnail" />
                                        <div className="popup-video">
                                            <button className="play-btn" onClick={ () => setToggler(!toggler) }><FaPlay /></button>
                                        </div>
                                        <FsLightbox toggler={ toggler } sources={ ['https://www.youtube.com/watch?v=1iIZeIy7TqM'] }/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group-10 list-unstyled">
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                    </ul>
                </div>

                <ProcessOne />
                <div className="section section-padding">
                    <div className="container">
                    <SectionTitle 
                        subtitle=""
                        title="Work We Finished"
                        description="In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus."
                        textAlignment=""
                        textColor=""
                    />
                    <div className="row">
                        <CounterUp colSize="col-lg-3 col-sm-6" layoutStyle="counterup-style-2" evenTopMargin="mt--90 mt_md--0" />
                    </div>
                    </div>
                </div>
                <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default CaseDetails;