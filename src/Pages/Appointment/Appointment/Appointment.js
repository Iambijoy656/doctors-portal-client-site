import React, { useState } from 'react';
import AppointmantBanner from '../AppointmentBanner/AppointmantBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())


    return (
        <div>
            <AppointmantBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}

            ></AppointmantBanner>

            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;