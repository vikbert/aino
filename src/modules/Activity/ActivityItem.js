import React from 'react';
import PropTypes from 'prop-types';

const ActivityItem = ({comment, category}) => (<>
    <div className="activity-item">
        <div className="comment">
            <span>{comment.content}</span>
            <div className="category-name">{category.name}</div>
        </div>
        <div className={'category-channel time-display'}>{category.channel}</div>
    </div>
</>);

ActivityItem.propTypes = {
    comment: PropTypes.object,
    category: PropTypes.object,
};

export default ActivityItem;
