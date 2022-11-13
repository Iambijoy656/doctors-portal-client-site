import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import { Link } from 'react-router-dom';

const Testimonial = () => {
    return (
        <div className="px-8 py-2 bg-white text-gray-900 mt-10 mb-10">
            <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                <div>
                    <h1 className='text-xl text-primary text-bold'>Testimonial</h1>
                    <h3 className='text-2xl text font-semibold'>What Our Patients Says</h3>
                </div>
                <Link to="#" rel="noopener noreferrer" className="items-center gap-2  md:flex">
                    <img src={quote} className='h-40 w-24 lg:w-48' alt="" />

                </Link>
            </div>
        </div>
    );
};

export default Testimonial;