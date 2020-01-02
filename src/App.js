import React, {useState} from 'react';
import './style.scss';
import classNames from 'classnames';
import MenuIcon from "./components/MenuIcon";
import Clock from "./components/Clock";
import StopWatch from "./components/StopWatch";

const pages = ["one", "two", "three", "four"];

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [warning, setWarning] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevValue => !prevValue);
        document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
    };

    const togglePageBgColor = () => {
        setWarning((prevWarning) => !prevWarning);
    };

    const goToPage = (pageNumber) => {
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

        console.log(wrapper.classList);
        wrapper.classList.remove('menu-open','page-one','page-two');
        console.log(wrapper.classList);
        wrapper.classList.add('page-' + pages[pageNumber]);
        console.log(wrapper.classList);
    };

    return (
        <div className={classNames("wrapper")}>
            <MenuIcon clickCallback={toggleMenu} checked={isOpen}/>

            <section className="one" onClick={() => goToPage(0)}>
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
            
            <section className="three" onClick={() => goToPage(2)}>
                <h1>
                    <span className="icon-calendar"/>
                </h1>
            </section>
            
            <section className="four" onClick={() => goToPage(3)}>
                <h1>
                    <span className="icon-alarm"/>
                </h1>
                <Clock/>
            </section>
        </div>
    );
}

export default App;
