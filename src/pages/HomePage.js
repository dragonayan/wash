import React from 'react';
import Footer from './Footer';
import Team from './Team';
import About from './About';
import './home.css'
const HomePage = () => {
    return (
        <div className='cover'>

            <About />
            {/* About us section end */}
            {/* Team members */}
            <Team />
            {/* footer section */}
            <Footer />
        </div>
    );
}

export default HomePage;
