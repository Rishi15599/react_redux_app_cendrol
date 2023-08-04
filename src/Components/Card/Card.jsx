import { Button } from "react-bootstrap";
import { useState } from "react"
import Popup from "reactjs-popup";
import React from "react";
import 'reactjs-popup/dist/index.css'
import './Card.css'
import CloseButton from 'react-bootstrap/CloseButton';


const url = `http://api.chucknorris.io/jokes/random?category=`

const Card = ({ category }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [jokes, setJokes] = useState();

    const handleClick = () => {
        fetch(`${url}${category}`).then(d => d.json()).then(res => {
            setJokes(res.value)
            setIsPopupOpen(true);
        })
    };

    const handleClose = () => {
        setIsPopupOpen(false);
    };


    return (
        <div className="card" onClick={handleClick}>
            <div className='card-text'>{category}</div>
            <div className='card-para'>Unlimited Jokes On {category}</div>
            <Popup open={isPopupOpen} onClose={handleClose}>
                <div className="popup">
                    <span className="popup-header">{category}</span><span className="close-button"><CloseButton onClick={handleClose} /></span>
                    <div className="popup-jokes-card">
                        <div className="popup-jokes">"{jokes}"</div>
                        {<Button className="popup-button btn-primary" onClick={handleClick} variant="next">Next Jokes</Button>}
                    </div>
                </div>
            </Popup>
        </div>
    )
};

export default Card