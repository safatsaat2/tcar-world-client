import { Link } from "react-router-dom";

const ToyTabular = ({data, handleDelete}) => {

    

    console.log(data)
    const {sellerName, name, category, price, quantity, _id} = data
    return (
        <tr>
            <td>{sellerName ? sellerName: 'Not added'}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity ? quantity : 'Not Added'}</td>
            <td><Link to={`/singletoypageupdate/${_id}`}><button >Update</button></Link></td>
            <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
        </tr>
    );
};

export default ToyTabular;