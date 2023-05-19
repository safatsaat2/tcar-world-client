import { Link } from "react-router-dom";

const LogIn = () => {
    const test = (event) =>{
        event.preventDefault()
        console.log('clicked')
    }
    return (
        <div className="hero min-h-screen ">
            <div className="flex flex-col lg:flex-row w-3/4">

                <img src="https://i.ibb.co/hyt6dPM/bro.png" alt="" />

                <div className="w-full ml-10">
                    <h1 className="text-3xl">Please Sign in</h1>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={test}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="cursor-pointer bg-[#EF8716] p-3 text-white font-semibold rounded-md"><input className="cursor-pointer" type="submit" value="Log in" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p>New to Tcar? <Link to='/signup'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;