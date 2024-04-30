import { Helmet } from "react-helmet";

const Contact = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us | Real Estate</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-[#000] py-[100px] lg:py-[150px]">
                <div className="container">
                    <h1 className="text-4xl text-center font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
                </div>
            </div>
            <div className="container">
                <div className="mt-20 lg:mt-[60px] mb-20 lg:mb-[60px]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div className="contact-card">
                            <div className="mb-5">
                                <div className="cart-icon-box">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Phone</h3>
                                <p>+1 123456789</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="mb-5">
                                <div className="cart-icon-box">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Email</h3>
                                <p>inf@real-estate.com</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="mb-5">
                                <div className="cart-icon-box">
                                    <i class="fa-solid fa-map"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Address</h3>
                                <p>456 Maple Avenue, City, State</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="space-y-5">
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input type="text" className="grow" placeholder="Daisy" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Phone
                            <input type="text" className="grow" placeholder="Phone" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input type="text" className="grow" placeholder="demo@site.com" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Subject
                            <input type="text" className="grow" placeholder="Subject" />
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </div>
                <div className="mb-20 mt-20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12274.310798966691!2d90.40546663404496!3d23.847938897519192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c691ba478fbd%3A0xd1b3f71371eb15ec!2sHazrat%20Shahjalal%20International%20Airport!5e0!3m2!1sen!2sbd!4v1713369013829!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>
            </div>
        </div>
    );
};

export default Contact;