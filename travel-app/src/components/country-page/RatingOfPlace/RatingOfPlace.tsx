import React, { useState, useEffect } from 'react'
import { Rating, Button } from 'semantic-ui-react';
import './ratingOfPlace.css';

interface RatingOfPlaceProps {
    imgId: number,
    isAuthorized: boolean
}

export const RatingOfPlace:  React.FC<RatingOfPlaceProps> = ({imgId, isAuthorized}) => {
    const [rating, setRating] = useState(0);

    const handleRate = (e: any, { rating }: any) => {
        setRating(rating);
    }

    return (
        <div className="rating-of-place">
            <h3>Rating</h3>
            <h5>Average rating: {rating}</h5>
            <Rating icon="star" maxRating={5} defaultRating={rating} onRate={handleRate}></Rating>
            <div className="rating-button"><Button color="green" disabled={isAuthorized ? false : true}>Submit</Button></div>
           {isAuthorized ? null : <div>To leave a rating please login.</div>}
        </div>

    )
}