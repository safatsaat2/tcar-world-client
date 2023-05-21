import { useLoaderData } from "react-router-dom";

const SingleToyPageUpdate = () => {

    const datas = useLoaderData()
    const {price, quantity, description, _id } = datas
    console.log(datas)
    const handleUpdate = (event) =>{
        event.preventDefault()
        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {
            price,
            quantity,
            description
        }
        fetch(`https://tcar-world-server.vercel.app/category-data/${_id}`, {
            method: "PATCH",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert("Updated Toy Successfully")
            }
        })
    }

    return (
        <>
            <h1 className="text-5xl text-center font-bold my-5">Update the toy</h1>
            <div className="flex flex-row items-center justify-center my-5">

                <form onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="float" defaultValue={price} name='price' placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' defaultValue={description} placeholder="Description" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="bg-[#EF8716] p-3 rounded-lg text-white font-bold cursor-pointer" value="Update" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default SingleToyPageUpdate;