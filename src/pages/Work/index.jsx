import Button from "../../components/Button";
import WorksContainer from "../../components/WorksContainer";
import WorkCard from "../../components/WorkCardWork";

const index = () => {
    return (
        <main className="relative w-full mt-[125px]">
            <section className="w-full bg-white flex flex-col items-center">
                <div className="lg:w-[70%] w-[90%] flex items-center justify-between text-[#000] pt-28">
                    <div>
                        <h1 className="syne text-[75px] font-bold leading-[90px] my-4">Work</h1>
                        <p className="text-lg leading-7 max-w-[50rem] mb-16 mt-2">
                            I am currently designing user-centric and revenue-driven products at Terragon. I work alongside product managers, engineers, data scientists and designers to develop
                            solutions that cater to people’s needs across various industries. Feel free to explore some of my showcased works below
                        </p>
                        <div className="flex items-center gap-3">
                            <Button bg="black" color="white" padding="1rem 3.5rem">
                                Case Studies
                            </Button>
                            <Button bg="white" color="black" border="1px solid black" padding="1rem 3.5rem" to="/work">
                                Social Media
                            </Button>
                        </div>
                    </div>
                </div>
                <WorksContainer>
                    <WorkCard cardName="TERRAGON" cardDescription="Building a marketing technology website for Africa’s largest Cloud Data Platform." cardImg="images/imgOne.png" />
                    <WorkCard cardName="MTN THRYVE ADS" cardDescription="Mobile ad platform powered by Meta and Terragon for small businesses to target customers." cardImg="images/mtn.png" />
                    <WorkCard cardName="PLOTPAL (Coming soon)" cardDescription="Plotpal lets users buy land with flexible installment payments via a mobile app." cardImg="images/plotpal.png" />
                    <WorkCard cardName="MARKETING CLOUD" cardDescription="Building a solution that provides marketing automation for target audience engagement." cardImg="images/marketing.png" />
                </WorksContainer>
            </section>
        </main>
    );
};

export default index;
