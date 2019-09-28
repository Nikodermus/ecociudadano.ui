import React, { useEffect } from 'react';
import Webcam from 'react-webcam';

const Component = ({ history }) => {
    const nextStep = ({ keyCode }) => {
        if (keyCode === 78) {
            history.push('/trash');
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', nextStep);

        return () => {
            document.removeEventListener('keydown', nextStep);
        };
    }, []);

    return (
        <div>
            <Webcam
                style={{
                    width: '80vmin',
                    height: '80vmin',
                    background: 'black',
                }}
            />
        </div>
    );
};

export default Component;
