import React from 'react';
import Action from "./Action";
import ActivityItem from "./ActivityItem";

const Activity = () => (
    <div className="container module-activity">
        <Action/>
        <div className="activity-list">
            <ActivityItem/>
            <ActivityItem/>
            <ActivityItem/>
            <ActivityItem/>
            <ActivityItem/>
            <ActivityItem/>
        </div>
    </div>
);

export default Activity;
