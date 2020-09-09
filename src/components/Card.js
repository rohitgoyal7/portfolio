import React from "react";

const Card = (props) => {
    const { work } = props;
    return (
        <div className="card">
            <div className="card-content">
                <div className="row">
                    <div className="col s12 m2">
                        <a href={work.redirectTo} target="_blank">
                            <img
                                src={`static/img/${work.logo}`}
                                className="responsive-img center-block"
                            />
                        </a>
                    </div>
                    <div className="col s12 m10">
                        <p>
                            <span className="card-title">
                                <a
                                    href={work.redirectTo}
                                    target="_blank"
                                    className="teal-text hoverline"
                                >
                                    {work.name}
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="role brown-text">{work.designation}</div>
                <p>
                    <em className="grey-text">{work.highlight}</em>
                </p>
                {work.description &&
                    work.description.map((d) => (
                        <div key={d.id}>
                            <h6>{d.title}</h6>
                            <ul>
                                {d.details &&
                                    d.details.map((detail) => (
                                        <li key={detail.id}>
                                            {detail.text}
                                            {detail.subDetails &&
                                                detail.subDetails.length && (
                                                    <ul>
                                                        {detail.subDetails &&
                                                            detail.subDetails.map(
                                                                (sb, i) => (
                                                                    <li key={i}>
                                                                        {sb}
                                                                    </li>
                                                                )
                                                            )}
                                                    </ul>
                                                )}
                                        </li>
                                    ))}
                            </ul>
                            <div />
                        </div>
                    ))}
            </div>
            <div className="card-action">
                <span>
                    {work.duration} | {work.place}
                </span>
            </div>
        </div>
    );
};

export default Card;
