import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {

    const {register, auth} = useContext(AuthContext)

//  funtion for register
    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const pass = form.password.value;
        const photo = form.photo.value;

        register(email, pass)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
                
            },
            console.log(auth.currentUser)
            )
            .then(() => {
                console.log(auth.currentUser)})
        })
        .catch(err => console.log(err))
    }

    
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
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="Password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
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