import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const Blogs = () => {
    return (
        <div className='w-2/3 my-20 mx-auto'>
            <Tabs  >
                <TabList >
                    <Tab >What is an access token and refresh token? <br /> How do they work and where should we store them on the client-side?</Tab>
                    <Tab >Compare SQL and NoSQL databases?</Tab>
                    <Tab >What is express js? What is Nest JS ?</Tab>
                    <Tab >SUV</Tab>
                </TabList>

                <TabPanel>
                    <div >
                        Access tokens are the thing that applications use to make API requests on behalf of a user. Refresh tokens are used to get new access token.
                        refresh token help user to get validate without log in multiple times.Access token and refresh token should not be stored in the local/session storage. access token and refresh tokens can be store in cookie.
                    </div>
                </TabPanel>
                <TabPanel>
                    <ul >
                        <li>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.</li>
                        <li>Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.</li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.</li>
                        <li>Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</li>
                    </ul>
                </TabPanel>
                <TabPanel>
                    <div >
                    Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes.
                    <br />
                    NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript.
                    </div>
                </TabPanel>
                <TabPanel>
                    <div >
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Blogs;