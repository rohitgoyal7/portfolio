import React from "react";
import { awards } from "../constants";

const Awards = () => {
    return (
        <section id="awards" className="section scrollspy">
            <h3 className="page-title white-text teal">{awards.title}</h3>
            <div className="container">
                <div className="row">
                    {awards.recognition &&
                        awards.recognition.map((r) => (
                            <div key={r.id} className="col s12 m6">
                                <div className="card">
                                    <div className="card-content">
                                        <p>
                                            <span className="card-title">
                                                <a
                                                    href={r.redirectTo}
                                                    target="_blank"
                                                    className="teal-text hoverline"
                                                >
                                                    {r.name}
                                                </a>
                                            </span>
                                        </p>
                                        <p className="brown-text">
                                            {r.place} | {r.date}
                                        </p>
                                        <ul>
                                            <li>{r.description}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
