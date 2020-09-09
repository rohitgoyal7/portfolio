import React from "react";
import { skills } from "../constants";

const Skills = () => {
    return (
        <section id="skills" className="section scrollspy">
            <h3 className="page-title white-text teal">{skills.title}</h3>
            <div className="container">
                {skills.proficiencies &&
                    skills.proficiencies.map((p) => (
                        <div key={p.id} className="card">
                            <div className="card-content">
                                <h4 className="brown-text light">
                                    {p.technology}
                                </h4>
                                <div className="row text-center">
                                    {p.categories.map((c) => (
                                        <div key={c.id} className="col s4 m2">
                                            <img
                                                src={`static/img/${c.logo}`}
                                                className="responsive-img"
                                            />
                                            {c.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Skills;
