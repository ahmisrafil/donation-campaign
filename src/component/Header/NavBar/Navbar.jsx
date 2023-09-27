import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mx-4 md:mx-10 lg:mx-24 ">
            <nav className="flex justify-between flex-col lg:flex-row text-center">
                <div className="flex justify-center">
                    <img src="https://i.ibb.co/dr8fQP2/Logo.png" alt="" />
                </div>
                <ul className="flex flex-col md:flex-row my-auto md:justify-center text-lg font-normal">
                    <li className="mx-12">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="mx-12">
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li className="mx-12">
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;