import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import TailorPackageCSS from "./TailorPackage.module.css";
import Loading from "../../components/Loading/Loading";

export default function TailorPackage() {
    const { id } = useParams();
    const history = useHistory();
    const isLogged = localStorage.nirvanaToken ? true : false;
    const [place, setPlace] = useState();
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState();
    const [startingDate, setStartingDate] = useState("");
    const [nop, setNop] = useState();
    const [nod, setNod] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let price = 8000 * nop * nod;
        if (startingDate !== "") {
            if (nod > 2 && nod < 11) {
                if (nop > 0 && nop < 9) {
                    setErr("");
                    axios
                        .post(
                            "/api/createPackage",
                            {
                                starting_date: startingDate,
                                no_of_days: nod,
                                no_of_people: nop,
                                price: price,
                                place_id: id,
                            },
                            {
                                headers: {
                                    Authorization:
                                        "Token " + localStorage.nirvanaToken,
                                },
                            }
                        )
                        .then(() => window.alert("Tour successfully booked !!"))
                        .then(() => history.push("/"))
                        .catch((err) => console.log(err));
                } else {
                    setErr("Invalid number of people");
                }
            } else {
                setErr("Invalid number of days");
            }
        } else {
            setErr("Invalid date");
        }
    };

    useEffect(() => {
        axios
            .get("/api/place/" + id)
            .then((res) => setPlace(res.data))
            .then(() => setLoading(false))
            .catch((err) => console.log("here"));
    }, [id]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div
                    className={TailorPackageCSS.root}
                    style={{
                        backgroundImage: "url(" + place.picture + ")",
                    }}
                >
                    <div className={TailorPackageCSS.left}>
                        <div
                            className={TailorPackageCSS.closeBtn}
                            onClick={() => history.goBack()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                height="24px"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={TailorPackageCSS.right}>
                        <div>
                            <div className={TailorPackageCSS.title}>
                                {place.name}
                            </div>
                            {isLogged ? (
                                <form className={TailorPackageCSS.form}>
                                    {err && (
                                        <div
                                            className={TailorPackageCSS.errmsg}
                                        >
                                            {err}
                                        </div>
                                    )}
                                    <label htmlFor="starting_date">
                                        Starting date: &nbsp;&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <input
                                        type="date"
                                        name="starting_date"
                                        id="starting_date"
                                        required
                                        className={TailorPackageCSS.inp}
                                        value={startingDate}
                                        onChange={(e) =>
                                            setStartingDate(e.target.value)
                                        }
                                    />
                                    <br />
                                    <label htmlFor="no_of_days">
                                        Number of days:
                                    </label>
                                    <input
                                        type="number"
                                        name="no_of_days"
                                        id="no_of_days"
                                        required
                                        min={3}
                                        max={10}
                                        className={TailorPackageCSS.inp}
                                        placeholder={"3-10 days"}
                                        value={nod}
                                        onChange={(e) => setNod(e.target.value)}
                                    />
                                    <br />
                                    <label htmlFor="no_of_days">
                                        Number of days:
                                    </label>
                                    <input
                                        type="number"
                                        name="no_of_days"
                                        id="no_of_days"
                                        required
                                        min={1}
                                        max={8}
                                        placeholder={"1-8 people"}
                                        className={TailorPackageCSS.inp}
                                        value={nop}
                                        onChange={(e) => setNop(e.target.value)}
                                    />
                                    <br />
                                    <button
                                        className={TailorPackageCSS.submitBtn}
                                        onClick={handleSubmit}
                                    >
                                        Procede to payment
                                    </button>
                                </form>
                            ) : (
                                <div>
                                    <i>Please login first</i> <br />
                                    <br /> <br />
                                    <Link
                                        to="/login"
                                        className={TailorPackageCSS.link}
                                    >
                                        Login
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
