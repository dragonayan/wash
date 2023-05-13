
import * as React from 'react';

import './about.css'
const About = () => {
    return (
        <div className='about'>
            <div class="container">
                <h2 className='heading'>We Are Quality Washing Machine Manufacturer</h2>

                <div className="card img-fluid" style={{ width: '500px' }}>
                    <img className="card-img-top" />
                    <div className="card-img-overlay">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <a href="/register" className="btn btn-primary">Start Here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
