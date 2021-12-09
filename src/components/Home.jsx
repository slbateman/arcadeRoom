import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <div className="welcome">Welcome</div>
            <div className="to-the">to the</div>
            <div className="arcade-room">Arcade Room</div>
            <Link to="/chat">
                <div className="enter">enter</div>
            </Link>
        </div>
    )
}

export default Home
