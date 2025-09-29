import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(pricing)
    const {title, price, description, features} = pricing;
    return (
        <div className='border-2 bg-pink-500 rounded-2xl p-4 '>
            {/* Card Header */}
            <div >
                <h1 className="text-7xl">{title}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body  */}
            <div className='bg-purple-500 p-4 rounded-2xl mt-10 ' >
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature} > </PricingFeature> )
                }
            </div>
        </div>
      
    );
};

export default PricingCard;