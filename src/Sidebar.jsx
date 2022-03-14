import React from 'react';
import MyProfile from './MyProfile';
import SuggestedProfile from './SuggestedProfile';

const suggestedProfiles = [
    {
        profilePicture: './images/agnes.jpg',
        profileName: 'Agnes',
        userName: 'agathaharkness',
    },
    {
        profilePicture: './images/rei-do-crime.jpg',
        profileName: 'Rei do Crime',
        userName: 'realreidocrime',
    },
    {
        profilePicture: './images/sharon.png',
        profileName: 'Sharon Carter',
        userName: 'mercadordopoder',
    },
    {
        profilePicture: './images/barao-zemo.png',
        profileName: 'Barão Zemo',
        userName: 'baraozemo',
    },
    {
        profilePicture: './images/aquele-q-permanece.png',
        profileName: 'Aquele que Permanece',
        userName: 'kangoconquistador',
    },
];

const myProfile = {
    profilePicture: './images/vigia.png',
    profileName: 'Vigia',
    userName: 'vigia.real',
};

const Sidebar = () => {
    return (
        <div className="side-bar">
            <MyProfile {...myProfile} />
            <div className="suggestions">
                <p>Sugestões para você</p>
                <p>
                    <b>Ver tudo</b>
                </p>
            </div>
            <div className="suggested">
                {suggestedProfiles.map((suggestedProfile) => {
                    return <SuggestedProfile {...suggestedProfile} />;
                })}
                <p className="about">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </p>
                <p className="copyright">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
};

export default Sidebar;
