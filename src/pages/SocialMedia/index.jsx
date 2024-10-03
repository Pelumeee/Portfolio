import WorksContainer from "../../components/WorksContainer";
import WorkCard from "../../components/WorkCardWork";

const CaseStudy = () => {
    return (
        <WorksContainer>
            <WorkCard cardName="Terragon Website Redesign" cardImg="images/imgOne.png" />
            <WorkCard cardName="MTN Thryve Ads" cardImg="images/mtn.png" />
        </WorksContainer>
    );
};

export default CaseStudy;
