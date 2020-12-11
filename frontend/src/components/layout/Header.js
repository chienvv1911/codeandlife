import React from 'react'

const Header = () => {
    return (
        <header className="container">
            <div>
                <h1>CODEANDLIFE BLOG</h1>
            </div>

            <div className="cv-center">
                <input type="text" className="form-control" placeholder="Search articles..." />
            </div>

            <div className="m-l-auto">
                <ul>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
