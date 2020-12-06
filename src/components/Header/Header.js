import React from 'react'
import './Header.css'
import pocketBallImg from '../../images/pocketball.svg'

export default function Header() {
    return (
        <header className="header">
            <img className="header__pocketball" src={pocketBallImg} alt="pocket ball"/>
            <span className="header__logo">PoketMonsters</span>
        </header>
    );
}
