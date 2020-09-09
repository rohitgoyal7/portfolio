import React from "react";
import Card from "../components/Card";
import { experience } from "../constants";

const Experience = () => {
    return (
        <section id="experience" className="section scrollspy">
            <h3 className="page-title white-text teal">{experience.title}</h3>
            <div className="container">
                {experience.work &&
                    experience.work.map((w) => <Card key={w.id} work={w} />)}
            </div>
        </section>
    );
};

export default Experience;
