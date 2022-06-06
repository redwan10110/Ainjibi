import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1 className='text-center text-primary my-5'>This is Check out Page</h1>
            <h1 className='text-center text-primary my-5'>You Order id: {serviceId}</h1>
        </div>
    );
};

export default Checkout;