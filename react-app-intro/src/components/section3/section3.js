import './section3.css';
import SectionImage3 from '../sectionImage3/sectionImage3.js';
import SectionTitle3 from '../sectionTitle3/sectionTitle3.js'; 
import SectionParagraph3 from '../sectionParagraph3/sectionParagraph3.js';


function section3(){
    return (
        <section className="section3">
            <SectionImage3 />
            <SectionTitle3 />
            <SectionParagraph3 />

        </section>
    )
}

export default section3;