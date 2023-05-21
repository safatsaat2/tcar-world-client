import { useEffect, useState } from 'react';
import OfferSectionCard from '../OfferSectionCard/OfferSectionCard';
import { FaFire } from 'react-icons/fa';


const OfferSection = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('https://tcar-world-server.vercel.app/category-data', {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='my-20 mx-auto'>
            <h1 className='text-4xl text-center justify-center font-bold flex text-[#E03C79] items-center '>Our Special! <FaFire className='text-[#EF8716]'></FaFire></h1>
            <div className="carousel carousel-center gap-4 carousel-item rounded-box">
                {data.map(d => <OfferSectionCard key={d._id} data={d}></OfferSectionCard>)}

            </div>
        </div>
    );
};

export default OfferSection;