import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext)


    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP');


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('https://doctors-portal-server-ivory-phi.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })


    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>

                    <div className="flex items-center justify-center text-center bg-white  text-gray-900">
                        <form
                            onSubmit={handleBooking}
                            noValidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded  text-gray-100 ng-untouched ng-pristine ng-valid">

                            <label htmlFor="date" className="self-start mt-3 text-xs text-black font-semibold">Date</label>
                            <input id="date" value={date} type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary-400  input input-bordered" readOnly />

                            <label htmlFor="password" className="self-start mt-3 text-xs text-black font-semibold">Select Slots</label>
                            <select
                                name='slot'
                                className="select select-bordered flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary-400">
                                {
                                    slots.map((slot, i) => <option
                                        key={i}
                                        value={slot}
                                    >
                                        {slot} </option>)
                                }

                            </select>

                            <label htmlFor="name" className="self-start mt-3 text-xs text-black font-semibold">Your Name</label>
                            <input
                                defaultValue={user?.displayName}
                                name='name'
                                id="name" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary-400  input input-bordered" placeholder='Type your name' required />

                            <label htmlFor="phone" className="self-start mt-3 text-xs text-black font-semibold">Phone</label>
                            <input
                                name='phone'
                                id="password" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary-400  input input-bordered" placeholder='Type your Number' required />

                            <label htmlFor="email" className="self-start text-black text-xs font-semibold">Email</label>
                            <input
                                defaultValue={user?.email}
                                name='email'
                                id="email" type="email" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary-400  input input-bordered" placeholder='Type your email' required readOnly />

                            <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-primary text-gray-900">Login</button>

                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BookingModal;