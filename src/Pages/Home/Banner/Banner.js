import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <section className='bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className={`hero justify-center  bg-no-repeat bg-cover bg-center`}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold ">We are Achieve the Success of Treatment</h1>
                        <p className="py-6 text-justify mr-5">Helping patients achieve good dental health & beautiful smile is a privilege & responsibility. For over 10 years, my team & I have proudly provided the best dental experience in Bangladesh. Our comfort-first approach is designed to meet the needs of you & your entire family.</p>

                        <Link to='/appointment'> <PrimaryButton>Book An Appointment</PrimaryButton></Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;