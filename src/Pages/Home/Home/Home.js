import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ExceptionalSection from '../ExceptionalSEction/ExceptionalSection';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppointment/MakeAppoinment';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalSection></ExceptionalSection>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;