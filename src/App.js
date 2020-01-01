import React, {useState} from 'react';
import './style.scss';
import classNames from 'classnames';
import MenuIcon from "./components/MenuIcon";
import Clock from "./components/Clock";
import StopWatch from "./components/StopWatch";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevValue => !prevValue);
    };

    const goToPage = (pageNumber) => {
        const sections = document.getElementsByTagName('section');

        // "sections" is NOT an array, but HTMLCollection. 
        // It need to be converted to an array
        Array.from(sections).forEach((section, sectionIndex) => {
            section.classList.remove('before', 'after');
            if (sectionIndex > pageNumber) {
                section.classList.add('after');
            }
        });
        
        setIsOpen(false);
    };

    return (
        <div className={classNames("wrapper", isOpen && "menu-open")}>
            <MenuIcon clickCallback={toggleMenu} checked={isOpen}/>
            
            <section className="one" onClick={() => goToPage(0)}>
                <h1>
                    <span className="icon-equalizer"></span>
                </h1>
            </section>
            <section className="two" onClick={() => goToPage(1)}>
                <h1>
                    <span className="icon-stopwatch"></span>
                    <StopWatch />
                </h1>
            </section>
            <section className="three after" onClick={() => goToPage(2)}>
                <h1>
                    <span className="icon-calendar"></span>
                </h1>
            </section>
            <section className="four after" onClick={() => goToPage(3)}>
                <h1>
                    <span className="icon-alarm"></span>
                </h1>
                <Clock/>
                {/*<StopWatch />*/}
            </section>
        </div>
    );
}

export default App;
