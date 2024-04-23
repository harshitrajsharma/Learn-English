import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full shadow-lg lg:h-16 py-3 pr-4 lg:pr-0">
            <div className="mx-auto lg:flex lg:items-center h-full">
                <div className="flex items-center justify-between">
                    <div className="w-56">
                        <a href="#" className=" pl-4 text-xl font-bold">
                            Language School
                        </a>
                    </div>

                    {/* Hamburger menu button for medium and large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"} mt-4 w-full lg:flex items-center lg:justify-between text-center lg:mt-0 h-full`}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-center">
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-red-600"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-red-600"
                        >
                            Language Programs
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-red-600"
                        >
                            Admission
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-red-600"
                        >
                            Who we are
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-red-600"
                        >
                            Events
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-red-600"
                        >
                            Blog
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-red-600"
                        >
                            Pages
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-red-600"
                        >
                            Contact
                        </a>

                    </div>


                    <div className="flex flex-col mt-4 md:mt-0 gap-4 rounded-full text-black lg:flex-row">
                        <a
                            href="#"
                            className=" py-2 px-8 h-16 flex flex-col lg:flex-row font-medium xl:font-semibold bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 
                            active:bg-red-700 transition-all duration-300 ease-in-out text-white items-center uppercase justify-center"
                        >
                            Find my course

                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};

