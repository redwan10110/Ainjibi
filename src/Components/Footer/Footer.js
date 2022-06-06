import React from 'react';
import './Footer.css';
import logo from '../../Images/logo.png';
const Footer = () => {
    return (
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find Me</h4>
                                <span>703 Richmond AvenuePoint Pleasant Beach, NJ 08742</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call Me</h4>
                                <span>732-709-7757</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail Me</h4>
                                <span>info@ainjibi.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={logo} className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>My primary objective is to be a hands-on attorney whom my clients can depend on time and time again. In addition to defending them in criminal court, I also fiercely advocate for clients who are suffering from serious personal injuries or who have lost a loved one in a fatal accident. When your livelihood is on the line, my firm won’t settle for less than you deserve.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow Me</span>
                                <a href="/home"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="/home"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="/home"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/home">about</a></li>
                                <li><a href="/home">services</a></li>
                                <li><a href="/home">portfolio</a></li>
                                <li><a href="/home">Contact</a></li>
                                <li><a href="/home">About us</a></li>
                                <li><a href="/home">Our Services</a></li>
                                <li><a href="/home">Expert Team</a></li>
                                <li><a href="/home">Contact us</a></li>
                                <li><a href="/home">Latest News</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 text-center text-center">
                        <div className="copyright-text ">
                            <p>Copyright &copy; 2022, All Right Reserved AINJIBI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;