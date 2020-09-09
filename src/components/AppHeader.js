import React from "react";

import { navItems, user } from "../constants";

const AppHeader = () => {
    return (
        <>
            <nav className="hide-on-small-only">
                <ul className="side-nav fixed section table-of-contents">
                    <li className="logo">
                        <a
                            id="logo-container"
                            href="#intro"
                            className="brand-logo teal-text"
                        >
                            {user.name}
                            <span className="brown-text light">
                                {user.profile}
                            </span>
                        </a>
                    </li>
                    {navItems.map((item) => {
                        const className = "small " + item.icon;
                        const color = "waves-effect waves-dark " + item.color;
                        return (
                            <li key={item.id} className="bold">
                                <a
                                    href={item.redirectTo}
                                    className={color}
                                    target={
                                        item.redirectToNewTab ? "_blank" : ""
                                    }
                                >
                                    <i className={className}></i>
                                    <span>{item.text}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <nav className="hide-on-large only trigger z-depth-1">
                <a
                    href="#"
                    data-activates="slide-out"
                    className="button-collapse"
                >
                    <i className="mdi-navigation-menu"></i>
                </a>
                <div className="name-title">
                    <a id="name" href="#main" className="teal-text">
                        {user.name}
                    </a>
                    <span className="brown-text light">{user.profile}</span>
                </div>
            </nav>
            <nav className="hide-on-large only">
                <ul id="slide-out" className="side-nav">
                    {navItems.map((item) => {
                        const className = "small " + item.icon;
                        const color = "waves-effect waves-dark " + item.color;
                        return (
                            <li key={item.id} className="bold">
                                <a
                                    href={item.redirectTo}
                                    className={color}
                                    target={
                                        item.redirectToNewTab ? "_blank" : ""
                                    }
                                >
                                    <i className={className}></i>
                                    <span>{item.text}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default AppHeader;
