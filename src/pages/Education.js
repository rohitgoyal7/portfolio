import React from "react";
import { education } from "../constants";

const Education = () => {
    return (
        <section id="education" className="section scrollspy">
            <h3 className="page-title white-text teal">{education.title}</h3>
            <div className="container">
                <div className="row">
                    {education &&
                        education.degrees.map((d) => (
                            <div key={d.id} className="col s12 m6">
                                <div className="card">
                                    <div className="card-content">
                                        <p>
                                            <span className="card-title">
                                                <a
                                                    href={d.redirectTo}
                                                    className="teal-text hoverline"
                                                >
                                                    {d.name}
                                                </a>
                                            </span>
                                        </p>
                                        <p className="brown-text">
                                            {d.place} | {d.duration}
                                        </p>
                                        <ul>
                                            {d.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
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

export default Education;
