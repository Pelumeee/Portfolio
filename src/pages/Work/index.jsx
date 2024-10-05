import Button from "../../components/Button";
import { Outlet, useLocation } from "react-router-dom";



const Index = () => {
    const location = useLocation();
    console.log(location);

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
                        <div className="work flex items-center gap-3">
                            <Button  bg="white" color="black" padding="1rem 3.5rem" border="1px solid black" to="case-study" clName={location.pathname}>
                                Case Studies
                            </Button>
                            <Button bg="white" color="black" border="1px solid black" padding="1rem 3.5rem" to="social-media">
                                Social Media
                            </Button>
                        </div>
                    </div>
                </div>
                <Outlet />
            </section>
        </main>
    );
};

export default Index;
