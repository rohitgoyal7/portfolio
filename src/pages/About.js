import React from "react";
import { about } from "../constants";

const About = () => {
    return (
        <section id="about" className="section scrollspy">
            <h3 className="page-title white-text teal">{about.title}</h3>
            <div className="container flow-text">
                <blockquote>{about.heading}</blockquote>
                {about.description &&
                    about.description.map((d) => {
                        if (d.isHighlight) {
                            return (
                                <p key={d.id}>
                                    <strong>{d.text}</strong>
                                </p>
                            );
                        }
                        return <p key={d.id}>{d.text}</p>;
                    })}
            </div>
        </section>
    );
};

export default About;
