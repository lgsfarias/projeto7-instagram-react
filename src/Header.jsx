import React from 'react';

const Header = () => {
    return (
        <header>
            <div class="desktop-view">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador-vertical"></div>
                    <img src="./images/logo.png" alt="Instagram" />
                </div>
                <div class="pesquisa">
                    <input type="text" id="txtBusca" placeholder="Pesquisar" />
                </div>
                <nav>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </nav>
            </div>
            <div class="mobile-view">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div class="logo">
                    <img src="./images/logo.png" alt="Instagram" />
                </div>
                <nav>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </nav>
            </div>
        </header>
    );
};

export default Header;
