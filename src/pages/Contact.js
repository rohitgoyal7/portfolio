import React from "react";
import { contacts } from "../constants";

const Contact = () => {
    return (
        <section id="contact" className="section scrollspy full-height">
            <h3 className="page-title white-text teal">{contacts.title}</h3>
            <div className="container">
                {contacts &&
                    contacts.details.map((d) => (
                        <p key={d.id}>
                            <a
                                href={d.href}
                                target="_blank"
                                data-position="top"
                                data-tooltip="View Nishant on StackOverflow"
                                className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                            >
                                <i className={`fa ${d.icon}`}></i>
                            </a>
                            <span className="hoverline">{d.text}</span>
                        </p>
                    ))}
            </div>
        </section>
    );
};

export default Contact;
