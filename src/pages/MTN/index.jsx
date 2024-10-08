import Button from "../../components/Button";
import WorkDetailsHero from "../../components/WorkDetailsHero";
import Screens from "../../components/Screens";

const Index = () => {
    return (
        <main className="relative w-full mt-[125px] min-h-[90vh]">
            <WorkDetailsHero bgColor="#FFFDF4" title="Designing a simplified mobile advertising platform" image="/images/mtn/one.png" />

            <section className="w-full bg-[#Fff] flex flex-col items-center py-10">
                <div className="lg:w-[70%] w-[90%]">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-6">
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Overview</h1>
                            <p className="text-[#5A6067] font-medium leading-8 text-sm">
                                MTN Thryve Ads is a simplified mobile advertising platform powered by Meta and Terragon to help small businesses reach their ideal customers on Facebook, Instagram. A
                                SaaS platform designed for SMB’s to market and engage with their customers both online and offline, in the simplest and easiest way on their mobile phones.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Role</h1>
                            <p className="text-[#5A6067] font-medium leading-8 text-sm">
                                My role was to make the platform user-friendly and visually appealing. I focused on creating a smooth experience for both small businesses and their customers. I spent
                                my days choosing colours, designing buttons and forms, and making sure everything looked good and worked well on different phones and tablets. I also worked closely
                                with the tech team, explaining how I wanted things to look and function. It was important for me to create a design that not only looked great but also reflected MTN's
                                brand identity. I paid special attention to making sure the platform was easy to use for everyone, including people with disabilities. My goal was to create a platform
                                that not only met the needs of our users but also provided a pleasant and inclusive experience for everyone involved.
                            </p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Style Guide</h1>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-10">
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">Primary Brand Colors</p>
                                <div>
                                    <img src="/images/mtn/two.png" alt="" className="max-w-[200px] max-h-[116px]" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">Typography</p>
                                <div>
                                    <img src="/images/terragon/four.png" alt="" className="max-w-[203px] max-h-[100px]" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">Color Palettes (Gray)</p>
                                <div>
                                    <img src="/images/mtn/three.png" alt="" className="max-w-[440px] max-h-[430px]" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">Color Palettes (Error)</p>
                                <div>
                                    <img src="/images/mtn/four.png" alt="" className="max-w-[440px] max-h-[430px]" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">Color Palettes (Warning)</p>
                                <div>
                                    <img src="/images/mtn/five.png" alt="" className="max-w-[440px] max-h-[430px]" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">Color Palettes (Success)</p>
                                <div>
                                    <img src="/images/mtn/six.png" alt="" className="max-w-[440px] max-h-[430px]" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Toast Notification</h1>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <p className="text-[#5A6067] font-semibold leading-7 text-sm">Success</p>
                                        <img src="/images/mtn/seven.png" alt="" className="max-w-[363px]" />
                                    </div>
                                    <div>
                                        <p className="text-[#5A6067] font-semibold leading-7 text-sm">Warning</p>
                                        <img src="/images/mtn/eight.png" alt="" className="max-w-[363px]" />
                                    </div>
                                    <div>
                                        <p className="text-[#5A6067] font-semibold leading-7 text-sm">Error</p>
                                        <img src="/images/mtn/nine.png" alt="" className="max-w-[363px]" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-10">
                                    <div>
                                        <p className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Iconography</p>
                                        <img src="/images/mtn/ten.png" alt="" className="max-w-[575px]" />
                                    </div>
                                    <div>
                                        <p className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Illustration</p>
                                        <img src="/images/mtn/eleven.png" alt="" className="max-w-[575px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Screens</h1>
                        <div className="grid lg:grid-cols-2 grid-cols1 gap-x-14 gap-y-6">
                            <Screens title="Log In" image="/images/mtn/screen1.png" />
                            <Screens title="Forgot Password" image="/images/mtn/screen2.png" />
                            <Screens title="Create Campaign" image="/images/mtn/screen3.png" />
                            <Screens title="Settings" image="/images/mtn/screen4.png" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#FFFDF4] flex flex-col items-center">
                <div className="lg:w-[70%] w-[90%] py-10">
                    <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">More screens...</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                        <div className="">
                            <img src="/images/mtn/more1.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/mtn/more2.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/mtn/more3.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/mtn/more4.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/mtn/more5.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/mtn/more6.png" alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#fff] flex flex-col items-center">
                <div className="lg:w-[70%] w-[90%] py-24 flex justify-center items-center">
                    <Button bg="#191C22" color="white" padding="0.7rem" radius="6px">
                        View More
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default Index;
