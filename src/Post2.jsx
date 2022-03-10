import React from 'react';

const Post2 = () => {
    return (
        <div className="post">
            <div className="top">
                <img src="./images/antman.png" alt="antman" />
                <p>Homem Formiga</p>
            </div>
            <video controls>
                <source src="./videos/antman.mp4" type="video/mp4" />
                <source src="./videos/antman.ogv" type="video/ogv" />
                Your browser does not support the video tag.
            </video>
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
                    <img src="./images/hope.jpg" alt="r" />
                    <p>
                        Curtido por <b>vandyne.hope</b> e{' '}
                        <b>outras 52.563 pessoas</b>
                    </p>
                </div>
                <div className="comentarios"></div>
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

export default Post2;
