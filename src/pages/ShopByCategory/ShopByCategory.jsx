import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {

    const [data, setData] = useState([])
    const [cat, setCat] = useState('truck')
    

    useEffect(()=>{
        fetch('http://localhost:5000/category-data', {
            method:"GET",
            headers:{
                "content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const filteredData = data.filter(d => d.category === cat)
    // setData(filteredData
    // console.log(data)
    console.log(filteredData)
    

    return (
        <div className='w-full mx-auto'>
            <Tabs defaultIndex={1} onSelect={(index) => index === 0 ? setCat('sports car') :  index === 1 ? setCat('truck') : setCat('suv')}>
                <TabList>
                    <Tab > Sports Car</Tab>
                    <Tab >Truck</Tab>
                    <Tab >SUV</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;