import Button from "../../components/Button";
import WorkDetailsHero from "../../components/WorkDetailsHero";
import Screens from "../../components/Screens";

const Index = () => {
    return (
        <main className="relative w-full mt-[125px] min-h-[90vh]">
            <WorkDetailsHero bgColor="#F7FBFF" title="Designing a multinational cloud-based marketing solution" image="/images/cloud/one.png" />

            <section className="w-full bg-[#Fff] flex flex-col items-center py-10">
                <div className="lg:w-[70%] w-[90%]">
                    <div className="grid grid-cols-2 gap-10 mb-24">
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Overview</h1>
                            <p className="text-[#5A6067] font-medium leading-8 text-sm">
                                Marketing Cloud is a multinational cloud-based marketing solution that provides a centralized platform for managing customer data, enabling personalized marketing
                                campaigns and engagement strategies across multiple channels. With features such as data unification, intuitive user interface, multi-channel engagement, real-time data
                                refresh, and detailed analytics, it helps enterprise companies effectively manage and engage with their customers to drive business growth.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Approach</h1>
                            <p className="text-[#5A6067] font-medium leading-8 text-sm">
                                I started with researching current competitor products for their user experience and visual appeal of which i gained insights to create something better from a UI
                                viewpoint. I also built a comprehensive mood board informed by research and designing customised visual assets.With the insights i gained from my research, i designed
                                some icons and other visual assets on the app, then tested for accessibility with a number of users. Based on the feedback received, i made iterations to the designs
                                and created a prototype of the screens
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Users</h1>
                            <p className="text-[#5A6067] font-medium leading-8 text-sm">
                                Marketing Cloud is designed for companies who want to improve their customer engagement and marketing efforts by combining the power of a Customer Data Platform and
                                multi-channel marketing for offline and online customer acquisition.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Team</h1>
                            <ul className="list-disc px-8">
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Ogunyinka Oluwatobi (Nigeria) </li>
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Sreejith Kalladithodi (India)</li>
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Toye Fatolu (United Kingdom)</li>
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Damilola Ajayi (Nigeria)</li>
                                <li className="text-[#5A6067] font-medium leading-8 text-sm">Chibuike Okorie (Nigeria)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-24 p-10 border-[10px] border-[#EEFFF8] overflow-hidden">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl px-14">Illustrations</h1>
                        <div className="grid grid-cols-4 py-10">
                            <div className="flex flex-col items-center justify-center border-r border-[#ECF2EFCC] py-16">
                                <img src="/images/cloud/Segment.svg" alt="" className="max-w-[195px] mb-6"/>
                                <span className="text-[#5A6067] leading-7">Segment</span>
                            </div>
                            <div className="flex flex-col items-center justify-center border-r border-[#ECF2EFCC] py-16">
                                <img src="/images/cloud/New user.svg" alt="" className="max-w-[195px] mb-6"/>
                                <span className="text-[#5A6067] leading-7">Profile</span>

                            </div>
                            <div className="flex flex-col items-center justify-center border-r border-[#ECF2EFCC] py-16">
                                <img src="/images/cloud/Reward.svg" alt="" className="max-w-[195px] mb-6"/>
                                <span className="text-[#5A6067] leading-7">Rewards</span>

                            </div>
                            <div className="flex flex-col items-center justify-center py-16">
                                <img src="/images/cloud/Marketing.svg" alt="" className="max-w-[195px] mb-6"/>
                                <span className="text-[#5A6067] leading-7">Messaging</span>
                            </div>
                        </div>

                    </div>

                    <div className="mb-6">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Screens</h1>
                        <div className="grid grid-cols-2 gap-x-14 gap-y-6">
                            <Screens title="Log In" image="/images/cloud/screen1.png" />
                            <Screens title="Reset Password" image="/images/cloud/screen2.png" />
                            <Screens title="New Password" image="/images/cloud/screen3.png" />
                            <Screens title="Confirm Password" image="/images/cloud/screen4.png" />
                            <Screens title="Dashboard" image="/images/cloud/screen5.png" />
                            <Screens title="Message" image="/images/cloud/screen6.png" />
                            <Screens title="Profiles" image="/images/cloud/screen7.png" />
                            <Screens title="Segment" image="/images/cloud/screen8.png" />
                           
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

export default Index;
