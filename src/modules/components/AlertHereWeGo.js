import React from 'react';
import alertFile from '../../data/email.aac';

const AlertHereWeGo = () => (<>
    <iframe
        style={{display: "none"}}
        src={alertFile}
        allow="autoplay" id="audio">
    </iframe>
</>);

export default AlertHereWeGo;
