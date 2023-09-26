import { useLoaderData } from "react-router-dom";
import Cards from "../../component/Cards/Cards";
import Banner from "../../component/Header/Banner/banner";

const Home = () => {

    const cards = useLoaderData();
    

    return (
        <div>
            <Banner></Banner>
           
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;