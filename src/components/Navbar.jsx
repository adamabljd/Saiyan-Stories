import React, { useState } from "react";
import logo from "../assets/images/logo.png"

const Navbar = ({ selectedList, setSelectedList }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <nav className="bg-secondary shadow text-black py-4 font-dragonL">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center ms-5 md:ms-0">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-12 shadow"
                    />
                    <span className="ml-3 text-3xl">Saiyan Stories</span>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-3 items-center text-3xl">
                    <button
                        className={`py-2 px-4 rounded ${selectedList === "Dragon Ball" ? "bg-yellow-500" : "hover:bg-yellow-500"
                            }`}
                        onClick={() => setSelectedList("Dragon Ball")}>
                        Dragon Ball
                    </button>
                    <button
                        className={`py-2 px-4 rounded ${selectedList === "Dragon Ball Z" ? "bg-yellow-500" : "hover:bg-yellow-500"
                            }`}
                        onClick={() => setSelectedList("Dragon Ball Z")}>
                        Dragon Ball Z
                    </button>
                </div>


                {/* Mobile Dropdown */}
                <div className="relative md:hidden me-5">
                    <button
                        className="py-2 px-4 bg-yellow-500 rounded text-black text-2xl"
                        onClick={toggleDropdown}
                    >
                        Menu
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
                            <button
                                className={`w-full text-left py-2 px-4 rounded-t ${selectedList === "Dragon Ball" ? "bg-yellow-500" : "hover:bg-gray-100"
                                    }`}
                                onClick={() => {
                                    setSelectedList("Dragon Ball");
                                    setDropdownOpen(false); // Close dropdown after selection
                                }}
                            >
                                Dragon Ball
                            </button>
                            <button
                                className={`w-full text-left py-2 px-4 rounded-b ${selectedList === "Dragon Ball Z" ? "bg-yellow-500" : "hover:bg-gray-100"
                                    }`}
                                onClick={() => {
                                    setSelectedList("Dragon Ball Z");
                                    setDropdownOpen(false); // Close dropdown after selection
                                }}
                            >
                                Dragon Ball Z
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
