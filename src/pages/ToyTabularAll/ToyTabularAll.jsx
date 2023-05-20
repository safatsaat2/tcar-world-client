import { Link } from "react-router-dom";

const ToyTabularAll = ({data}) => {
    console.log(data)
    const {sellerName, name, category, price, quantity, _id} = data
    return (
        <tr>
            <td>{sellerName ? sellerName: 'Not added'}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity ? quantity : 'Not Added'}</td>
            <td> <Link to={`/singletoypage/${_id}`}><button className="btn bg-[#EF8716]">View Details</button></Link></td>
        </tr>
    );
};

export default ToyTabularAll;