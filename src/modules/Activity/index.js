import React, {useState} from 'react';
import ActivityItem from "./ActivityItem";
import {categories, comments} from "../../data/cappm";

const Activity = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleClearSearch = () => {
        setSearchInput('');
    };

    const handleOnChange = (e) => {
        setSearchInput(e.currentTarget.value);
    };

    console.log(comments);

    return (
        <div className="container module-activity">
            <div className="action-search">
                <input className={"search-input"}
                       type="text"
                       value={searchInput}
                       onChange={handleOnChange}
                       placeholder={'Search'}/>
                <div className="search-icon" onClick={handleClearSearch}>
                    <span className={searchInput === '' ? "icon-search1" : "icon-cancel"}/>
                </div>
            </div>
            <div className="activity-list">
                {comments
                    .filter((comment) => {
                        return comment.tag.toLowerCase().indexOf(searchInput.toLowerCase()) != -1
                    })
                    .map((comment, index) => (<>
                        <ActivityItem key={index} comment={comment} category={categories[comment.category]}/>
                    </>))}
            </div>
        </div>
    );
};

export default Activity;
