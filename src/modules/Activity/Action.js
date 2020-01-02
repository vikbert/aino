import React, {useState} from 'react';

const Action = () => {

    const [action, setAction] = useState(null);

    return (<>
        <div className="action-icons">
            <button className="button" onClick={() => setAction('search')}>
                <span className="button-text">Search</span>
            </button>

            <button className="button" onClick={() => setAction('new')}>
                <span className="button-text">New</span>
            </button>
        </div>
        <div className="action-inputs">
            {action && action === 'search' && (
                <input className={"input"}
                       type="text"
                       placeholder={'search'}/>
            )}

            {action && action === 'new' && (<>
                <input className={"input"}
                       type="text"
                       placeholder={'add new activity'}/>
                <input className={"input"}
                       type="text"
                       placeholder={'add tags'}/>
            </>)}
        </div>
    </>);
};

export default Action;
