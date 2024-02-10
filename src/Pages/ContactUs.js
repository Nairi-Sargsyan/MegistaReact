import ScrollToUp from "../Components/ScrollToUp/ScrollToUp";
import ContactOfUs from "../Components/Contact-Us/ContactOfUs";
import GetInTouch from "../Components/Get-In-Touch/GetInTouch";
import FAQ from "../Components/FAQ/FAQ";

const ContactUs = () => {
    return (
        <main>
            <div className="container">
                <ScrollToUp />
                <ContactOfUs />
                <GetInTouch />
                <FAQ />
            </div>
        </main>
    )
}

export default ContactUs;