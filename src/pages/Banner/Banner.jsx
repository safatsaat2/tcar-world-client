import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen w-3/4 mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/YWwDsZ4/cuate.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="ml-10">
                    <h1 className="text-5xl font-bold text-[#E03C79]">Where fun and learning go hand in hand</h1>
                    <p className="py-6">The toys and games market is valued at USD 261.65 billion in the current year, and it is projected to register a CAGR of 9.91% over the next five years.</p>
                    <Link to='/login'><button className="btn bg-[#EF8716]">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;