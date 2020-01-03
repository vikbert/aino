import React from 'react';
import PropTypes from 'prop-types';

const ActivityItem = ({comment, category}) => (<>
    <div className="activity-item">
        <div className="comment">{comment.content}</div>
        <div className="comment-meta">
            <span className={'category-channel time-display'}>{category.channel}</span>
            <span>{category.name}</span>
        </div>
    </div>
</>);

ActivityItem.propTypes = {
    comment: PropTypes.object,
    category: PropTypes.object,
};

export default ActivityItem;
