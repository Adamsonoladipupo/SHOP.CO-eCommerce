import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Products from "../product/products";
import Offer from "../offers/Offer";
import HeroSection from "../heroSection/HeroSection";

const LandingPage =() =>{
    return(
        <>
            <div>
                <Offer/>
            </div>
            <div>
                <NavBar/>
            </div>
            <div>
                <HeroSection/>
            </div>
            <div>
                <Products/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default LandingPage;