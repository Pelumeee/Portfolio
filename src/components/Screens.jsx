const Screens = ({ title, image }) => {
    return (
        <div>
            <h1 className="text-[#5A6067] leading-7 mb-2">{title}</h1>
            <div className="p-4 bg-[#F9F4F4] rounded-[8px] overflow-hidden">
                <img src={image} alt="" className="w-full h-full" />
            </div>
        </div>
    );
};

export default Screens;
