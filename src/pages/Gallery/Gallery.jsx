
const Gallery = () => {
    return (
        <div className="">
            <h1 className="text-4xl text-center font-bold my-10 text-[#E03C79]" >Gallery Section</h1>
            <div className="carousel w-2/3 mx-auto">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/FDs7g9J/image.png" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/w7KXcfq/image.png" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/09ZhzKZ/image.png" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/d5XP4np/image.png" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn bg-[#EF8716] btn-xs">1</a>
                <a href="#item2" className="btn bg-[#EF8716] btn-xs">2</a>
                <a href="#item3" className="btn bg-[#EF8716] btn-xs">3</a>
                <a href="#item4" className="btn bg-[#EF8716] btn-xs">4</a>
            </div>
        </div>
    );
};

export default Gallery;