import React from 'react';
import alertFile from './here_we_go.mp3';

const AlertHereWeGo = () => (<>
    <iframe
        style={{display: "none"}}
        src={alertFile}
        allow="autoplay" id="audio">
    </iframe>
</>);

export default AlertHereWeGo;
