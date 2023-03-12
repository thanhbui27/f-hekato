import { Link } from "react-router-dom"
import CustomerButton from "../Common/CustomerButton"
import face from "../../assets/icons/faceb.svg";
import insta from "../../assets/icons/insta.svg";
import twit from "../../assets/icons/twit.svg";
import "./footer.scss"

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-column">
                        <Link className="logo" to="">
                            <strong>Hekto</strong>
                        </Link>
                        <div className="footer__search">
                            <input type="text" placeholder="Enter Email Address" />
                            <CustomerButton element={<span>Sign Up</span>} customerCLass="btn__search" />
                        </div>
                        <span className="footer-link">Contact Info</span><br />
                        <span className="footer-link">17 Princess Road, London, Greater London NW1 8JR, UK</span>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading heading">Catagories</h3>
                        <ul className="footer-links">
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Laptops & Computers </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Cameras & Photography </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Smart Phones & Tablets </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Video Games & Consoles </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Waterproof Headphones </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading heading">Customer Care</h3>
                        <ul className="footer-links">
                            <li className="footer-item">
                                <Link to="" className="footer-link"> My Account </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Discount </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Returns </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Orders History </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Order Tracking </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading heading">Pages</h3>
                        <ul className="footer-links">
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Blog </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Browse the Shop </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Category </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Pre-Built Pages </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> Visual Composer Elements </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="" className="footer-link"> WooCommerce Pages</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy-r">
                <div className="container flex-bt">
                    <span>©Webecy - All Rights Reserved</span>
                    <div className="netw">
                        <img src={face} alt="" />
                        <img src={insta} alt="" />
                        <img src={twit} alt="" />
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer