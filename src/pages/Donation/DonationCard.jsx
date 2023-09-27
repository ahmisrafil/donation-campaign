

const DonationCard = ({ card }) => {
    const { id, category, title, image_url, text_color, category_bg_color, card_bg_color, price } = card;

    const categoryStyles = {
        color: text_color,
        backgroundColor: category_bg_color,
    };
    const titleStyles = {
        color: text_color,
    };
    const cardBg = {
        backgroundColor: card_bg_color,
    };
    const btnBg = {
        backgroundColor: text_color,
    };


    return (
        <div>
            <div style={cardBg} className="flex rounded-lg  h-60 lg:h-52 bg-base-100 shadow-xl">
                <div><img className="h-52 w-52 rounded-s-lg" src={image_url} /></div>
                <div className="rounded-e-lg mx-4 py-4">
                    <h3 style={categoryStyles} className="p-2 mb-2 text-sm font-medium rounded-lg w-fit">{category}</h3>
                    <h2 className="text-xl mb-2 font-semibold">{title}</h2>
                    <p style={titleStyles}  className="mb-2">${price}</p>
                    <div className=" flex justify-start">
                        <button style={btnBg} className="btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;