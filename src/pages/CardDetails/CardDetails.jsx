import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {

    
    const [card, setCard] = useState({});
    const { id } = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        const findCard = cards?.find(card => card.id == id)
        setCard(findCard)
    }, [id, cards])

    const { text_color, title, description } = card;


    const notifyDonate = () => {
        toast.success('You have successfully donated to the campaign', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };



    const handleDonate = () => {

        const donatedCardsArray = [];

        const donatedCards = JSON.parse(localStorage.getItem('donatedCard'))


        if (!donatedCards) {
            donatedCardsArray.push(card);
            localStorage.setItem('donatedCard', JSON.stringify(donatedCardsArray));
            notifyDonate();
        }
        else {
            donatedCardsArray.push(...donatedCards, card)
            localStorage.setItem('donatedCard', JSON.stringify(donatedCardsArray));
            notifyDonate();
        }
    }


    const styles = {
        backgroundColor: text_color,
    }

    return (
        <div className="card  bg-base-100 shadow-xl my-6">
            <figure><img className="w-2/3 rounded-lg" src={card?.image_url} alt="image" /></figure>
            <div className="mx-auto w-2/3">
                <div className="card-actions -mt-16  justify-start h-16 bg-black p-4 opacity-60">
                </div>
                <div className="p-2 ml-4">
                    <button onClick={handleDonate} style={styles} className="btn btn-primary border-none -mt-16 absolute ">Donate ${card?.price}</button>
                    <ToastContainer />
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