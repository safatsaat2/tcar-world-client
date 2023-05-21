import { useLoaderData } from "react-router-dom";
import ToyTabularAll from "../ToyTabularAll/ToyTabularAll";

const AllToys = () => {

    const datas = useLoaderData()
    const sortData = datas

   datas.sort(function(a, b){return a.price - b.price})
        

    

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
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>

                    {sortData.map(data => <ToyTabularAll key={data._id} data={data}></ToyTabularAll>)}

                </tbody>
            </table>
        </div>
    );
};

export default AllToys;