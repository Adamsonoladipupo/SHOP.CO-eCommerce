import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Products from "../product/products";
import Offer from "../offers/Offer";

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
                <Products/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default LandingPage;