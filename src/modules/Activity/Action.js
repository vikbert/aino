import React, {useState} from 'react';

const Action = () => {
    const [searchInput, setSearchInput] = useState('');

    const cancelSearchInput = () => {
        setSearchInput('');
    };

    const handleOnChange = (e) => {
        setSearchInput(e.currentTarget.value);
    };

    return (<>
        <div className="action-search">
            <input className={"search-input"}
                   type="text"
                   value={searchInput}
                   onChange={handleOnChange}
                   placeholder={'Search'}/>
            <div className="search-icon" onClick={cancelSearchInput}>
                <span className={searchInput === '' ? "icon-search1":  "icon-cancel"}/>
            </div>
        </div>
    </>);
};

export default Action;
