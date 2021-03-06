import React from 'react';

const Story = (props) => {
    const { profilePicture, profileName } = props;
    return (
        <div class="story">
            <div class="box">
                <img src={profilePicture} alt={profileName} />
            </div>
            <p>{profileName}</p>
        </div>
    );
};

export default Story;
