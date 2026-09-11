import logo from './../../assets/logo-text.png'

const Navbar = () => {
    const links = <>
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
    </>
    return (
        <div className=" bg-base-100 shadow-sm">
            <div className='container navbar'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={logo} alt="logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3 font-secondary">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn hidden  sm:flex items-center justify-center">Sign In</a>
                    <a className="btn btn-secondary">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;