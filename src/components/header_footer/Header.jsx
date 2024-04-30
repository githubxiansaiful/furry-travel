import { Link, NavLink } from "react-router-dom";

const Header = () => {

    // const { userCurrent, logOutUser } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
    </>

    return (
        <div className="border-b border-[#e4e5e7] z-10 relative">
            <div className="container">
                <div className="navbar bg-base-100 pl-0 pr-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to="/" className="main-logo"><img src="/logo-icon.png" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                      
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://i.ibb.co/hHDqnJ4/male-placeholder-image.jpg" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li> <Link to="/my-profile">My Profile</Link></li>
                                        <li> <Link to="/edit-profile">Edit Profile</Link></li>
                                    </ul>
                                </div>
                                :
                                <>
                                    <Link to="/login" className="btn">Login</Link>
                                </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;