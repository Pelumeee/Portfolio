import { Link } from "react-router-dom";

const WorkCard = ({ cardName, cardImg, cardDescription, path = "" }) => {
    return (
        <Link to={path}>
            <div className="projectCards rounded-[40px] border border-[#353C48]  md:p-5 p-2">
                <div className="relative h-full overflow-hidden rounded-[20px]">
                    <img className="imgScale object-cover w-full h-full" src={cardImg} alt="" />
                    <div className="absolute h-[120px] w-full flex items-center justify-between bg-[#191C2299] bottom-0 md:py-8 py-2 md:px-10 px-4">
                        <div className="text-white text-left">
                            <h1 className="md:text-xl text-sm font-bold leading-7">{cardName}</h1>
                            <p className="md:text text-xs  leading-7 max-w-[30rem]">{cardDescription}</p>
                        </div>
                        <svg className="arrow" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.8917 10.5468H2.14844C1.82485 10.5468 1.5625 10.8092 1.5625 11.1328V13.8671C1.5625 14.1907 1.82485 14.4531 2.14844 14.4531H16.8917V16.702C16.8917 17.7461 18.1539 18.2689 18.8922 17.5307L23.0943 13.3286C23.552 12.8709 23.552 12.129 23.0943 11.6713L18.8922 7.46923C18.154 6.731 16.8917 7.25385 16.8917 8.2979V10.5468Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkCard;
