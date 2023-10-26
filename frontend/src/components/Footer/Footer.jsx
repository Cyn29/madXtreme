import logotype from "../../assets/logotype/logotype.png";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import tiktok from "../../assets/icons/tiktok.png";
import twitter from "../../assets/icons/twitter.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <main>
            <section
                aria-label="Footer"
                className="banner text-white d-flex justify-content-center align-items-center">
                <h3 aria-label="description" className="slogan-txt">
                    Tus deportes de aventura en Madrid
                </h3>
            </section>
            <div className="icon-container">
                <section width="100%">
                    <img
                        aria-label="logotype"
                        className="mt-4 logotype-img"
                        src={logotype}
                        alt="Image of logotype"
                    />
                </section>
                <section>
                    <img
                        className="socialmedia"
                        src={instagram}
                        alt="Instagram icon"
                        aria-label="instagram"
                    />
                    <img
                        className="socialmedia"
                        src={facebook}
                        alt="Facebook icon"
                        aria-label="facebook"
                    />
                    <img
                        className="socialmedia"
                        src={twitter}
                        alt="Twitter icon"
                        aria-label="twitter"
                    />
                    <img
                        className="socialmedia"
                        src={tiktok}
                        alt="Tik tok icon"
                        aria-label="tiktok"
                    />
                </section>
            </div>
            <div aria-label="copyright" className="text-center p-3">
                © 2023 Copyright:
                <a href="/" className="text-black" aria-label="web">
                    madXtreme.com
                </a>
            </div>
        </main>
    );
}

export default Footer;
