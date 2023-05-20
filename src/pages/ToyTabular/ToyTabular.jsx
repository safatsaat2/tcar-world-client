
const ToyTabular = ({data}) => {
    console.log(data)
    const {sellerName, name, category, price, quantity} = data
    return (
        <tr>
            <td>{sellerName ? sellerName: 'Not added'}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity ? quantity : 'Not Added'}</td>
            <td><button>Update</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
};

export default ToyTabular;