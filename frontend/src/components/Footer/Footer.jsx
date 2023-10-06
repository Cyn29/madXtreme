import { MDBFooter } from "mdb-react-ui-kit";
import logotype from "../../assets/logotype.png";
import instagramicon from "../../assets/instagramicon.png";
import facebookicon from "../../assets/facebookicon.png";
import tiktokicon from "../../assets/tiktokicon.png";
import twittericon from "../../assets/twittericon.png";

function Footer() {
    return (
        <MDBFooter className="text-center" color="black" bgColor="white">
            <section
                style={{ backgroundColor: "#D10505", height: 90 }}
                className="text-white d-flex justify-content-center align-items-center">
                <h2>Disfruta de las mejores rutas MTB</h2>
            </section>
            <section width="100%">
                <img
                    className="mt-5"
                    width="23%"
                    src={logotype}
                    alt="Image of logotype"
                />
            </section>
            <section>
                <img src={instagramicon} alt="Instagram icon" />
                <img src={facebookicon} alt="Facebook icon" />
                <img src={twittericon} alt="Twitter icon" />
                <img src={tiktokicon} alt="Tik tok icon" />
            </section>
            <div className="text-center p-3">
                © 2023 Copyright:
                <a className="text-black" href="https://madXtreme.com/">
                    madXtreme.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;
