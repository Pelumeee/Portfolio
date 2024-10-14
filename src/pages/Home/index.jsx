import Button from "../../components/Button";
import WorksContainer from "../../components/WorksContainer";
import WorkCard from "../../components/WorkCardHome";
import { Link } from "react-router-dom";

// import Dialog from "../../components/Dialog";
// import { useState } from "react";
const Index = () => {
    return (
            <main className="relative w-full">
                <div className="sm:mt-[125px] mt-[100px]">
                    <section className="stickyContainer w-full bg-white flex flex-col items-center justify-between min-h-[90vh]">
                        <div className="lg:w-[70%] w-[90%] flex lg:flex-row flex-col items-center gap-6 justify-between text-[#000] lg:pt-32">
                            <div className="lg:order-1 order-2 text-center md:text-left">
                                <p className="hidden md:block text-3xl font-medium">Ogunyinka Oluwatobi</p>
                                <h1 className="syne md:text-[75px] text-3xl font-bold md:leading-[90px] leading-9 md:my-4 my-2">Product Designer</h1>
                                <p className="md:text-lg text-base leading-7 max-w-[45rem] md:mb-16 mb-6 md:mt-2 mt-0">
                                    I create functional and engaging solutions for businesses in diverse industries, that solve user problems and achieve business objectives.
                                </p>
                                <div className="flex md:flex-row flex-col items-center gap-3">
                                    <button className="w-full md:max-w-[220px] bg-black py-[1rem] text-white leading-8 text-xl rounded-[6px]">let&apos;s work</button>

                                    <Button bg="white" color="black" border="1px solid black" padding="1rem" radius="6px" to="/work">
                                        See my projects
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:order-2 order-1 flex flex-col items-center justify-center">
                                <p className="md:hidden text-3xl font-medium mb-2">Ogunyinka Oluwatobi</p>
                                <img src="/images/tobi1.png" alt="profilePicture" className="w-[400px] max-h-[400px]" />
                            </div>
                        </div>
                        <div className="w-full flex justify-center h-[10rem]">
                            <svg className="bounce" width="40" height="66" viewBox="0 0 40 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="38" height="64" rx="19" stroke="#191C22" strokeWidth="2" />
                                <circle cx="20" cy="53" r="5" fill="#191C22" />
                            </svg>
                        </div>
                    </section>
                    <section className="stickyContainer min-h-[90vh] pt-10 pb-24 text-center flex justify-center text-white bg-[#191C22]">
                        <div className="lg:w-[70%] w-[90%] flex flex-col items-center">
                            <h1 className="text-lg leading-5 mb-12">Featured projects</h1>
                            <span className="block w-[120px] h-[2px] bg-[#fff]"></span>
                            <WorksContainer>
                                <WorkCard
                                    cardName="TERRAGON"
                                    cardDescription="Building a marketing technology website for Africa’s largest Cloud Data Platform."
                                    cardImg="images/imgOne.png"
                                    path="/work/terragon"
                                />
                                <WorkCard
                                    cardName="MTN THRYVE ADS"
                                    cardDescription="Mobile ad platform powered by Meta and Terragon for small businesses to target customers."
                                    cardImg="images/mtn.png"
                                    path="/work/MTN"
                                />
                                <WorkCard
                                    cardName="PLOTPAL (Coming soon)"
                                    cardDescription="Plotpal lets users buy land with flexible installment payments via a mobile app."
                                    cardImg="images/plotpal.png"
                                />
                                <WorkCard
                                    cardName="MARKETING CLOUD"
                                    cardDescription="Building a solution that provides marketing automation for target audience engagement."
                                    cardImg="images/marketing.png"
                                    path="/work/cloud-marketing"
                                />
                            </WorksContainer>

                            <Link to="/work" className="py-[0.5rem] sm:px-[6rem] px-[4rem] bg-white text-black rounded-[10px]">
                                View More
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
    );
};

export default Index;
