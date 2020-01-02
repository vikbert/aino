import React, {useState} from 'react';

const Action = () => {

    const [action, setAction] = useState(null);

    return (<>
        <div className="action-icons">
            <span className="icon-stopwatch"
                  onClick={() => setAction('search')}/>
            <span className="icon-calendar"
                  onClick={() => setAction('insert')}/>
        </div>
        <div className="action-inputs">
            {action && action === 'search' && (
                <input className={"input"}
                       type="text"
                       placeholder={'search'}/>
            )}

            {action && action === 'insert' && (<>
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
