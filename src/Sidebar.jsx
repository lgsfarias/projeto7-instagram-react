import React from 'react';

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
                <div className="perfil">
                    <div>
                        <img src="./images/agnes.jpg" alt="perfil" />
                        <div>
                            <p className="@">
                                <b>agathaharkness</b>
                            </p>
                            <p className="nome">Agnes</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
                <div className="perfil">
                    <div>
                        <img src="./images/rei-do-crime.jpg" alt="perfil" />
                        <div>
                            <p className="@">
                                <b>realreidocrime</b>
                            </p>
                            <p className="nome">Rei do Crime</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
                <div className="perfil">
                    <div>
                        <img src="./images/sharon.png" alt="perfil" />
                        <div>
                            <p className="@">
                                <b>mercadordopoder</b>
                            </p>
                            <p className="nome">Sharon Carter</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
                <div className="perfil">
                    <div>
                        <img src="./images/barao-zemo.png" alt="perfil" />
                        <div>
                            <p className="@">
                                <b>baraozemo</b>
                            </p>
                            <p className="nome">Barão Zemo</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
                <div className="perfil">
                    <div>
                        <img
                            src="./images/aquele-q-permanece.png"
                            alt="perfil"
                        />
                        <div>
                            <p className="@">
                                <b>kangoconquistador</b>
                            </p>
                            <p className="nome">Aquele que Permanece</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
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
