import React from 'react'
import './team.css'
const Team = () => {
    return (
        <div>
            <h1 className='team' style={{ textAlign: 'center' }} >
                OUR VISION
            </h1>
            <div class="card1" style={{ width: '18rem' }}>
                <h2>Save time and Money</h2>
                <br />
                <p >With the help of automation we can save time and physical effort</p>
            </div>
            <div class="card2" style={{ width: '18rem' }}>
                <h2 >Better data management</h2>
                <br />
                <p>Automation can improve data collection and analysis</p>
            </div>
            <div class="card2" style={{ width: '18rem' }}>
                <h2 >Improved accuracy</h2>
                <br />
                <p>Automation can reduce errors and inconsistencies </p>
            </div>
            <div class="card1" style={{ width: '18rem' }}>
                <h2 >Better scalability</h2>
                <br />
                <p>Automation can make it easier to scale </p>
            </div>

        </div>



    )
}

export default Team
