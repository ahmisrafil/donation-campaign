
const Banner = () => {
    return (
        <div className="hero min-h-full " style={{ backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR3oiMnb3xXKYpVG5ZZYRoGFzA_pcMrzy0D9Ew92Aj_aBPykoRRefsjENlI)' }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content py-40">
                <div >
                    <h1 className="mb-16 text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <input type="text" placeholder="Search here" className="rounded-s-md  input-md w-full max-w-xs" />
                    <button className="btn rounded-s-none bg-[#FF444A] text-white border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;