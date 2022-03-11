import React from 'react';
import SuggestedProfile from './SuggestedProfile';

const suggestedProfiles = [
    {
        profilePicture: './images/agnes.jpg',
        profileName: 'Agnes',
        userName: 'agathaharkness',
    },
];

const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className="meu-perfil">
                <img src="./images/vigia.png" alt="vigia" />
                <div>
                    <p className="@">
                        <b>vigia.real</b>
                    </p>
                    <p className="nome">Vigia</p>
                </div>
            </div>
            <div className="sugestoes">
                <p>Sugestões para você</p>
                <p>
                    <b>Ver tudo</b>
                </p>
            </div>
            <div className="sugeridos">
                {suggestedProfiles.map((suggestedProfile) => {
                    return <SuggestedProfile {...suggestedProfile} />;
                })}
                <p className="sobre">
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
