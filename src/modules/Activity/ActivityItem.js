import React from 'react';
import PropTypes from 'prop-types';

const ActivityItem = ({comment, category}) => (<>
    <div className="activity-item">
        <div className="comment">{comment.content}</div>
    </div>
</>);

ActivityItem.propTypes = {
    comment: PropTypes.object,
    category: PropTypes.object,
};

export default ActivityItem;
