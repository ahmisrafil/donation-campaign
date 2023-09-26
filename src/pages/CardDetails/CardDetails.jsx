import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const [card, setCard] = useState({});

    const { id } = useParams();

    const cards = useLoaderData();

    useEffect(() => {
        const findCard = cards?.find(card => card.id == id)
        setCard(findCard)
    }, [id, cards])
    const { category_bg_color, text_color, title, description } = card;

    const handleDonate = () => {
        console.log(card);




    }


    const styles = {
        color: text_color,
        backgroundColor: category_bg_color,
    }

    return (
        <div className="card  bg-base-100 shadow-xl my-6">
            <figure><img className="w-2/3 rounded-lg" src={card?.image_url} alt="image" /></figure>
            <div className="mx-auto w-2/3">
                <div className="card-actions -mt-16  justify-start h-16 bg-black p-4 opacity-60">
                </div>
                <div className="p-2 ml-4">
                    <button onClick={handleDonate} style={styles} className="btn btn-primary border-none -mt-16 absolute ">Donate ${card?.price}</button>
                </div>
                <div className="mb-20">
                    <h2 className="card-title text-4xl font-bold mb-6">{title}</h2>
                    <p className="text-base font-normal text-slate-500">{description}</p>
                </div>
            </div>
        </div>


    );
};

export default CardDetails;