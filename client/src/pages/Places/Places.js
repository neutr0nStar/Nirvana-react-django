import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import PlacesCard from "../../components/PlacesCard/PlacesCard";
import PlacesCSS from "./Places.module.css";
import Footer from "../../components/Footer/Footer";
import PlaceModal from "../../components/PlaceModal/PlaceModal";

function Places() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModalId, setOpenModalId] = useState(0);

    function handleClose() {
        setOpenModalId(0);
    }

    function handleOpen(idx) {
        console.log("open");
        setOpenModalId(idx);
    }

    useEffect(() => {
        axios
            .get("/api/places")
            .then((res) => setPlaces(res.data))
            .then(() => setLoading(false))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={PlacesCSS.root}>
            <Navbar />
            <main className={PlacesCSS.bodyContainer}>
                <div className={PlacesCSS.body}>
                    <div className={PlacesCSS.title}>
                        Select a Destination !!
                    </div>
                    <div className={PlacesCSS.caption}>
                        Click on the title to know more.
                    </div>
                    {loading ? (
                        <Loading />
                    ) : (
                        <ul className={PlacesCSS.placesCardList}>
                            {places.map((place) => (
                                <li key={place.id}>
                                    <PlacesCard
                                        name={place.name}
                                        picture={place.picture}
                                        openModal={() => handleOpen(place.id)}
                                    />
                                    <PlaceModal
                                        isOpen={openModalId === place.id}
                                        handleClose={handleClose}
                                        bgUrl={place.picture}
                                        name={place.name}
                                        desc={place.description}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Places;
