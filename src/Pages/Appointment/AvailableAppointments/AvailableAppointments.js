import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([])

    useEffect(() => {
        fetch('appointOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])


    return (
        <section className='mt-20 my-10'>
            <p className='text-center text-2xl font-bold text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 '>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                    ></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;