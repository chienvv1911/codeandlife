import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="container">
            <div>
                <Link to="/">CODEANDLIFE BLOG</Link>
            </div>

            <div className="cv-center">
                <input type="text" className="form-control" placeholder="Search articles..." />
            </div>

            <div className="m-l-auto">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
