import { Link } from "react-router-dom";
const WorkCard = ({ cardName, cardImg, h = "440px", path = "" }) => {
    return (
        <Link to={path}>
            <div className={`projectCards rounded-[40px] border border-[#353C48] min-h-[${h}] py-5 px-14 bg-[#000]`}>
                <div className="relative overflow-hidden w-full h-full text-center">
                    <div className="mb-5 h-[85%] rounded-[12px] overflow-hidden">
                        <img className="object-cover w-full h-full" src={cardImg} alt="" />
                    </div>
                    <h1 className="font-medium leading-7 text-white">{cardName}</h1>
                </div>
            </div>
        </Link>
    );
};

export default WorkCard;
