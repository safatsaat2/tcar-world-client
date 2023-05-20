import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const SingleToyPage = () => {
    const datas = useLoaderData();
    console.log(datas)
    const { picture, sellerName, sellerEmail, name, price, rating, quantity, description } = datas
    return (
        <div className="flex justify-center items-center my-5">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Toy Name:   {name ? name : "Not Added"}
                    </h2>
                    <p className="text-md">Seller Name: {sellerName ? sellerName : 'Not Added'}</p>
                    <p className="text-md">Seller Email: {sellerEmail ? sellerEmail : 'Not Added'}</p>
                    <p className="text-sm">Price: ${price ? price : 'Not Added'}</p>
                    <p className="text-sm flex items-center">Rating: <FaStar className="mx-2"></FaStar>{rating ? rating : 'Not Added'}</p>
                    <p className="text-sm flex items-center">Quantity: {quantity ? quantity : 'Not Added'}</p>
                    <p className="text-sm flex items-center">Description: {description ? description : 'Not Added'}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleToyPage;