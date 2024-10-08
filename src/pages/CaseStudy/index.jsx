import WorksContainer from "../../components/WorksContainer";
import WorkCard from "../../components/WorkCardWork";

const CaseStudy = () => {
    return (
        <div className="lg:w-[70%] w-[90%]">
            <WorksContainer>
                <WorkCard cardName="Terragon Website Redesign" cardImg="/images/imgOne.png" path="/work/terragon" />
                <WorkCard cardName="MTN Thryve Ads" cardImg="/images/mtn.png" path="/work/MTN" />
                <WorkCard cardName="Vitse Website Design" cardImg="/images/vitse.png" path="/work/vitse" />
                <WorkCard cardName="Terragon Prime" cardImg="/images/terragonPrime.png" />
                <WorkCard cardName="Vitse Procurement" cardImg="/images/vitseProcurement.png" />
                <WorkCard cardName="MARKETING CLOUD" cardImg="/images/marketing.png" path="/work/cloud-marketing" />
            </WorksContainer>
        </div>
    );
};

export default CaseStudy;
