import { useLoaderData } from "react-router-dom";
import Cards from "../../component/Cards/Cards";
import Banner from "../../component/Header/Banner/banner";
import { useState } from "react";

const Home = () => {

    const cards = useLoaderData();


    // this is for bonus part

    const [filteredCards, setFilteredCards] = useState(cards); 

    const handleSearch = (query) => {
        const newFilteredCards = cards.filter(
            (card) => card.category.toLowerCase() === query.toLowerCase()
        );
        setFilteredCards(newFilteredCards);
    };

    return (
        <div>
            <Banner onSearch={handleSearch} />
            <Cards cards={filteredCards} />
        </div>
    );
};

export default Home;