import WorksContainer from "../../components/WorksContainer";
import WorkCard from "../../components/WorkCardWork";

const CaseStudy = () => {
    return (
        <div className="lg:w-[70%] w-[90%]">
            <WorksContainer>
                <WorkCard cardName="Vitse Artwork" cardImg="/images/vitseArt.png" h="608px" />
                <WorkCard cardName="Safam Artwork" cardImg="/images/safamArt.png" h="608px" />
                <WorkCard cardName="Safam Artwork" cardImg="/images/safamArt2.png" h="608px" />
                <WorkCard cardName="Vitse Product Feature" cardImg="/images/vitsePro.png" h="608px" />
            </WorksContainer>
        </div>
    );
};

export default CaseStudy;
