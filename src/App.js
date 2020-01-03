import React, {useState} from 'react';
import './main.scss';
import classNames from 'classnames';
import Clock from "./modules/Clock";
import StopWatch from "./modules/StopWatch";
import Fitness from "./modules/Fitness";
import Activity from "./modules/Activity";
import alertFile from './data/email.aac';

const pages = ["one", "two", "three", "four"];

function App() {
    const [isOverview, setIsOverview] = useState(false);
    const [warning, setWarning] = useState(false);

    const toggleMenu = () => {
        setIsOverview(prevValue => !prevValue);
        document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
    };

    const togglePageBgColor = (reset = null) => {
        if (reset) {
            setWarning(false);
            return;
        }

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

    const initAudioFile = () => {
        window.gold = new Audio(alertFile);
        const nothing = new Audio("http://touchbasicapp.com/nothing.wav");

        const tapped = function() {
            nothing.play();
            nothing.currentTime = 0;

        };
        document.body.addEventListener('touchstart', tapped, false);
        document.body.addEventListener('click', tapped, false);

        // Check if audio starts already unlocked by playing a blank wav.
        nothing.play().then(function() {
            console.log("Audio started unlocked!");
        }).catch(function() {
            console.log("Audio started locked :(");
        });
    };

    const handleOnClickHeader = (pageNumber) => {
        initAudioFile();

        if (isOverview) {
            return goToPage(pageNumber);
        }

        return toggleMenu();
    };

    return (
        <div className={classNames("wrapper", isOverview && "menu-open")}>
            <section className="one">
                <h1 onClick={() => handleOnClickHeader(0)}>
                    <span className="icon-accessibility"/>
                </h1>
                <Fitness/>
            </section>

            <section className={classNames("two after", warning && "default")}>
                <h1 onClick={() => handleOnClickHeader(1)}>
                    <span className="icon-stopwatch"/>
                </h1>
                <StopWatch toggleBgColor={togglePageBgColor}/>
            </section>

            <section className="three after">
                <h1 onClick={() => handleOnClickHeader(2)}>
                    <span className="icon-calendar"/>
                </h1>
                <Activity/>
            </section>

            <section className="four after">
                <h1 onClick={() => handleOnClickHeader(3)}>
                    <span className="icon-alarm"/>
                </h1>
                <Clock/>
            </section>
        </div>
    );
}

export default App;
