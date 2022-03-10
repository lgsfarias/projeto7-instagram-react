import React from 'react';

const Post5 = () => {
    return (
        <div class="post">
            <div class="top">
                <img src="./images/peterquil.png" alt="peter" />
                <p>Senhor das Estrelas</p>
            </div>
            <video controls>
                <source src="./videos/peter-dance.mp4" type="video/mp4" />
                <source src="./videos/peter-dance.ogv" type="video/ogv" />
                Your browser does not support the video tag.
            </video>
            <div class="bottom">
                <div class="icones">
                    <div class="left">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="right">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src="./images/rocket.jpg" alt="r" />
                    <p>
                        Curtido por <b>rocketraccoon</b> e{' '}
                        <b>outras 10.251.598 pessoas</b>
                    </p>
                </div>
                <div class="comentarios">
                    <p>
                        <b>starlord</b> Dancing at night...{' '}
                    </p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <form class="comentar">
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

export default Post5;
