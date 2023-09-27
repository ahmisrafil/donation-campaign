import { useState } from "react";

const Banner = ({ onSearch }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchClick = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="hero min-h-full " style={{ backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR3oiMnb3xXKYpVG5ZZYRoGFzA_pcMrzy0D9Ew92Aj_aBPykoRRefsjENlI)' }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content py-40">
                <div >
                    <h1 className="mb-6 md:mb-16 text-xl md:text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div>
                        <input className="rounded-s-md  input-md w-full max-w-xs"
                            type="text"
                            placeholder="Search by category"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={handleSearchClick} className="btn  md:rounded-s-none bg-[#FF444A] text-white border-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;