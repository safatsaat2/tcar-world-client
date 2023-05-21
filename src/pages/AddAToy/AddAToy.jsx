import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";




const AddAToy = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    // Function to add toy starts

    const addToy = event => {
        event.preventDefault()
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.select.value;
        const description = form.description.value;
        console.log(picture)
        const toy = {
            picture,
            name,
            sellerName,
            sellerEmail,
            price,
            rating,
            quantity,
            category,
            description
        }
        fetch('https://tcar-world-server.vercel.app/category-data', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("added successfully")
                    form.reset()
                }
            })
    }
    // Function to add toy ends


    return (
        <div className=" min-h-screen">
            <div className="card  w-full shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={addToy} className="grid grid-cols-2 gap-5">
                        {/* picture */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture Url</span>
                            </label>
                            <input type="text" name='picture' placeholder="picture Url" className="input input-bordered" />
                        </div>
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        {/* Seller Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                        </div>
                        {/* Seller Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" name='sellerEmail' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
                        </div>
                        {/* Price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="float" name='price' placeholder="Price" className="input input-bordered" />
                        </div>
                        {/* Rating */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="float" name='rating' placeholder="Rating" className="input input-bordered" />
                        </div>
                        {/* Quantity */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered" />
                        </div>
                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" />
                        </div>
                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <select name="select" className="border border-[#EF8716] rounded-lg p-2">
                                <option name='sportsCar' value="sports car">Sports Car</option>
                                <option name='truck' value="truck">Truck</option>
                                <option name='suv' value="suv">SUV</option>
                            </select>
                        </div>
                        {/* Button */}
                        <div className="form-control mt-6">
                            <input type="submit" className="bg-[#EF8716] p-3 rounded-lg text-white font-bold cursor-pointer" value="Add a Toy" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddAToy;