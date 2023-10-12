import React from 'react';
import img from '../images/veti1.jpg'; 
import img2 from '../images/veti2.png';
import img3 from '../images/veti3.jpg';
import img4 from '../images/veti4.png';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Tail-Wagging Services Tailored Just for Your Furry Friends</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Veterinary Care</h2>
                                    <p className="text-md font-medium">
                                    We provide comprehensive veterinary services for your pets.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Pet Grooming</h2>
                                    <p className="text-md font-medium">
                                    Offer professional grooming services for pets, including baths, haircuts, nail trimming, and more.
                                    Allow customers to book grooming appointments online and specify their pet's needs.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Pet Boarding</h2>
                                    <p className="text-md font-medium">
                                    Supervision at our facility is provided around the clock by trained staff to ensure the well-being and security of all pets. We maintain strict health and safety protocols, including regular cleaning and vaccinations, to create a safe and healthy environment for your beloved pets during their stay.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Pet Spa and Pampering</h2>
                                    <p className="text-md font-medium">
                                    Offer spa days and pampering services for pets, including massages, facials, and special grooming treatments.
Create packages that include multiple spa services for a day of relaxation and rejuvenation for pets.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

           
        </div>
    )
}

export default Services;