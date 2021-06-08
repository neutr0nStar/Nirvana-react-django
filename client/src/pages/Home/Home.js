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
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Magni, incidunt quas.
                                    Dolorum fuga facilis eveniet vero illo?
                                    Repudiandae, ipsam voluptas.
                                </p>
                            </div>
                            <div
                                data-aos="fade-down"
                                className={HomeCss.featuresCard}
                            >
                                <h1>Discover</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Magni, incidunt quas.
                                    Dolorum fuga facilis eveniet vero illo?
                                    Repudiandae, ipsam voluptas.
                                </p>
                            </div>
                            <div
                                data-aos="fade-left"
                                className={HomeCss.featuresCard}
                            >
                                <h1>Enjoy</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Magni, incidunt quas.
                                    Dolorum fuga facilis eveniet vero illo?
                                    Repudiandae, ipsam voluptas.
                                </p>
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
                                <li data-aos="zoom-in" data-aos-delay="500">
                                    2. Tailor a package as per your need.
                                </li>
                                <li data-aos="zoom-in" data-aos-delay="1000">
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
