import logo from './../../assets/logo-text.png'

const Navbar = () => {
    const links = <>
        <li className='links'><a href='#'>Home</a></li>
        <li><a href="#">Technologies</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </>
    return (
        <div className=" bg-base-100 shadow-sm sticky top-0 z-50">
            <div className='container mx-auto navbar px-4 sm:px-6 lg:px-8'>
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
                    <a className="btn btn-ghost p-2"><img src={logo} alt="logo" className="w-28 sm:w-32 lg:w-36 h-auto"/></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3 font-secondary">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn
                            btn-sm sm:btn-md
                            border-2 border-orange-400
                            bg-transparent
                            text-orange-400
                            rounded-lg
                            hover:bg-orange-400
                            hover:text-white
                            transition
                            cursor-pointer">Sign In</a>
                    <a className="btn btn-primary
                            btn-sm sm:btn-md
                            cursor-pointer">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;