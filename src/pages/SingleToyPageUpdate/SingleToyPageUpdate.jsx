import { useLoaderData } from "react-router-dom";

const SingleToyPageUpdate = () => {

    const datas = useLoaderData()
    const {  price, quantity, description } = datas
    console.log(datas)

    return (
        <div className="flex flex-row items-center justify-center">
            <form>
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
    );
};

export default SingleToyPageUpdate;