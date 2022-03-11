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
