import React from 'react';
import { Biography, Appearance, Abilities, Article, Header, Footer } from './containers';
import { Navbar, Brand, Register } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Biography />
            <Abilities />
            <Appearance />
            <Register />
            <Article />
            <Footer />
        </div>
    )
}

export default App