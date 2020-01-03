import React from 'react';
import alertFile from './count_down.mp3';

const AlertCountDown = () => (<>
    <iframe
        style={{display: "none"}}
        src={alertFile}
        allow="autoplay" id="audio">
    </iframe>
</>);

export default AlertCountDown;
