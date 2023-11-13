import Navbar from "../../component/Navbar";
import Cars from "../../component/Cars";
import Ourservices from "../../component/OurServices"
import WhyUs from "../../component/WhyUs";
import Testimony from "../../component/Testimony";
import CTABanner from "../../component/CTABanner";
import FAQ from "../../component/FAQ";
import Footer from "../../component/Footer";

function LandingPage () {
    return (
        <div>
            <Navbar/>
            <Cars ShowButton={true}/>
            <Ourservices/>
            <WhyUs/>
            <Testimony/>
            <CTABanner/>
            <FAQ/>
            <Footer/>
        </div>

            

    )
}
export default LandingPage