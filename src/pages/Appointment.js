import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NavBar from '../components/Navbar/NavBar';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const Appointment = (props) => {
  useDocTitle('Pawsome Care');

  const [AppointmentTime, setAppointmentTime] = useState('');
  const [AppointmentDate, setAppointmentDate] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNo, setPhone] = useState('');
  const [Message, setMessage] = useState('');

  const [isVeterinaryCare, setIsVeterinaryCare] = useState(false);
  const [isPetGrooming, setIsPetGrooming] = useState(false);
  const [isPetBoarding, setIsPetBoarding] = useState(false);
  const [isPetSpa, setIsPetSpa] = useState(false);
  const isPending = true; // isPending is always true

  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Assign the selected date and time to the corresponding variables
    const selectedDateTime = selectedDate;
    const selectedDateFormatted = selectedDateTime.toISOString();
    const [date, time] = selectedDateFormatted.split('T');
    const [year, month, day] = date.split('-');
    const formattedDate = `${month}/${day}/${year}`;
    const formattedTime = time.slice(0, 5);
  
    // Include boolean values for services based on checkbox state
    const services = {
      isVeterinaryCare,
      isPetGrooming,
      isPetBoarding,
      isPetSpa,
      isPending,
    };
  
    // Include the formatted date and time in the data
    axios
      .post('http://localhost:5000/api/appointments', {
        AppointmentTime: formattedTime,
        AppointmentDate: formattedDate,
        FirstName,
        LastName,
        Email,
        PhoneNo,
        Message,
        ...services,
      })
      .then((result) => {
        console.log('Appointment Result:', result);
        window.location.reload()
        // Handle the response as needed
      })
      .catch((err) => console.log(err));
  };

  const [selectedDate, setSelectedDate] = useState(null); // State for selected date and time

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const dateInputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 1s',
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-10">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-out">
          <form onSubmit={sendEmail} id="get-appointment">
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Book Appointment</h1>
              </div>
              <div className="my-4">
                <div className="checkbox-label">
                  <input
                    id="checkbox-veterinary"
                    type="checkbox"
                    name="isVeterinaryCare"
                    checked={isVeterinaryCare}
                    onChange={() => setIsVeterinaryCare(!isVeterinaryCare)}
                  />
                  <label htmlFor="checkbox-veterinary" className="ml-3 text-lg font-medium text-gray-900">Veterinary Care</label>
                </div>
                
                <div className="checkbox-label">
                  <input
                    id="checkbox-pet-grooming"
                    type="checkbox"
                    name="isPetGrooming"
                    checked={isPetGrooming}
                    onChange={() => setIsPetGrooming(!isPetGrooming)}
                  />
                  <label htmlFor="checkbox-pet-grooming" className="ml-3 text-lg font-medium text-gray-900">Pet Grooming</label>
                </div>

                <div className="checkbox-label">
                  <input
                    id="checkbox-pet-boarding"
                    type="checkbox"
                    name="isPetBoarding"
                    checked={isPetBoarding}
                    onChange={() => setIsPetBoarding(!isPetBoarding)}
                  />
                  <label htmlFor="checkbox-pet-boarding" className="ml-3 text-lg font-medium text-gray-900">Pet Boarding</label>
                </div>

                <div className="checkbox-label">
                  <input
                    id="checkbox-pet-spa"
                    type="checkbox"
                    name="isPetSpa"
                    checked={isPetSpa}
                    onChange={() => setIsPetSpa(!isPetSpa)}
                  />
                  <label htmlFor="checkbox-pet-spa" className="ml-3 text-lg font-medium text-gray-900">Pet Spa and Pampering</label>
                </div>
              </div>
              {errors && <p className="text-red-500 text-sm">{errors.products}</p>}

              <div className="flex items-center my-4">
                <label className="ml-3 text-lg font-medium text-gray-900">Select Date and Time:</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="Time"
                  minDate={new Date()} // Optionally, you can set a minimum date (e.g., today)
                  minTime={new Date().setHours(7, 0, 0)} // Set minimum time to 7:00 AM
                  maxTime={new Date().setHours(18, 0, 0)} // Set maximum time to 6:00 PM
                  excludeTimes={[
                    new Date().setHours(10, 0, 0),
                    new Date().setHours(12, 0, 0),
                    new Date().setHours(15, 0, 0),
                    new Date().setHours(18, 0, 0),
                  ]} // Exclude specified times
                  className="ml-2 p-2 border rounded-lg focus:outline-none focus:shadow-outline"
                  customInput={<input style={dateInputStyle} />}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="first_name"
                    className="w-full bg-blue-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                </div>

                <div>
                  <input
                    name="last_name"
                    className="w-full bg-blue-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                </div>

                <div>
                  <input
                    name="email"
                    className="w-full bg-blue-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-blue-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Phone*"
                    value={PhoneNo}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
                </div>
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-blue-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-gray-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex my-4 w-2/3 lg:w-3/4">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: 08055384406</p>

                  <div className="mt-5">
                    <h2 className="text-2xl">Send an E-mail</h2>
                    <p className="text-gray-400">pawsomecare@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/ENLIGHTENEERING/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 inline-block mx-1 text-center pt-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse"><path d="M13.397 20.997v-8.196h2.765v-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v 2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/enlighteneering-inc-"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 inline-block mx-1 text-center pt-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current font-black hover:animate-pulse"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;