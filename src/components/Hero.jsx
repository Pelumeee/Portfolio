import Button from "./Button";
const Hero = () => {
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
                            <Button bg="white" color="black" border="1px solid black" padding="1rem 3.5rem">
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
                <div className="lg:w-[70%] w-[90%] grid grid-cols-2 gap-y-24 gap-x-16 py-24">
                    <div className="projectCards rounded-[40px] border border-[#353C48] min-h-[440px] p-5">
                        <div className="relative overflow-hidden rounded-[20px]">
                            <img className="imgScale object-cover w-full h-full" src="images/imgOne.png" alt="" />
                            <div className="absolute h-[120px] w-full flex items-center justify-between bg-[#191C2299] bottom-0 py-8 px-10">
                                <div className="text-white text-left">
                                    <h1 className="text-xl font-bold leading-7">TERRAGON</h1>
                                    <p className="text-sm leading-7 max-w-[30rem]">Building a marketing technology website for Africa’s largest Cloud Data Platform.</p>
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
                </div>
                <Button bg="white" color="black" border="1px solid black" padding="0.5rem 5rem">
                    View More
                </Button>
            </section>
        </main>
    );
};

export default Hero;
