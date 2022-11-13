import React from 'react';

const infoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card

    return (
        <div className={`card md:card-side p-6 ${bgClass} shadow-xl text-white `}>
            <figure>
                <img src={icon} alt='' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default infoCard;