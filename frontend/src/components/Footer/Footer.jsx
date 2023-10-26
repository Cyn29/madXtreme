import logotype from "../../assets/logotype.png";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import tiktok from "../../assets/icons/tiktok.png";
import twitter from "../../assets/icons/twitter.png";

function Footer() {
    return (
        <main
            className="text-center w-100"
            color="black"
            aria-label="Footer">
            <section
                style={{ backgroundColor: "#D10505", height: 90 }}
                className="text-white d-flex justify-content-center align-items-center">
                <h3 aria-label="description-text">Tus deportes de aventura en Madrid</h3>
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
                <img src={instagram} alt="Instagram icon" aria-label="instagram-icon"/>
                <img src={facebook} alt="Facebook icon" aria-label="facebook-icon"/>
                <img src={twitter} alt="Twitter icon" aria-label="twitter-icon"/>
                <img src={tiktok} alt="Tik tok icon" aria-label="tiktok-icon"/>
            </section>
            <div className="text-center p-3" aria-label="Copyright">
                © 2023 Copyright:
                <a className="text-black" aria-label="madXtreme.com" href="https://madXtreme.com/">
                    madXtreme.com
                </a>
            </div>
        </main>
    );
}

export default Footer;
