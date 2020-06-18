import React from 'react';
import Button from "../button/Button";
import "./Card.sass";

interface CardProps {
    login: string;
    imageSrc: string;
    linkToProfile: string;
}

const Card = (props: CardProps) => {
    const {login, imageSrc, linkToProfile} = props;

    return (
        <div className="card-wrapper">
            <div className="card-left-container">
                <img src={imageSrc} className="card-image" alt={`${login}-img`}/>
                <div className="card-name">{login}</div>
            </div>
            <div className="button-container">
                <Button linkToProfile={linkToProfile} />
            </div>
        </div>
    );
};

export default Card;