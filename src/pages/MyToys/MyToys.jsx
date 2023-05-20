// import { useLoaderData } from "react-router-dom";
import ToyTabular from "../ToyTabular/ToyTabular";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";

const MyToys = () => {
    // const datas = useLoaderData()
    // console.log(datas)
    const [datas, setDatas] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/category-data/${user?.email}`)
        .then(res => res.json())
        .then(data => setDatas(data))
    },[user])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/category-data/${id}`,
            {method:"DELETE"})
            .then(res => res.json())
            .then(data => {console.log(data)
                if(data.deletedCount > 0){
                    alert("Deleted Successfully")
                    const remaining = datas.filter(data => data._id !== id)
                    setDatas(remaining)
                    console.log('ala')
                }
            })
            
        }
    }
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

                {datas.map(data => <ToyTabular key={data._id} data={data} handleDelete={handleDelete}></ToyTabular>)}

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;