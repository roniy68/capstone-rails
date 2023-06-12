import React from 'react'

const Main = () => {
    return (
        <main>
            <div>
                <a href="#"> Log in </a>
                <a href="#"> Sign Up </a>
            </div>

            <header>
                <h2> Exxample Header</h2>
                <h3> Example Header 2</h3>
            </header>

            <div>
                <h4>Latest </h4>
                <div>

                    {/* Card Goes Here */}
                    <div>
                        <img src="" alt="" />
                        <div>
                            <span>span 1</span>
                            <span>span 2</span>
                        </div>
                    </div>
                </div>
                <h4>  Most Popular </h4>

                <div>
                    {/* Card goes Here */}
                </div>


            </div>
        </main>

    )
}

export default Main
