import Button from "../../components/Button";
import WorkDetailsHero from "../../components/WorkDetailsHero";
import Screens from "../../components/Screens";

const index = () => {
    return (
        <main className="relative w-full mt-[125px] min-h-[90vh]">
            <WorkDetailsHero bgColor="#EDFCF6" title="Designing vitse technology site for insurance businesses" image="/images/vitse/one.png" />

            <section className="w-full bg-[#Fff] flex flex-col items-center py-10">
                <div className="lg:w-[70%] w-[90%]">
                    <div className="grid grid-cols-2 gap-10 mb-6">
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Overview</h1>
                            <p className="text-[#5A6067] font-medium leading-8 text-sm">
                                Vitse Technology is an insurance technology company that develops solutions specifically tailored for the insurance industry. They offer a suite of products that cater
                                to various aspects of insurance operations which are;
                            </p>
                            <ul className="list-disc px-8">
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Vitse Adjuster</li>
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Vitse Broker</li>
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Vitse Life</li>
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Vitse General</li>
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Vitse Procurement</li>
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Kinito</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Role</h1>
                            <p className="text-[#5A6067] font-medium leading-8 text-sm">
                                My role was that of a Wordpress Developer and Visual Designer. As a Wordpress Developer, i implemented all the designed pages (Desktop and Mobile) on the website to
                                ensure full functionality. As a Visual Designer, i provided visual assets (edited images and illustrations) for different pages, sections and features on the website,
                                and also assisted with designing UI of some pages on the website. This project took six (6) weeks to complete.
                            </p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Style Guide</h1>
                        <div className="grid grid-cols-2 gap-y-10">
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">Colors</p>
                                <div>
                                    <img src="/images/vitse/two.png" alt="" className="max-w-[440px] max-h-[252px]" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">Typography</p>
                                <div>
                                    <img src="/images/vitse/three.png" alt="" className="max-w-[203px] max-h-[100px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Screens</h1>
                        <div className="grid grid-cols-2 gap-x-14 gap-y-6">
                            <Screens title="Home" image="/images/vitse/screen1.png" />
                            <Screens title="About" image="/images/vitse/screen2.png" />
                            <Screens title="Vitse Broker" image="/images/vitse/screen3.png" />
                            <Screens title="Work" image="/images/vitse/screen4.png" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#EDFCF6] flex flex-col items-center">
                <div className="lg:w-[70%] w-[90%] py-10">
                    <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">More screens...</h1>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="">
                            <img src="/images/vitse/more1.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/vitse/more2.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/vitse/more3.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/vitse/more4.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/vitse/more5.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/vitse/more6.png" alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#fff] flex flex-col items-center">
                <div className="lg:w-[70%] w-[90%] py-24 flex justify-center items-center">
                    <Button bg="#191C22" color="white" padding="0.7rem 6rem" radius="6px">
                        View More
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default index;
