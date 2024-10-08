import { useNavigate } from "react-router-dom";

const WorkDetailsHero = ({ bgColor = "#fff", image, title }) => {
    const navigate = useNavigate();

    return (
        <section className="w-full flex flex-col items-center pt-6" style={{ backgroundColor: bgColor }}>
            <div onClick={() => navigate("/work")} className="lg:w-[70%] w-[90%] py-10 hidden md:flex items-center gap-3 cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_103_216)">
                        <path d="M17.1428 12H6.85712" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.42855 9.42822L6.85712 11.9997L9.42855 14.5711" stroke="#191C22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M12 23.1426C18.154 23.1426 23.1428 18.1538 23.1428 11.9998C23.1428 5.84576 18.154 0.856934 12 0.856934C5.84594 0.856934 0.857117 5.84576 0.857117 11.9998C0.857117 18.1538 5.84594 23.1426 12 23.1426Z"
                            stroke="#191C22"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_103_216">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className="text-[#191C22] font-medium">Back</span>
            </div>

            <div className="lg:w-[70%] w-[90%] flex lg:flex-row flex-col justify-between pt-6 lg:pb-32 pb-16 gap-8">
                <div className="order-2 lg:order-1">
                    <h1 className="hidden lg:inline-block text-[#86898F] font-medium text-xs leading-3 border border-[#86898F] rounded-[10px] p-3">UI/UX CASE STUDY</h1>
                    <p className="syne font-bold lg:text-[40px] text-2xl lg:leading-[48px] leading-7 max-w-[50rem] mt-2 text-[#191C22]">{title}</p>
                </div>
                <div className="max-w-[685px] order-1 lg:order-2 flex flex-col items-center">
                    <h1 className="inline-block lg:hidden text-[#86898F] font-medium text-xs leading-3 border border-[#86898F] rounded-[10px] p-3 mb-3">UI/UX CASE STUDY</h1>

                    <img src={image} alt="" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default WorkDetailsHero;
