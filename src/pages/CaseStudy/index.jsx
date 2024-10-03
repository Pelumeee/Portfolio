import WorksContainer from "../../components/WorksContainer";
import WorkCard from "../../components/WorkCardWork";

const CaseStudy = () => {
    return (
        <WorksContainer>
            <WorkCard cardName="Terragon Website Redesign" cardImg="images/imgOne.png" />
            <WorkCard cardName="MTN Thryve Ads" cardImg="images/mtn.png" />
            <WorkCard cardName="Vitse Website Design" cardImg="images/vitse.png" />
            <WorkCard cardName="MARKETING CLOUD" cardDescription="Building a solution that provides marketing automation for target audience engagement." cardImg="images/marketing.png" />
        </WorksContainer>
    );
};

export default CaseStudy;
