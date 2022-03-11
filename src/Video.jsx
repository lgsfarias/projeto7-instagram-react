import React from 'react';

const Video = (props) => {
    const { postVideo } = props;
    return (
        <video controls>
            <source src={`${postVideo}.mp4`} type="video/mp4" />
            <source src={`${postVideo}.ogv`} type="video/ogv" />
            Your browser does not support the video tag.
        </video>
    );
};

export default Video;
