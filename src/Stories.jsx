import React from 'react';
import Story from './Story';

const stories = [
    {
        profilePicture: './images/gaviao.png',
        profileName: 'Gavião Arqueiro',
    },
    {
        profilePicture: './images/hulk.png',
        profileName: 'Hulk',
    },
    {
        profilePicture: './images/ikaris.png',
        profileName: 'Ikaris',
    },
    {
        profilePicture: './images/shang-shi.png',
        profileName: 'Shang-shi',
    },
    {
        profilePicture: './images/wanda.png',
        profileName: 'Wanda',
    },
    {
        profilePicture: './images/falcao.png',
        profileName: 'Capitão América',
    },
    {
        profilePicture: './images/loki.png',
        profileName: 'Loki',
    },
    {
        profilePicture: './images/aranha.png',
        profileName: 'Homem Aranha',
    },
    {
        profilePicture: './images/antman.png',
        profileName: 'Homem Formiga',
    },
    {
        profilePicture: './images/peterquil.png',
        profileName: 'Senhor das Estrelas',
    },
];

const Stories = () => {
    return (
        <div class="story-box">
            <img class="arrow" src="./images/Vector.png" alt="setinha" />
            {stories.map((story) => {
                return <Story {...story} />;
            })}
        </div>
    );
};

export default Stories;
