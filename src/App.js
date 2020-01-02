import React, {useState} from 'react';
import './style.scss';
import classNames from 'classnames';
import Clock from "./modules/Clock";
import StopWatch from "./modules/StopWatch";
import Activity from "./modules/Activity";

const pages = ["one", "two", "three", "four"];

function App() {
    const [isOpen, setIsOpen] = useState(true);
    const [warning, setWarning] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevValue => !prevValue);
        document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
    };

    const togglePageBgColor = () => {
        setWarning((prevWarning) => !prevWarning);
    };

    const goToPage = (pageNumber) => {
        if (!isOpen) {
            return toggleMenu();
        }

        setIsOpen(false);

        const sections = document.getElementsByTagName('section');
        const wrapper = document.getElementsByClassName('wrapper')[0];

        // "sections" is NOT an array, but HTMLCollection. 
        // It need to be converted to an array
        Array.from(sections).forEach((section, sectionIndex) => {
            section.classList.remove('before', 'after');
            if (sectionIndex > pageNumber) {
                section.classList.add('after');
            }
        });

        wrapper.classList.remove('menu-open');
        pages.forEach((item) => {
            wrapper.classList.remove('page-' + item);
        });
        
        wrapper.classList.add('page-' + pages[pageNumber]);
    };

    return (
        <div className={classNames("wrapper menu-open")}>
            <section className="one after"
                     onClick={() => goToPage(0)}>
                <h1>
                    <span className="icon-equalizer"/>
                </h1>
            </section>

            <section className={classNames("two", warning && "default")}
                     onClick={() => goToPage(1)}>
                <h1>
                    <span className="icon-stopwatch"/>
                </h1>
                <StopWatch toggleBgColor={togglePageBgColor}/>
            </section>

            <section className="three"
                     onClick={() => goToPage(2)}>
                <h1>
                    <span className="icon-calendar"/>
                </h1>
                <Activity/>
            </section>

            <section className="four"
                     onClick={() => goToPage(3)}>
                <h1>
                    <span className="icon-alarm"/>
                </h1>
                <Clock/>
            </section>
        </div>
    );
}

export default App;
