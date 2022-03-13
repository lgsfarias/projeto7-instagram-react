import React from 'react';
import Post from './Post';
import Stories from './Stories';

const posts = [
    {
        profilePicture: './images/aranha.png',
        profileName: 'Homem Aranha',
        postImage: './images/selfie-miranha.jpg',
        altPostImage: 'selfie-miranha',
        likesPicture: './images/ned.jpg',
        likesUser: 'nedleeds',
        likesNumber: '101.525',
        comments: [
            {
                user: 'otto_octavius',
                comment: 'Hello Peter',
            },
        ],
    },
    {
        video: true,
        profilePicture: './images/antman.png',
        profileName: 'Homem Formiga',
        postVideo: './videos/antman',
        likesPicture: './images/hope.jpg',
        likesUser: 'vandyne.hope',
        likesNumber: '52.563',
        comments: [],
    },
    {
        profilePicture: './images/ikaris.png',
        profileName: 'Ikaris',
        postImage: './images/ikaris-view.jpg',
        altPostImage: 'ikaris-view',
        likesPicture: './images/kingo.jpg',
        likesUser: 'bollywood_kingo',
        likesNumber: '5.951.483',
        comments: [
            {
                user: 'sersi',
                comment: '&#128525',
            },
        ],
    },
    {
        profilePicture: './images/wanda.png',
        profileName: 'Wanda',
        postImage: './images/wanda-family.jpg',
        altPostImage: 'wanda-family',
        likesPicture: './images/monica.jpg',
        likesUser: 'monicarambeau',
        likesNumber: '1.553',
        comments: [
            {
                user: 'white.vision',
                comment: `A verdadeira felicidade está na
                própria casa, entre as alegrias da família.`,
            },
        ],
    },
    {
        video: true,
        profilePicture: './images/peterquil.png',
        profileName: 'Senhor das Estrelas',
        postVideo: './videos/peter-dance',
        likesPicture: './images/rocket.jpg',
        likesUser: 'rocketraccoon',
        likesNumber: '10.251.598',
        comments: [
            {
                user: 'starlord',
                comment: 'Dancing at night...',
            },
        ],
    },
];

const Main = () => {
    return (
        <main>
            <Stories />
            {posts.map((post) => {
                return <Post {...post} />;
            })}
        </main>
    );
};

export default Main;
