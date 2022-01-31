import './section2.css';
import SectionImage2 from '../sectionImage2/sectionImage2.js';
import SectionTitle2 from '../sectionTitle2/sectionTitle2.js'; 
import SectionParagraph2 from '../sectionParagraph2/sectionParagraph2.js';


function section2(){
    return (
        <section className="section2">
            <SectionImage2 />
            <SectionTitle2 />
            <SectionParagraph2 />

        </section>
    )
}

export default section2;