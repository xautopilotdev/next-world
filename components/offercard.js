import React from 'react';

function OfferCard(props) {
    const {offer}=props;
    return (
        <div>
            <h>{offer.header}</h>
            <img src={offer.imageUrl}/>
            <hr/>
            <p>{offer.descriptionOne}</p>
        </div>
    );
}

export default OfferCard;