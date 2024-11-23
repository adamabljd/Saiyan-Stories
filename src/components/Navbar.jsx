import React from "react";
import logo from "../assets/images/logo.png"

const Navbar = ({ selectedList, setSelectedList }) => {
    return (
        <nav className="bg-secondary shadow text-black py-4 font-dragonL">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-12 shadow"
                    />
                    <span className="ml-3 text-3xl">Saiyan Stories</span>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10 items-center text-3xl">
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
            </div>
        </nav>
    );
};

export default Navbar;
