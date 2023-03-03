import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import { slugify } from "../utils";
import ServiceData from "../data/service/ServiceMain.json";
import ProjectData from "../data/project/ProjectData.json";
import AboutTwo from "../component/about/AboutTwo";
import SEO from "../common/SEO";
import BannerCustom from "../elements/breadcrumb/BannerCustom";
import { useGlobalContext } from "../component/context/GlobalContext";

const allServiceData = ServiceData;
const getProjectData = ProjectData;

const ServiceDetails = () => {
    const params = useParams();
    const serviceSlug = params.slug;

    const getServiceData = allServiceData.filter(
        (data) => slugify(data.title) === serviceSlug
    );
    const detailsService = getServiceData[0];
    const { loadList, loadTeams } = useGlobalContext();
    const { showAlert } = useGlobalContext();
    useEffect(() => {
        if (localStorage.getItem("login") == "true") {
            showAlert("login successful", "success");
            localStorage.setItem("login", "false");
        }
        if (localStorage.getItem("signup") == "true") {
            showAlert("signup successful<br>you are logged in", "success");
            localStorage.setItem("signup", "false");
        }
        loadList();
        loadTeams();
    }, []);

    return (
        <>
            <SEO title="Free Agents" />

            <main className="main-wrapper">
                <HeaderOne />
                <BannerCustom />
                <AboutTwo />
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    );
};

export default ServiceDetails;
