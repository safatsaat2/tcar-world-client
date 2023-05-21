import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center w-full">
            <img className="h-3/4  mx-auto" src="https://i.ibb.co/d57NQV3/pana.png" alt="" />
            <h3 className="text-xl my-5">Go to <Link className="font-bold text-[#EF8716]" to={'/'}>Home</Link></h3> 
        </div>
    );
};

export default NotFound;