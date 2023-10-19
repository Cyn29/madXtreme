
import logotype from "../../assets/logotype.png";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import tiktok from "../../assets/icons/tiktok.png";
import twitter from "../../assets/icons/twitter.png";

function Footer() {
    return (
        <main className="text-center w-100" color="black" bgColor="white" aria-label="Footer">
            <section
                style={{ backgroundColor: "#D10505", height: 90 }}
                className="text-white d-flex justify-content-center align-items-center">
                <h3>Tus deportes de aventura en Madrid</h3>
            </section>
            <section width="100%">
                <img
                    aria-label="logotype"
                    className="mt-4"
                    width="15%"
                    src={logotype}
                    alt="Image of logotype"
                />
            </section>
            <section>
                <img src={instagram} aria-label="instagram-icon" alt="Instagram icon" />
                <img src={facebook} aria-label="facebook-icon" alt="Facebook icon" />
                <img src={twitter} aria-label="twitter-icon" alt="Twitter icon" />
                <img src={tiktok} aria-label="tiktok-icon" alt="Tik tok icon" />
            </section>
            <div className="text-center p-3">
                © 2023 Copyright:
                <a className="text-black" href="https://madXtreme.com/">
                    madXtreme.com
                </a>
            </div>
        </main>
    );
}

export default Footer;