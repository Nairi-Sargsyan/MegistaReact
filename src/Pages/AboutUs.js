import ScrollToUp from "../Components/ScrollToUp/ScrollToUp";
import AboutMegista from "../Components/About-Megista/AboutMegista";
import Statistics from "../Components/Statistics/Statistics";
import OurVision from "../Components/Our-Vision/OurVision";
import Subscribe from "../Components/Subscribe/Subscribe";
import Members from "../Components/Members/Members";

const AboutUs = () => {
    return (
        <main>
            <div className="container">
                <ScrollToUp />
                <AboutMegista />
                <Statistics />
                <OurVision />
                <Subscribe />
                <Members />
            </div>
        </main>
    )
}

export default AboutUs;