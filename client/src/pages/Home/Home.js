import React from "react";
import Footer from "../../components/Footer/Footer";
import HomeCss from "./Home.module.css";

function Home() {
    return (
        <>
            <div className={HomeCss.backdrop}>
                <nav>
                    <div data-aos="fade-right" className={HomeCss.brandTitle}>
                        Nirvana
                    </div>
                    <ul data-aos="fade-left">
                        <li className={HomeCss.navItem}>Home</li>
                        <li className={HomeCss.navItem}>Places</li>
                        <li className={HomeCss.navItem}>About</li>
                        <li className={HomeCss.navItem}>Sigup/Signin</li>
                    </ul>
                </nav>
                <main>
                    <div
                        data-aos="zoom-in"
                        className={HomeCss.cardContainer}
                        style={{ mixBlendMode: "screen" }}
                    >
                        <div className={HomeCss.blurredCard}>
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
                        <div class={HomeCss.CTA}>
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
                        <div class={HomeCss.btt}>
                            <button
                                onClick={() =>
                                    (document.documentElement.scrollTop = 0)
                                }
                            >
                                Back to top
                            </button>
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
