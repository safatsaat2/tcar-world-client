


const Blogs = () => {
    return (
        <div className='w-2/3 my-20 mx-auto'>
            <div className=" flex flex-col gap-3 justify-center items-center">
                <div className="collapse w-1/2 rounded-md">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#F9D1A6] font-semibold peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content bg-[#E03C79]  text-primary-content peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        <p>Access tokens are the thing that applications use to make API requests on behalf of a user. Refresh tokens are used to get new access token.
                            refresh token help user to get validate without log in multiple times.Access token and refresh token should not be stored in the local/session storage. access token and refresh tokens can be store in cookie.</p>
                    </div>
                </div>
                <div className="collapse w-1/2 rounded-md">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#F9D1A6] font-semibold peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content bg-[#E03C79]  text-primary-content peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        <ul >
                            <li>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.</li>
                            <li>Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.</li>
                            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                            <li>SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.</li>
                            <li>Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse w-1/2 rounded-md">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#F9D1A6] font-semibold peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        What is express js? What is Nest JS ?
                    </div>
                    <div className="collapse-content bg-[#E03C79]  text-primary-content peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes.
                        <br />
                        NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript.
                    </div>
                </div>
                <div className="collapse w-1/2 rounded-md">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#F9D1A6] font-semibold peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        What is MongoDB aggregate and how does it work
                    </div>
                    <div className="collapse-content bg-[#E03C79]  text-primary-content peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;