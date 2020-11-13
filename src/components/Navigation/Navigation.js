import React from 'react'
import './Navigation.css'

export default function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__links">
                <li className="nav__link">На главную</li>
                <li className="nav__link">Список всех покемонов</li>
            </ul>
        </nav>
    )
}
