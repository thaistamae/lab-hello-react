import './sectionconsolidated.css';
import Section1 from '../section1/section1.js';
import Section2 from '../section2/section2.js';
import Section3 from '../section3/section3.js';
import Section4 from '../section4/section4.js';


function sectionconsolidated(){
    return (
        <section className="sectionconsolidated">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </section>
    )
}

export default sectionconsolidated;