import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";


const Footer = () => {
    const { user } = useContext(AuthContext)
    return (
        <footer className="footer bg-slate-200 p-20">
            <img src="https://i.ibb.co/55cf1LG/Group-1.png" alt="" />
            <div className="grid grid-flow-col gap-x-4">
                <ul className="menu">
                    {user
                        ?
                        <>
                            <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/'}>Home</Link></li>
                            <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/alltoys'}>All Toys</Link></li>
                            <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={`/mytoys`}>My Toys</Link></li>
                            <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/addatoy'}>Add a Toy</Link></li>
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

            <div>
                <ul className="menu">
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/'}>Privacy</Link></li>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/alltoys'}>Terms & Condition</Link></li>
                    <li className="mx-2 text-[#EF8716] hover:font-bold hover:text-[#BF6C12]"><Link to={'/blogs'}>Contact us</Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span className="bg-[#EF8716] text-white  font-semibold">Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered" />
                    </label>
                </div>
                <Link to='/signup'><div className="bg-[#EF8716] px-8 py-2 text-white rounded-md cursor-pointer">
                    Sign Up
                </div></Link>
                <p>Copyright © 2023 - All right reserved by Tcar World</p>
            </div>
        </footer>
    );
};

export default Footer;