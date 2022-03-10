import React from 'react';

const Post4 = () => {
    return (
        <div className="post">
            <div className="top">
                <img src="./images/wanda.png" alt="wanda" />
                <p>Wanda</p>
            </div>
            <img src="./images/wanda-family.jpg" alt="wanda-family" />
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
                    <img src="./images/monica.jpg" alt="monicar" />
                    <p>
                        Curtido por <b>monicarambeau</b> e{' '}
                        <b>outras 1.553 pessoas</b>
                    </p>
                </div>
                <div className="comentarios">
                    <p>
                        <b>white.vision</b> A verdadeira felicidade está na
                        própria casa, entre as alegrias da família.{' '}
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

export default Post4;
