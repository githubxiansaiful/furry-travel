const Footer = () => {
    return (
        <div>
            <section className="relative main-box footer-con">
                <img
                    alt="vector"
                    className="vector8 img-fluid absolute"
                    src="/vector8.png"
                />
                <div className="container">
                    <div className="partner-con">
                        <ul className="mb-0 list-unstyled flex items-center justify-between">
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-1.png"
                                        alt="icon"
                                    />
                                </figure>
                            </li>
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-2.png"
                                        alt="icon"
                                    />
                                </figure>
                            </li>
                            <li className="img-mb">
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-3.png"
                                        alt="icon"
                                    />
                                </figure>
                            </li>
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-4.png"
                                        alt="icon"
                                    />
                                </figure>
                            </li>
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-5.png"
                                        alt="icon"
                                    />
                                </figure>
                            </li>
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-6.png"
                                        alt="icon"
                                    />
                                </figure>
                            </li>
                        </ul>
                        {/* partner con */}
                    </div>
                    <div className="middle-portion">
                        <div className="row grid grid-cols-1 lg:grid-cols-5 gap-5">
                            <div className="lg:col-span-2">
                                <a href="index.html">
                                    <figure className="flex justify-center lg:justify-start footer-logo">
                                        <img
                                            src="/footer-logo.png"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </figure>
                                </a>
                                <p className="text-size-16 footer-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
                                    eiusmod tempororem ipsum dolor sit am econsect ametconsectetetur
                                    adipiscing.
                                </p>
                                <figure className="mb-0 flex justify-center lg:justify-start payment-icon">
                                    <img
                                        src="/payment-card.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </figure>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="links">
                                    <h4 className="font-semibold text-xl heading">Quick Links</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a
                                                href="index.html"
                                                className="text-size-16 text text-decoration-none"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="service.html"
                                                className="text-size-16 text text-decoration-none"
                                            >
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="blog.html"
                                                className="text-size-16 text text-decoration-none"
                                            >
                                                Latest News
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="booking.html"
                                                className="text-size-16 text text-decoration-none"
                                            >
                                                Booking
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="destinations.html"
                                                className="text-size-16 text text-decoration-none mb-0"
                                            >
                                                Destinations
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <div className="links var1">
                                    <h4 className="font-semibold text-xl heading">Support</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a
                                                href="about.html"
                                                className="text-size-16 text text-decoration-none"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="contact.html"
                                                className="text-size-16 text text-decoration-none"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="team.html"
                                                className="text-size-16 text text-decoration-none"
                                            >
                                                Team
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="faq.html"
                                                className="text-size-16 text text-decoration-none"
                                            >
                                                FAQ
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="testimonial.html"
                                                className="text-size-16 text text-decoration-none mb-0"
                                            >
                                                Testimonial
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 d-sm-block">
                                <div className="icon">
                                    <h4 className="font-semibold text-xl heading">Get in Touch</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-size-16 text">
                                            <span className="d-inline-block">Email:</span>{" "}
                                            <a
                                                href="mailto:info@traveltrek.com"
                                                className="mb-0 text text-decoration-nonetext-size-16"
                                            >
                                                info@furrytravel.com
                                            </a>
                                        </li>
                                        <li className="text-size-16 text">
                                            <span className="d-inline-block">Phone:</span>{" "}
                                            <a
                                                href="tel:+12345678900"
                                                className="mb-0 text text-decoration-nonetext-size-16"
                                            >
                                                +1 234 567 89 0 0
                                            </a>
                                        </li>
                                        <li className="text-size-16 text1">
                                            <span className="d-inline-block">Fax:</span>{" "}
                                            <a
                                                href="tel:+1(987)65432199"
                                                className="mb-0 text text-decoration-nonetext-size-16"
                                            >
                                                +1 ( 987 ) 654 321 9 9
                                            </a>
                                        </li>
                                        <li className="social-icons">
                                            <div className="circle">
                                                <a href="https://www.facebook.com/login/">
                                                    <i className="fa-brands fa-square-facebook" />
                                                </a>
                                            </div>
                                            <div className="circle">
                                                <a href="https://twitter.com/i/flow/login">
                                                    <i className="fa-brands fa-square-x-twitter" />
                                                </a>
                                            </div>
                                            <div className="circle">
                                                <a href="https://www.linkedin.com/login">
                                                    <i className="fa-brands fa-linkedin" />
                                                </a>
                                            </div>
                                            <div className="circle">
                                                <a href="https://www.pinterest.com/">
                                                    <i className="fa-brands fa-square-pinterest" />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-con">
                        <div className="row">
                            <div className="col-12">
                                <p className="text-size-16">
                                    ©2024 FurryTravel.com All Rights Reserved
                                </p>
                            </div>
                        </div>
                        {/* copyright con */}
                    </div>
                    {/* container */}
                </div>
                {/* footer con */}
            </section>

        </div>
    );
};

export default Footer;