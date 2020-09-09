import React from "react";
import { projects } from "../constants";

const Projects = () => {
    return (
        <section id="projects" className="section scrollspy">
            <h3 className="page-title white-text teal">{projects.title}</h3>
            <div className="container">
                <div className="row">
                    {projects &&
                        projects.accomplishments.map((a) => (
                            <div key={a.id} className="col s12 m6 l4">
                                <div className="card medium">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img
                                            src={`static/img/${a.logo}`}
                                            className="activator"
                                        />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator teal-text hoverline">
                                            {a.name}
                                            <i className="mdi-navigation-more-vert right"></i>
                                        </span>
                                        <p>{a.description}</p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title brown-text">
                                            Accomplishments
                                            <i className="mdi-navigation-close right"></i>
                                        </span>
                                        <ul>
                                            {a.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                        <div className="card-action">
                                            <a
                                                href={a.redirectTo}
                                                target="_blank"
                                                data-position="top"
                                                data-tooltip="View Online"
                                                className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                                            >
                                                <i className="fa fa-external-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
