import {createBrowserRouter} from "react-router"
import NavBar from "../component/navbar/NavBar"
import LandingPage from "../component/pages/LandingPage"
import Footer from "../component/footer/Footer"
import Products from "../component/product/products"
import HeroSection from "../component/heroSection/HeroSection"

const router = createBrowserRouter([
    {
        path: "/navbar",
        element: <NavBar/>
    },
    {
        path: "/",
        element:<LandingPage/>
    },
    {
        path:"landingpage",
        element: <LandingPage/>
    },
    {
        path:"/footer",
        element:<Footer/>
    },
    {
        path: "/products",
        element: <Products/>
    },
    {
        path:"/herosection",
        element: <HeroSection/>
    }
])

export default router