import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="flex flex-col lg:flex-row w-3/4">
        <div className="w-full">
        <img src="https://i.ibb.co/hyt6dPM/bro.png" alt="" />
        </div>
                <div className="w-full ml-10">
                    <h1 className="text-3xl font-bold">Please Register</h1>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form >
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="cursor-pointer bg-[#EF8716] p-3 text-white font-semibold rounded-md"><input className="cursor-pointer" type="submit" value="Register" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p>Already have an account? <Link to='/login'>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;