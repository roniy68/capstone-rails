import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav>
                {/* Logo */}
                <div>
                    <h1><a href="#">Vaspa</a></h1>
                </div>

                {/* Nav Links */}
                <ul>
                    <li>
                        <a href="#"><span>Home</span></a>
                    </li>
                    <li>
                        <a href="#"><span>About</span></a>
                    </li>
                    <li>
                        <a href="#"><span>Contact</span></a>
                    </li>
                </ul>
            </nav>

        </div>
    )

}

export default Navbar
