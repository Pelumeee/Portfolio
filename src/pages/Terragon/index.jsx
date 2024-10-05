import Button from "../../components/Button";
import WorkDetailsHero from "../../components/WorkDetailsHero";
import Screens from "../../components/Screens";

const Index = () => {
    return (
        <main className="relative w-full mt-[125px] min-h-[90vh]">
            <WorkDetailsHero bg="#f4f7fe" title="Designing a marketing site for Terragon’s SaaS products" image="/images/terragon/one.png" />

            <section className="w-full bg-[#Fff] flex flex-col items-center py-10">
                <div className="lg:w-[70%] w-[90%]">
                    <div className="grid grid-cols-2 gap-10 mb-6">
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Overview</h1>
                            <p className="text-[#5A6067] font-medium leading-8 text-sm">
                                Terragon is an enterprise marketing technology company that aggregates and enriches consumer date, generating measurable outcomes for telco’s, banks, and larger brands.
                                Terragon has offices in Lagos, Kenya, South Africa, India, Ghana and the United Kingdom. As Africa’s fastest growing enterprise, the company thrives to help businesses
                                connect to their customers, through her Customer Data Platform (CDP); Terragon Prime. As such, there was a need to rebuild the company website with focus on marketing
                                the CDP and targeting a new category of clients; the Small and Medium Businesses.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Role</h1>
                            <p className="text-[#5A6067] font-medium leading-8 text-sm">
                                My role was that of a Wordpress Developer and Visual Designer. As a Wordpress Developer, i implemented all the designed pages (Desktop and Mobile) on the website to
                                ensure full functionality. As a Visual Designer, i provided visual assets (edited images and illustrations) for different pages, sections and features on the website,
                                and also assisted with designing UI of some pages on the website. This project took eight (8) weeks to complete.
                            </p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Evaluation Summary</h1>
                        <h2 className="text-[#5A6067] font-semibold leading-7 text-sm">Analytics Study</h2>
                        <p className="text-[#5A6067] font-medium leading-8 text-sm">
                            The brief analytics study concludes that the website’s top visitors are from Nigeria, United States, India and UK. As per the data between September 1 to Oct 1, 2022, the
                            website has a high amount of visitors with about 82% being new visitors. Despite this, the website has a bounce rate of 57.44% for new visitors and 62% for returning
                            visitors. Further analysis concluded that the landing page has had a higher visit than any other page on the website.
                        </p>
                    </div>
                    <div>
                        <img src="/images/terragon/two.png" alt="" className="max-w-[407px] max-h-[351px]" />
                    </div>
                    <div className="mb-6">
                        <h2 className="text-[#5A6067] font-semibold leading-7 text-sm">Heuristic Study</h2>
                        <p className="text-[#5A6067] font-medium leading-8 text-sm">
                            The data from the study concludes that Terragon.com needs an overhaul in accordance with some of the heuristic principles. The website received a lower rating for
                            principles such as Consistency and Standards, Aesthetic and Minimalistic design and Match between system and real world. Consistency and Standard receiving the lowest of
                            them with the highest issues identified. Principles such as Visibility of system status, Recognition rather than recall and help and documentation received medium rating
                            where the focus was largely on “Readmore” and “Explore more” links as well as the contact forms that needed further improvement.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-[#5A6067] font-semibold leading-7 text-sm">Accessibility and Page speed scores</h2>
                        <p className="text-[#5A6067] font-medium leading-8 text-sm">
                            The accessibility score for the website are on the higher side as it received a score of 92 out of 100. However the page speed scores fell below average at just 14 out of
                            100. This concludes that the site needs to be optimised at several fronts during the overhaul-such as use of optimised images, icons and scripts.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Style Guide</h1>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">colors</p>
                                <div>
                                    <img src="/images/terragon/three.png" alt="" className="max-w-[440px] max-h-[252px]" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[#5A6067] font-medium leading-8 text-sm mb-4">Typography</p>
                                <div>
                                    <img src="/images/terragon/four.png" alt="" className="max-w-[203px] max-h-[100px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Style Guide</h1>
                        <div className="">
                            <img src="/images/terragon/five.png" alt="" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">Screens</h1>
                        <div className="grid grid-cols-2 gap-x-14 gap-y-6">
                            <Screens title="Home" image="/images/terragon/screen1.png" />
                            <Screens title="About" image="/images/terragon/screen2.png" />
                            <Screens title="Contact" image="/images/terragon/screen3.png" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#E7EFF5] flex flex-col items-center">
                <div className="lg:w-[70%] w-[90%] py-10">
                    <h1 className="text-[#191C22] font-semibold leading-7 text-2xl mb-4">More screens...</h1>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="">
                            <img src="/images/terragon/more1.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/terragon/more2.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/terragon/more3.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/terragon/more4.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/terragon/more5.png" alt="" className="w-full h-full" />
                        </div>
                        <div className="">
                            <img src="/images/terragon/more6.png" alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#fff] flex flex-col items-center">
                <div className="lg:w-[70%] w-[90%] py-24 flex justify-center items-center">
                    <Button bg="#191C22" color="white" padding="0.7rem 6rem">
                        View More
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default Index;
