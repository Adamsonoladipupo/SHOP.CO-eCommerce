import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Products from "../product/products";
import Offer from "../offers/Offer";
import HeroSection from "../heroSection/HeroSection";
import ClothesBrands from "../ClothesBrands/ClothesBrands";
import HappyCustomers from "../happyCustomers/HappyCustomers";

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
                <ClothesBrands/>
            </div>
            <div>
                <Products/>
            </div>
            <div>
                <HappyCustomers/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default LandingPage;