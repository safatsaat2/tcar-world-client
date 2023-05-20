import { useLoaderData } from "react-router-dom";
import ToyTabular from "../ToyTabular/ToyTabular";

const MyToys = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                {datas.map(data => <ToyTabular key={data._id} data={data}></ToyTabular>)}

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;