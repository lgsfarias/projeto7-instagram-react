import React from 'react';

const SuggestedProfile = (props) => {
    const { profilePicture, profileName, userName } = props;
    return (
        <div className="perfil">
            <div>
                <img src={profilePicture} alt={profileName} />
                <div>
                    <p className="@">
                        <b>{userName}</b>
                    </p>
                    <p className="nome">{profileName}</p>
                </div>
            </div>
            <p>Seguir</p>
        </div>
    );
};

export default SuggestedProfile;
