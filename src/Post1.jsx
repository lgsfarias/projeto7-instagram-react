import React from 'react';

const Post1 = () => {
    return (
        <div className="post">
            <div className="top">
                <img src="./images/aranha.png" alt="aranha" />
                <p>Homem Aranha</p>
            </div>
            <img src="./images/selfie-miranha.jpg" alt="selfie-miranha" />
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
                    <img src="./images/ned.jpg" alt="ned" />
                    <p>
                        Curtido por <b>nedleeds</b> e{' '}
                        <b>outras 101.523 pessoas</b>
                    </p>
                </div>
                <div className="comentarios">
                    <p>
                        <b>otto_octavius</b> Hello Peter{' '}
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

export default Post1;
