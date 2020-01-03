import React, {useEffect} from 'react';
import anime from "animejs";

let playing = false;
const Social = () => {
    useEffect(() => {
        const card = document.querySelector(".card");

        card.addEventListener('click', function() {
            if (playing) {
                return;
            }

            playing = true;
            anime({
                targets: card,
                scale: [{value: 1}, {value: 1}, {value: 1, delay: 250}],
                rotateY: {value: '+=180', delay: 200},
                easing: 'easeInOutSine',
                duration: 400,
                complete: function(anim) {
                    playing = false;
                },
            });
        });
    });

    return (
        <div className="card-container">
            <div className="card">
                <div className="front">
                    A
                </div>
                <div className="back">
                    B
                </div>
            </div>
        </div>
    );
};

export default Social;
