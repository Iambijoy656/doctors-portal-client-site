import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    const { name, slots, price } = appointmentOption;

    return (
        <div className="card shadow-xl ">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary text-center font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(appointmentOption)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;