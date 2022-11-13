import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`

            }}

        >
            <section className="p-6 text-gray-100 my-16">
                <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid">
                    <h2 className="w-full text-3xl font-bold leading-tight text-white text-center">Contact us</h2>
                    <p className='text-xl text-white text-center'>Stay connected with us</p>
                    <div>
                        <label for="name" className="block mb-1 ml-1 text-white">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  input input-bordered " />
                    </div>
                    <div>
                        <label for="email" className="block mb-1 ml-1 text-white">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2  rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  input input-bordered" />
                    </div>
                    <div>
                        <label for="message" className="block mb-1 ml-1 text-white">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400  input input-bordered"></textarea>
                    </div>
                    <div className='text-center'>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </section>
        </section>
    );
};

export default Contact;