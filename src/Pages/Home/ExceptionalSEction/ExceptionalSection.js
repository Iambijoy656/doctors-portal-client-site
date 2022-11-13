import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const ExceptionalSection = () => {
    return (
        <section className="bg-white text-gray-900 my-16 p-10">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className="w-full lg:w-1/3 mr-6" >
                    <img src={treatment} alt="" />

                </div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">

                    <h2 className="text-3xl font-bold leading-none">Exceptional Dental Care, on Your Terms</h2>
                    <p className="mt-4 mb-8  text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="self-start  font-medium text-white btn btn-primary bg-gradient-to-r from-primary to-secondary">Get started</button>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalSection;