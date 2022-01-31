import './section1.css';
import SectionImage1 from '../sectionImage1/sectionImage1.js';
import SectionTitle1 from '../sectionTitle1/sectionTitle1.js'; 
import SectionParagraph1 from '../sectionParagraph1/sectionParagraph1.js';


function section1(){
    return (
        <section className="section1">
            <SectionImage1 />
            <SectionTitle1 />
            <SectionParagraph1 />

        </section>
    )
}

export default section1;