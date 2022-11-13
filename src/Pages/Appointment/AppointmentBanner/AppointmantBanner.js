
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmantBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-10 bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(${bg})` }}

        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse flex items-center justify-center">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='dentist chair' />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}

                        ></DayPicker>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmantBanner;