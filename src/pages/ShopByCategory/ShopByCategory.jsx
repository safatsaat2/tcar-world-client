import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopByCategoryCard from '../ShopByCategoryCard.jsx/ShopByCategoryCard';


const ShopByCategory = () => {

    const [data, setData] = useState([])
    const [cat, setCat] = useState('truck')


    useEffect(() => {
        fetch('http://localhost:5000/category-data', {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const filteredData = data.filter(d => d.category === cat)



    return (
        <div className='w-2/3 my-20 mx-auto'>
            <h1 className='text-4xl text-center font-bold my-10 text-[#E03C79]'>Shop by Category</h1>
            <Tabs defaultIndex={1} onSelect={(index) => index === 0 ? setCat('sports car') : index === 1 ? setCat('truck') : setCat('suv')}>
                <TabList>
                    <Tab > Sports Car</Tab>
                    <Tab >Truck</Tab>
                    <Tab >SUV</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {filteredData.map(d => <ShopByCategoryCard key={d._id} data={d}></ShopByCategoryCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {filteredData.map(d => <ShopByCategoryCard key={d._id} data={d}></ShopByCategoryCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {filteredData.map(d => <ShopByCategoryCard key={d._id} data={d}></ShopByCategoryCard>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;