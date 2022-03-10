import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Main from './Main';

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Main />
                <Sidebar />
                <Footer />
            </div>
        </>
    );
};

export default App;
