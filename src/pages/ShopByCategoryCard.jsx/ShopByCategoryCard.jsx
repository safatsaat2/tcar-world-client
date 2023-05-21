
import {  FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const ShopByCategoryCard = ({data}) => {
    const {picture, name, price, rating, _id} = data
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture}  className="rounded-xl object-cover w-full h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-[#EF8716]">Product Name: {name}</h2>
                <p className='font-semibold'>Price: ${price}</p>
                <p className='flex justify-center items-center font-semibold'> <FaStar className='mx-2 text-[#EF8716]' /> {rating}</p>
                <div className="card-actions">
                    <Link to={`/singletoypage/${_id}`}><button className="btn bg-[#EF8716]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategoryCard;