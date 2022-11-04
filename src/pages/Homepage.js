import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Homepage = () =>{
        return(
            <>
            <Navigation />
            <Header />
            <OurServices />
            <WhyUs />
            <Testimonial />
            <Faq />
            <Footer />
            </>
        ) 
}

export default Homepage