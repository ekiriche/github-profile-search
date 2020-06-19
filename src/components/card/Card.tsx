import React from 'react';
import Button from "../button/Button";
import "./Card.sass";
import {Link} from "react-router-dom";

interface CardProps {
    login: string;
    imageSrc: string;
    linkToProfile: string;
}

const Card = (props: CardProps) => {
    const {login, imageSrc, linkToProfile} = props;

    return (
        <div className="card-wrapper">
            <div className="card-left-container" >
                <Link to={`/${login}`} className='card-link'>
                    <img src={imageSrc} className="card-image" alt={`${login}-img`} />
                </Link>
                <Link to={`/${login}`} className='card-link'>
                    <div className="card-name">{login}</div>
                </Link>
            </div>
            <div className="button-container">
                <Button linkToProfile={linkToProfile} />
            </div>
        </div>
    );
};

export default Card;