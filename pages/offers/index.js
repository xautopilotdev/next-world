import React from 'react';
import OfferCard from '../../components/offercard';

function OfferList(props) {
    const { offers }=props;
    return (
        <>
        <h1>List of offers</h1>
        <ol>
            {
                offers.length > 0 && offers.map(offer=> <OfferCard offer={offer}/>)
            }
            </ol>
        </>
    );
}

export default OfferList;
export async function getServerSideProps(context){
    const response = await fetch(`https://my-json-server.typicode.com/xautopilotdev/fakenextapi/offers`);
    const offers = await response.json();

    return{
        props: {
            offers
        }
    }
}
