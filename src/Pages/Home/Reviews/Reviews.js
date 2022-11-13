import React from 'react';
import Review from './Review';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            place: 'California',
            img: people1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content"
        },
        {
            id: 2,
            name: 'Herry poter',
            place: 'Italy',
            img: people2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content"
        },
        {
            id: 3,
            name: 'Henry Ford',
            place: 'Canada',
            img: people3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content"
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;