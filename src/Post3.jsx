import React from 'react';

const Post3 = () => {
    return (
        <div className="post">
            <div className="top">
                <img src="./images/ikaris.png" alt="ikaris" />
                <p>Ikaris</p>
            </div>
            <img src="./images/ikaris-view.jpg" alt="ikaris-view" />
            <div className="bottom">
                <div className="icones">
                    <div className="left">
                        <ion-icon name="heart"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="right">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src="./images/kingo.jpg" alt="k" />
                    <p>
                        Curtido por <b>bollywood_kingo</b> e{' '}
                        <b>outras 5.951.483 pessoas</b>
                    </p>
                </div>
                <div className="comentarios">
                    <p>
                        <b>sersi</b> &#128525{' '}
                    </p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
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

export default Post3;
