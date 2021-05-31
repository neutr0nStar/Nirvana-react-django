import React from "react";
import Footer from "../../components/Footer/Footer";
import PlacesCard from "../../components/PlacesCard/PlacesCard";
import HomeCss from "./Home.module.css";
import Img from "./unsplash-david-marcu.jpg";

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
                        data-aos="fade-up"
                        className={HomeCss.cardContainer}
                        style={{ mixBlendMode: "screen" }}
                    >
                        <div className={HomeCss.blurredCard}>
                            <h1>Welcome to Nirvana</h1>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={HomeCss.quote}>
                        "Jobs fill your pockets, adventures fill your soul."
                    </div>
                    <div className={HomeCss.body}>
                        <div className={HomeCss.placesContainer}>
                            <h1>Places to explore :</h1>
                            <ul>
                                <li>
                                    <PlacesCard
                                        rtl={false}
                                        img={Img}
                                        title={"Switzerland"}
                                        desc={
                                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ullam fuga, quam ducimus amet ipsa consequuntur et. Nulla, fuga eos"
                                        }
                                    />
                                </li>
                                <li>
                                    <PlacesCard
                                        rtl={true}
                                        img={Img}
                                        title={"Switzerland"}
                                        desc={
                                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ullam fuga, quam ducimus amet ipsa consequuntur et. Nulla, fuga eos"
                                        }
                                    />
                                </li>
                                <li>
                                    <PlacesCard
                                        rtl={false}
                                        img={Img}
                                        title={"Switzerland"}
                                        desc={
                                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ullam fuga, quam ducimus amet ipsa consequuntur et. Nulla, fuga eos"
                                        }
                                    />
                                </li>
                            </ul>
                            <div className={HomeCss.morebtn}>
                                <a href="/#">See all</a>
                            </div>
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
