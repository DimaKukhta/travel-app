import React, { useState, useEffect } from 'react'
import { Rating, Button } from 'semantic-ui-react';
import translate from '../../../translateData/translate'
import './ratingOfPlace.css';

interface RatingOfPlaceProps {
    imgId: number,
    isAuthorized: boolean,
    lang: string
}

export const RatingOfPlace:  React.FC<RatingOfPlaceProps> = ({imgId, isAuthorized, lang}) => {
    const [rating, setRating] = useState(0);

    const handleRate = (e: any, { rating }: any) => {
        setRating(rating);
    }

    return (
        <div className="rating-of-place">
            <h3>{translate.rating.head[lang]}</h3>
            <h5>{translate.rating.average[lang]}: {rating}</h5>
            <Rating icon="star" maxRating={5} defaultRating={rating} onRate={handleRate} ></Rating>
            <div className="rating-button"><Button color="green" disabled={isAuthorized ? false : true}>{translate.rating.submit[lang]}</Button></div>
           {/* <ul>
                {currentValue.map((element: any, index: number) => <li key={index}>{element.login}, score: {element.rating}</li>)}
           </ul>*/}
           {isAuthorized ? null : <div>{translate.rating.note[lang]}</div>}
        </div>

    )
}