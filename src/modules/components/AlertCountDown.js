import React from 'react';
import alertFile from './email.aac';

const AlertCountDown = () => (<>
    <iframe
        style={{display: "none"}}
        src={alertFile}
        allow="autoplay" id="audio">
    </iframe>
</>);

export default AlertCountDown;
