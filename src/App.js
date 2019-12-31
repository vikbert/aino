import React, {useState} from 'react';
import './App.scss';
import classNames from 'classnames';
import MenuIcon from "./components/MenuIcon";

const pages = ['one', 'two', 'three', 'four'];

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevValue => !prevValue);
    };

    const goToPage = (page) => {
        const wrapper = document.getElementsByClassName('wrapper')[0];
        const sections = document.getElementsByTagName('section');
        for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
            sections[sectionIndex].classList.remove('before', 'after');
            if (sectionIndex > page) {
                sections[sectionIndex].classList.add('after');
            }
        }
        wrapper.classList.remove('menu-open', 'page-one', 'page-two');
        wrapper.classList.add('page-' + pages[page]);
    };

    return (
        <div className={classNames("wrapper", isOpen && "menu-open")}>
            <h1>foobar</h1>
            <MenuIcon clickCallback={toggleMenu}/>
            <section className="one" onClick={() => goToPage(0)}>
                <h1>Profile</h1>
            </section>
            <section className="two" onClick={() => goToPage(1)}>
                <h1>Friends</h1>
            </section>
            <section className="three" onClick={() => goToPage(2)}>
                <h1>Messages</h1>
            </section>
            <section className="four" onClick={() => goToPage(3)}>
                <h1>Settings</h1>
            </section>
        </div>
    );
}

export default App;
