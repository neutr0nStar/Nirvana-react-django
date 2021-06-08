import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutCSS from "./About.module.css";

export default function About() {
    return (
        <div className={AboutCSS.root}>
            <Navbar />
            <main className={AboutCSS.bodyContainer}>
                <div className={AboutCSS.body}>
                    <div className={AboutCSS.title}>About</div>
                    <p className={AboutCSS.content}>
                        Nirvana is a tourism webiste that attempts to bring you
                        closer to the best nature has to offer. To do so, select
                        a destination from places, tailor a tour and enjoy the
                        beauty of nature. Nirvana offers a wide spectrum of
                        destinations, like Switzerland, Arizona, and many more.
                    </p>
                    <br />
                    <br />
                    <p className={AboutCSS.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique, alias fugit? Fugiat, praesentium aperiam?
                        Aspernatur nulla numquam, odio velit consequatur
                        voluptatibus maiores recusandae doloremque deleniti
                        repellendus? Natus repudiandae earum possimus?
                        Provident, vero! Id exercitationem reprehenderit soluta
                        deserunt natus nesciunt, voluptate eveniet nemo omnis
                        illum, laudantium obcaecati inventore sed consequuntur
                        error at pariatur porro vel cupiditate hic? Explicabo
                        dolores odit similique officia commodi quo aliquam
                        dolorem rerum vel debitis deleniti magnam, eos accusamus
                        nisi totam ad culpa alias excepturi. Veritatis totam
                        odio laborum aperiam ullam itaque enim nobis maiores,
                        sed saepe recusandae neque quam minima aliquid velit
                        ipsum? Aperiam, neque! Eveniet.
                    </p>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
