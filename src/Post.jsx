import React from 'react';
import Comment from './Comment';
import Img from './Img';
import Video from './Video';

const Post = (props) => {
    const {
        video,
        profilePicture,
        profileName,
        postImage,
        altPostImage,
        postVideo,
        likesPicture,
        likesUser,
        likesNumber,
        comments,
    } = props;

    return (
        <div className="post">
            <div className="top">
                <img src={profilePicture} alt={profileName} />
                <p>{profileName}</p>
            </div>
            {video ? (
                <Video postVideo={postVideo} />
            ) : (
                <Img postImage={postImage} altPostImage={altPostImage} />
            )}
            <div className="bottom">
                <div className="icones">
                    <div className="left">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="right">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={likesPicture} alt={likesUser} />
                    <p>
                        Curtido por <b>{likesUser}</b> e{' '}
                        <b>outras {likesNumber} pessoas</b>
                    </p>
                </div>
                {comments.map((comment) => {
                    return <Comment {...comment} />;
                })}
                <form className="comentar">
                    <input
                        type="text"
                        placeholder="Adicione um comentário..."
                    />
                    <input type="button" value="Publicar" />
                </form>
            </div>
        </div>
    );
};

export default Post;
