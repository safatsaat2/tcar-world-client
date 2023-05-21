import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import OfferSection from "../OfferSection/OfferSection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div className="w-full">
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <OfferSection></OfferSection>
        </div>
    );
};

export default Home;