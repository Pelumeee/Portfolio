import WorksContainer from "../../components/WorksContainer";
import WorkCard from "../../components/WorkCardWork";

const CaseStudy = () => {
    return (
        <WorksContainer>
            <WorkCard cardName="Terragon Website Redesign" cardImg="/images/imgOne.png" />
            <WorkCard cardName="MTN Thryve Ads" cardImg="/images/mtn.png" />
            <WorkCard cardName="Vitse Website Design" cardImg="/images/vitse.png" />
            <WorkCard cardName="Terragon Prime" cardImg="/images/terragonPrime.png" />
            <WorkCard cardName="Vitse Procurement" cardImg="/images/vitseProcurement.png" />
            <WorkCard cardName="MARKETING CLOUD" cardImg="/images/marketing.png" />
        </WorksContainer>
    );
};

export default CaseStudy;
