import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";

const Navbar = () => {

    const { user,logOut } = useContext(AuthContext)

 const handleLogOut = () => {
    logOut()
    .then(() => alert('Log out successfully'))
    .catch(err => console.log(err))
 }

    return (
        <div className="navbar bg-base-100 px-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/'}>Home</Link></li>
                        <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]" ><Link to={'/'}>All Toys</Link></li>
                    </ul>
                </div>
                <img src="https://i.ibb.co/55cf1LG/Group-1.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {user
                    ?
                    <>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/'}>Home</Link></li>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/'}>All Toys</Link></li>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/alltoys'}>My Toys</Link></li>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/'}>Add a Toy</Link></li>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/blogs'}>Blogs</Link></li>
                    </>
                    :
                    <>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/'}>Home</Link></li>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/alltoys'}>All Toys</Link></li>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/blogs'}>Blogs</Link></li>
                    </>}
                    
                    
                </ul>
            </div>
            <div className="navbar-end">
                {user
                    ?
                    <button onClick={handleLogOut} className="border border-[#EF8716] text-[#EF8716] hover:bg-[#EF8716] px-8 py-2 mx-3 hover:text-white rounded-md cursor-pointer">
                        Log Out
                    </button>
                    :
                    <>
                        <Link to='/login'> <div className="border border-[#EF8716] text-[#EF8716] hover:bg-[#EF8716] px-8 py-2 mx-3 hover:text-white rounded-md cursor-pointer">
                            Sign in
                        </div></Link>
                        <Link to='/signup'><div className="border border-[#EF8716] text-[#EF8716] hover:bg-[#EF8716] px-8 py-2 mx-3 hover:text-white rounded-md cursor-pointer">
                            Sign Up
                        </div></Link>
                    </>}

            </div>
        </div>
    );
};

export default Navbar;