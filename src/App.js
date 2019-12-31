import React, {useState} from 'react';
import './App.scss';
import classNames from 'classnames';
import MenuIcon from "./components/MenuIcon";

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
                <h1>Clock</h1>
            </section>
            <section className="two" onClick={() => goToPage(1)}>
                <h1>Timer</h1>
            </section>
            <section className="three" onClick={() => goToPage(2)}>
                <h1>Clarity</h1>
            </section>
            <section className="four" onClick={() => goToPage(3)}>
                <h1>Settings</h1>
            </section>
        </div>
    );
}

export default App;
