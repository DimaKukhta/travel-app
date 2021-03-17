import React from 'react'
import { Rating, Button } from 'semantic-ui-react';
import './ratingOfPlace.css';

export const RatingOfPlace = () => {
    return (
        <div className="rating-of-place">
            <h3>Rating</h3>
            <Rating icon="star" maxRating={5} defaultRating={3}></Rating>
            <div className="rating-button"><Button color="green">Submit</Button></div>
        </div>

    )
}