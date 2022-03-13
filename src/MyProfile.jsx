import React from 'react';

const MyProfile = (props) => {
    let { profilePicture, profileName, userName } = props;
    return (
        <div className="meu-perfil">
            <img src={profilePicture} alt={profileName} />
            <div>
                <p className="@">
                    <b>{userName}</b>
                </p>
                <p className="nome">{profileName}</p>
            </div>
        </div>
    );
};

export default MyProfile;
