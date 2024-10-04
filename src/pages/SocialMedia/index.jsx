import WorksContainer from "../../components/WorksContainer";
import WorkCard from "../../components/WorkCardWork";

const CaseStudy = () => {
    return (
        <WorksContainer>
            <WorkCard cardName="Vitse Artwork" cardImg="/images/vitseArt.png" h="608px"/>
            <WorkCard cardName="Safam Artwork" cardImg="/images/safamArt.png" h="608px"/>
            <WorkCard cardName="Safam Artwork" cardImg="/images/safamArt2.png" h="608px"/>
            <WorkCard cardName="Vitse Product Feature" cardImg="/images/vitsePro.png" h="608px"/>
        </WorksContainer>
    );
};

export default CaseStudy;
