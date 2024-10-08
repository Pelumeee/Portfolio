import { Link } from "react-router-dom";
const WorkCard = ({ cardName, cardImg, h1 = "440px", h2 = "250px", path = "" }) => {
    return (
        <Link to={path}>
            <div className={`projectCard lg:rounded-[40px] rounded-[11px] border h-[${h2}] sm:h-[${h1}] border-[#353C48] py-5 2xl:px-14 px-6 bg-[#000]`}>
                <div className="relative overflow-hidden w-full h-full text-center">
                    <div className="mb-5 sm:h-[85%] h-[80%] rounded-[12px] overflow-hidden">
                        <img className="object-cover w-full h-full" src={cardImg} alt="" />
                    </div>
                    <h1 className="font-medium leading-7 text-white">{cardName}</h1>
                </div>
            </div>
        </Link>
    );
};

export default WorkCard;
