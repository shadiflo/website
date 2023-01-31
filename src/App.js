import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';


// Home Pages Import
import DigitalAgency from './pages/DigitalAgency';
import CreativeAgency from './pages/CreativeAgency';
import PersonalPortfolio from './pages/PersonalPortfolio';
import HomeStartup from './pages/HomeStartup';
import CorporateAgency from './pages/CorporateAgency';

// Blog Import
import BlogGridView from './pages/BlogGrid';
import BlogCategory from './pages/Category';
import BlogArchive from './pages/Archive';
import BlogDetails from './pages/BlogDetails';

// Service 
import ServiceOne from './pages/ServiceOne';
import ServiceTwo from './pages/ServiceTwo';
import ServiceDetails from './pages/ServiceDetails';

// Project 
import ProjectGridOne from './pages/ProjectGridOne';
import ProjectGridTwo from './pages/ProjectGridTwo';
import ProjectGridThree from './pages/ProjectGridThree';
import ProjectGridFive from './pages/ProjectGridFive';
import ProjectGridFour from './pages/ProjectGridFour';
import ProjectDetails from './pages/ProjectDetails';

// Pages 
import Splash from './pages/Splash';
import AboutUs from './pages/AboutUs';
import OurOffice from './pages/OurOffice';
import OurClients from './pages/OurClients';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import CaseStudy from './pages/CaseStudy';
import CaseDetails from './pages/CaseStudyDetails';
import Testimonials from './pages/Testimonials';
import PricingTable from './pages/PricingTable';
import Typography from './pages/Typography';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
import ComingSoon from './pages/ComingSoon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Css Import
import './assets/scss/app.scss';


const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<Splash />}/>

				<Route path={process.env.PUBLIC_URL + "/digital-agency"} element={<DigitalAgency />}/>
				<Route path={process.env.PUBLIC_URL + "/creative-agency"} element={<CreativeAgency />}/>
				<Route path={process.env.PUBLIC_URL + "/personal-portfolio"} element={<PersonalPortfolio />}/>
				<Route path={process.env.PUBLIC_URL + "/home-startup"} element={<HomeStartup />}/>
				<Route path={process.env.PUBLIC_URL + "/corporate-agency"} element={<CorporateAgency />}/>

				{/* Blogs */}
				<Route path={process.env.PUBLIC_URL + "/blog-grid/"} element={<BlogGridView />}/>
				<Route path={process.env.PUBLIC_URL + "/category/:slug"} element={<BlogCategory />}/>
				<Route path={process.env.PUBLIC_URL + "/archive/:slug"} element={<BlogArchive />}/>
				<Route path={process.env.PUBLIC_URL + "/blog-details/:id"} element={<BlogDetails />}/>

				{/* Service */}
				<Route path={process.env.PUBLIC_URL + "/service-one/"} element={<ServiceOne />}/>
				<Route path={process.env.PUBLIC_URL + "/service-two/"} element={<ServiceTwo />}/>
				<Route path={process.env.PUBLIC_URL + "/service-details/:slug"} element={<ServiceDetails />}/>

				{/* Project  */}
				<Route path={process.env.PUBLIC_URL + "/project-grid-one"} element={<ProjectGridOne />}/>
				<Route path={process.env.PUBLIC_URL + "/project-grid-two"} element={<ProjectGridTwo />}/>
				<Route path={process.env.PUBLIC_URL + "/project-grid-three"} element={<ProjectGridThree />}/>
				<Route path={process.env.PUBLIC_URL + "/project-width-one"} element={<ProjectGridFour />}/>
				<Route path={process.env.PUBLIC_URL + "/project-width-two"} element={<ProjectGridFive />}/>
				<Route path={process.env.PUBLIC_URL + "/project-details/:slug"} element={<ProjectDetails />}/>

				{/* Pages  */}
				<Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />}/>
				<Route path={process.env.PUBLIC_URL + "/our-office"} element={<OurOffice />}/>
				<Route path={process.env.PUBLIC_URL + "/our-clients"} element={<OurClients />}/>
				<Route path={process.env.PUBLIC_URL + "/team"} element={<Team />}/>
				<Route path={process.env.PUBLIC_URL + "/team-details/:slug"} element={<TeamDetails />}/>
				<Route path={process.env.PUBLIC_URL + "/case-study"} element={<CaseStudy />}/>
				<Route path={process.env.PUBLIC_URL + "/case-details/:slug"} element={<CaseDetails />}/>
				<Route path={process.env.PUBLIC_URL + "/testimonials"} element={<Testimonials />}/>
				<Route path={process.env.PUBLIC_URL + "/pricing-table"} element={<PricingTable />}/>
				<Route path={process.env.PUBLIC_URL + "/typography"} element={<Typography />}/>
				<Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/>
				<Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />}/>
				<Route path={process.env.PUBLIC_URL + "/coming-soon"} element={<ComingSoon />}/>
				<Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />}/>
				<Route path={process.env.PUBLIC_URL + "/terms-use"} element={<TermsOfUse />}/>

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
