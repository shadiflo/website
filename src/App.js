import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Home Pages Import
import CreativeAgency from "./pages/Home";
import PersonalPortfolio from "./pages/FaceitVisuals";
import HomeStartup from "./pages/HomeStartup";
import CorporateAgency from "./pages/CorporateAgency";
import FaceitHubs from "./pages/FaceitHubs";

// Blog Import
import BlogGridView from "./pages/BlogGrid";
import BlogCategory from "./pages/Category";
import BlogArchive from "./pages/Archive";
import BlogDetails from "./pages/BlogDetails";

// Service
import ServiceOne from "./pages/ServiceOne";
import ServiceTwo from "./pages/ServiceTwo";
import ServiceDetails from "./pages/ServiceDetails";

// Project
import ProjectGridOne from "./pages/ProjectGridOne";
import ProjectGridTwo from "./pages/ProjectGridTwo";
import ProjectGridThree from "./pages/ProjectGridThree";
import ProjectGridFive from "./pages/ProjectGridFive";
import ProjectGridFour from "./pages/ProjectGridFour";
import ProjectDetails from "./pages/ProjectDetails";

// Pages
import AboutUs from "./pages/AboutUs";
import OurOffice from "./pages/OurOffice";
import OurClients from "./pages/OurClients";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import CaseStudy from "./pages/CaseStudy";
import CaseDetails from "./pages/CaseStudyDetails";
import Testimonials from "./pages/Testimonials";
import PricingTable from "./pages/PricingTable";
import Typography from "./pages/Typography";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/404";
import ComingSoon from "./pages/ComingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateProfile from "./components/UpdateProfile";
import Alert from "./components/Alert";

// Css Import
import "./assets/scss/app.scss";
// New pages
import ApplicationForm from "./pages/Applicationform";
import MirageTips from "./pages/Miragetips";
import ColumnGroupingTable from "./pages/Freeagents";
import Placesto from "./pages/Placestoplay";
import { AppProvider } from "./component/context/GlobalContext";
import Logout from "./pages/Logout";
import CreateTeam from "./pages/CreateTeam";
import JoinTeam from "./pages/JoinTeam";
import Profile from "./pages/Profile";
import TeamJoinRequest from "./pages/TeamJoinRequest";
const App = () => {
    return (
        <AppProvider>
            <Router>
                <ScrollToTop>
                    <Routes>
                        <Route
                            path={process.env.PUBLIC_URL + "/"}
                            element={<CreativeAgency />}
                        />

                        <Route
                            path={process.env.PUBLIC_URL + "/faceithubs"}
                            element={<FaceitHubs />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/Home"}
                            element={<CreativeAgency />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/faceitvisuals"}
                            element={<PersonalPortfolio />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/home-startup"}
                            element={<HomeStartup />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/corporate-agency"}
                            element={<CorporateAgency />}
                        />

                        {/* Blogs */}
                        <Route
                            path={process.env.PUBLIC_URL + "/blog-grid/"}
                            element={<BlogGridView />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/category/:slug"}
                            element={<BlogCategory />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/archive/:slug"}
                            element={<BlogArchive />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/blog-details/:id"}
                            element={<BlogDetails />}
                        />

                        {/* Service */}
                        <Route
                            path={process.env.PUBLIC_URL + "/service-one/"}
                            element={<ServiceOne />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/service-two/"}
                            element={<ServiceTwo />}
                        />
                        <Route
                            path={
                                process.env.PUBLIC_URL +
                                "/service-details/:slug"
                            }
                            element={<ServiceDetails />}
                        />

                        {/* Project  */}
                        <Route
                            path={process.env.PUBLIC_URL + "/project-grid-one"}
                            element={<ProjectGridOne />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/project-grid-two"}
                            element={<ProjectGridTwo />}
                        />
                        <Route
                            path={
                                process.env.PUBLIC_URL + "/project-grid-three"
                            }
                            element={<ProjectGridThree />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/project-width-one"}
                            element={<ProjectGridFour />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/project-width-two"}
                            element={<ProjectGridFive />}
                        />
                        <Route
                            path={
                                process.env.PUBLIC_URL +
                                "/project-details/:slug"
                            }
                            element={<ProjectDetails />}
                        />

                        {/* Pages  */}
                        <Route
                            path={process.env.PUBLIC_URL + "/about-us"}
                            element={<AboutUs />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/applicationform"}
                            element={<ApplicationForm />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/our-office"}
                            element={<OurOffice />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/our-clients"}
                            element={<OurClients />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/team"}
                            element={<Team />}
                        />
                        <Route
                            path={
                                process.env.PUBLIC_URL + "/team-details/:slug"
                            }
                            element={<TeamDetails />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/case-study"}
                            element={<CaseStudy />}
                        />
                        <Route
                            path={
                                process.env.PUBLIC_URL + "/case-details/:slug"
                            }
                            element={<CaseDetails />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/testimonials"}
                            element={<Testimonials />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/pricing-table"}
                            element={<PricingTable />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/typography"}
                            element={<Typography />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/contact"}
                            element={<Contact />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/404"}
                            element={<ErrorPage />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/coming-soon"}
                            element={<ComingSoon />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/privacy-policy"}
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/terms-use"}
                            element={<TermsOfUse />}
                        />
                        {/* Tutorials */}
                        <Route
                            path={process.env.PUBLIC_URL + "/miragetips"}
                            element={<MirageTips />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/freeagents"}
                            element={<ColumnGroupingTable />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/loginbutton"}
                            element={<ColumnGroupingTable />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/placestoplay"}
                            element={<Placesto />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/login"}
                            element={<Login />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/register"}
                            element={<Register />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/updateprofile"}
                            element={<UpdateProfile />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/logout"}
                            element={<Logout />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/createteam"}
                            element={<CreateTeam />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/jointeam/:id"}
                            element={<JoinTeam />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/profile/:id"}
                            element={<Profile />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/requests"}
                            element={<TeamJoinRequest />}
                    />
                    </Routes>
                </ScrollToTop>
                <Alert/>
            </Router>
        </AppProvider>
    );
};

export default App;
