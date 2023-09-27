import Card from "./Card";

const Cards = ({cards}) => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-20 my-10 gap-6">
            
            {
                cards?.map(card =><Card key={cards.id} card={card}></Card> )
            }
        </div>
    );
};

export default Cards;