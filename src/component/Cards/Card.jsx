import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
    const {id, category, title, image_url, text_color, category_bg_color, card_bg_color } = card;

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
    return (
        <NavLink to={`/card/${id}`}>
            <div className="card card-compact  w-full bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="image" className="h-56" /></figure>
                <div style={cardBg} className="card-body">

                    <h3 style={categoryStyles} className="p-2 text-sm font-medium rounded-lg w-fit">{category}</h3>
                    <h2 style={titleStyles} className="card-title">{title}</h2>

                </div>
            </div>
        </NavLink>
    );
};

export default Card;