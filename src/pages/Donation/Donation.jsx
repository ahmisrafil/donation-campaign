import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {


    const [donatedCard, setDonatedCard] = useState();
    const [notFound, setNotFound] = useState('');
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        const donatedCards = JSON.parse(localStorage.getItem('donatedCard'));
        if (donatedCards) {
            setDonatedCard(donatedCards);
        }
        else {
            setNotFound("No Data Found!")
        }

    }, [])
    const handleSeeAll = () => {

    }

    return (
        <div>

            {
                notFound ? <h3 className="text-4xl font-bold h-[80vh] flex justify-center items-center">{notFound}</h3>
                    :
                    <div className="mx-24 mt-24 mb-4 grid gap-6 lg:grid-cols-2">
                        {
                            donatedCard?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                    </div>
            }

            <div className="flex justify-center items-center">
                {donatedCard?.length > 4 && <button onClick={handleSeeAll} className="btn btn-primary">See All</button>}
            </div>
        </div>
    );
};

export default Donation;