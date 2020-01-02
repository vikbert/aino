import React, {useState} from 'react';
import './style.scss';
import classNames from 'classnames';
import Clock from "./modules/Clock";
import StopWatch from "./modules/StopWatch";
import Activity from "./modules/Activity";

const pages = ["one", "two", "three", "four"];

function App() {
    const [isOverview, setIsOverview] = useState(false);
    const [warning, setWarning] = useState(false);

    const toggleMenu = () => {
        setIsOverview(prevValue => !prevValue);
        document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
    };

    const togglePageBgColor = () => {
        setWarning((prevWarning) => !prevWarning);
    };

    const goToPage = (pageNumber) => {
        setIsOverview(false);

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

    const handleOnClickHeader = (pageNumber) => {
        if (isOverview) {
            return goToPage(pageNumber);
        }

        return toggleMenu();
    };

    return (
        <div className={classNames("wrapper")}>
            <section className="one after">
                <h1 onClick={() => handleOnClickHeader(0)}>
                    <span className="icon-equalizer"/>
                </h1>
            </section>

            <section className={classNames("two", warning && "default")}>
                <h1 onClick={() => handleOnClickHeader(1)}>
                    <span className="icon-stopwatch"/>
                </h1>
                <StopWatch toggleBgColor={togglePageBgColor}/>
            </section>

            <section className="three">
                <h1 onClick={() => handleOnClickHeader(2)}>
                    <span className="icon-calendar"/>
                </h1>
                <Activity/>
            </section>

            <section className="four">
                <h1 onClick={() => handleOnClickHeader(3)}>
                    <span className="icon-alarm"/>
                </h1>
                <Clock/>
            </section>
        </div>
    );
}

export default App;
