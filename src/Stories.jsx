import React from 'react';
import Story from './Story';

const stories = [
    {
        profilePicture: './images/gaviao.png',
        profileName: 'Gavião Arqueiro',
    },
];

const Stories = () => {
    return (
        <div class="caixa-de-stories">
            <img class="setinha" src="./images/Vector.png" alt="setinha" />
            {stories.map((story) => {
                return <Story {...story} />;
            })}
        </div>
    );
};

export default Stories;
