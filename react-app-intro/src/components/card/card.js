import './card.css';
import Navbar from '../navbar/navbar.js';
import Title from '../title/title.js';
import Paragraph from '../paragraph/paragraph.js';
import Button from '../button/button.js';

function card(){
    return (
        <section className="card">
            <Navbar />   
            <Title />
            <Paragraph />
            <Button />
        </section>
    )
}

export default card;