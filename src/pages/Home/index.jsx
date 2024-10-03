import Button from "../../components/Button";
import WorksContainer from "../../components/WorksContainer";
import WorkCard from "../../components/WorkCardHome";
const index = () => {
    return (
        <main className="relative w-full mt-[125px]">
            <section className="stickyContainer w-full bg-white flex flex-col items-center justify-between min-h-[90vh]">
                <div className="lg:w-[70%] w-[90%] flex items-center justify-between text-[#000] pt-28">
                    <div>
                        <p className="text-3xl font-medium">Ogunyinka Oluwatobi</p>
                        <h1 className="syne text-[75px] font-bold leading-[90px] my-4">Product Designer</h1>
                        <p className="text-lg leading-7 max-w-[50rem] mb-16 mt-2">
                            I create functional and engaging solutions for businesses in diverse industries, that solve user problems and achieve business objectives.
                        </p>
                        <div className="flex items-center gap-3">
                            <Button bg="black" color="white" padding="1rem 5rem">
                                let&apos;s work
                            </Button>
                            <Button bg="white" color="black" border="1px solid black" padding="1rem 3.5rem" to="/work">
                                See my projects
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img src="/images/tobi2.png" alt="profilePicture" />
                    </div>
                </div>
                <div className="w-full flex justify-center h-[10rem]">
                    <svg className="bounce" width="40" height="66" viewBox="0 0 40 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="38" height="64" rx="19" stroke="#191C22" strokeWidth="2" />
                        <circle cx="20" cy="53" r="5" fill="#191C22" />
                    </svg>
                </div>
            </section>
            <section className="stickyContainer min-h-[90vh] pt-10 pb-24 text-center flex flex-col items-center text-white bg-[#191C22]">
                <h1 className="text-lg leading-5 mb-12">Featured projects</h1>
                <span className="block w-[120px] h-[2px] bg-[#fff]"></span>
                <WorksContainer>
                    <WorkCard cardName="TERRAGON" cardDescription="Building a marketing technology website for Africa’s largest Cloud Data Platform." cardImg="images/imgOne.png" />
                    <WorkCard cardName="MTN THRYVE ADS" cardDescription="Mobile ad platform powered by Meta and Terragon for small businesses to target customers." cardImg="images/mtn.png" />
                    <WorkCard cardName="PLOTPAL (Coming soon)" cardDescription="Plotpal lets users buy land with flexible installment payments via a mobile app." cardImg="images/plotpal.png" />
                    <WorkCard cardName="MARKETING CLOUD" cardDescription="Building a solution that provides marketing automation for target audience engagement." cardImg="images/marketing.png" />
                </WorksContainer>

                <Button bg="white" color="black" border="1px solid black" padding="0.5rem 5rem" to="/work">
                    View More
                </Button>
            </section>
        </main>
    );
};

export default index;
