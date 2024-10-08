import { Outlet, useLocation, NavLink } from "react-router-dom";

const Index = () => {
    const location = useLocation();
    console.log(location);

    return (
        <main className="relative w-full sm:mt-[125px] mt-[80px]">
            <section className="w-full bg-white flex flex-col items-center">
                <div className="lg:w-[70%] w-[90%] flex items-center justify-between text-[#000] lg:pt-28">
                    <div>
                        <h1 className="syne md:text-[75px] text-[50px] font-bold md:leading-[90px] leading-[60px] md:my-4">Work</h1>
                        <p className="text-lg leading-7 max-w-[50rem] mb-16 mt-2">
                            I am currently designing user-centric and revenue-driven products at Terragon. I work alongside product managers, engineers, data scientists and designers to develop
                            solutions that cater to people’s needs across various industries. Feel free to explore some of my showcased works below
                        </p>
                        <div className="work flex items-center gap-3">
                            <NavLink
                                to="case-study"
                                className={`${location.pathname === "/work" ? "active" : ""} py-[1rem] sm:px-[6rem] px-[1rem] bg-white text-black rounded-[10px] border border-[#000]`}
                            >
                                Case Studies
                            </NavLink>
                            <NavLink to="social-media" className="py-[1rem] sm:px-[6rem] px-[1rem] bg-white text-black rounded-[10px] border border-[#000]">
                                Social Media
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Outlet />
            </section>
        </main>
    );
};

export default Index;
