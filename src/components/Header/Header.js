import React, {Component} from 'react';
import './Header.css'
import pocketBallImg from '../../images/pocketball.svg'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <img className="header__pocketball" src={pocketBallImg} alt="pocket ball"/>
                <span className="header__logo">PoketMonsters</span>
            </header>
        );
    }
}
