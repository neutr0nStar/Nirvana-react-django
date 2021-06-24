import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HomeCss from "./Home.module.css";

function Home() {
    return (
        <>
            <div className={HomeCss.backdrop}>
                <Navbar />
                <main>
                    <div className={HomeCss.cardContainer}>
                        <div data-aos="zoom-in" className={HomeCss.blurredCard}>
                            <h1>Welcome to Nirvana</h1>
                        </div>
                    </div>
                    <div className={HomeCss.quote}>
                        "Jobs fill your pockets, adventures fill your soul."
                    </div>
                    <div className={HomeCss.body}>
                        <div className={HomeCss.featuresContainer}>
                            <div
                                data-aos="fade-right"
                                className={HomeCss.featuresCard}
                            >
                                <h1>Explore</h1>
                                <p>
                                    Explore beautiful landscapes, valleys and
                                    mountains that truely reflect on the beauty
                                    of earth.
                                </p>
                            </div>
                            <div
                                data-aos="fade-down"
                                className={HomeCss.featuresCard}
                            >
                                <h1>Discover</h1>
                                <p>
                                    Discover places, plants, animals and people
                                    from all around the globe. Make new friends.
                                </p>
                            </div>
                            <div
                                data-aos="fade-left"
                                className={HomeCss.featuresCard}
                            >
                                <h1>Enjoy</h1>
                                <p>
                                    Cherish the picturesque views and aroma of
                                    plants excluse to those landscapes. Take
                                    back memories !
                                </p>
                            </div>
                        </div>
                        <div className={HomeCss.testimonialsContainer}>
                            <h1>Testimonials</h1>
                            <div className={HomeCss.testimonials}>
                                <div
                                    data-aos="zoom-in"
                                    className={HomeCss.testimonial}
                                >
                                    <h2>John Doe</h2>
                                    <h4 className={HomeCss.portfolio}>
                                        CEO, Anonymous
                                    </h4>
                                    <p>
                                        I really enjoyed exploring different
                                        places through Nirvana, it gave me a
                                        great opportunity to get to know how
                                        beautiful nature can be.
                                    </p>
                                </div>
                                <div
                                    data-aos="zoom-in"
                                    className={HomeCss.testimonial}
                                >
                                    <h2>James Carl</h2>
                                    <h4 className={HomeCss.portfolio}>
                                        Founder, Natural Inc.
                                    </h4>
                                    <p>
                                        Absolutely love it !! Nirvana gave me a
                                        package just made for me. The
                                        destinations are chery picked, some of
                                        the best places on earth.
                                    </p>
                                </div>
                                <div
                                    data-aos="zoom-in"
                                    className={HomeCss.testimonial}
                                >
                                    <h2>Sara Williams</h2>
                                    <h4 className={HomeCss.portfolio}>
                                        Nature enthusiast
                                    </h4>
                                    <p>
                                        Never did I knew how badly I needed a
                                        trip. Thanks to Nirvana for making it
                                        possible. Looking forward to use Nirvana
                                        again !!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={HomeCss.CTA}>
                            <h1>
                                Nirvana brings you closer to the best nature has
                                to offer in three simple steps !!
                            </h1>
                            <ul>
                                <li data-aos="zoom-in">
                                    1. Select a destination.
                                </li>
                                <li data-aos="zoom-in" data-aos-delay="300">
                                    2. Tailor a package as per your need.
                                </li>
                                <li data-aos="zoom-in" data-aos-delay="600">
                                    3. Cherish !!
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default Home;
