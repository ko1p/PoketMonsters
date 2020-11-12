import React, {Component} from 'react';
import './Header.css'
import poketBallImg from '../../images/poketball.svg'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <img className="header__poketball" src={poketBallImg} alt="poket ball"/>
                <span className="header__logo">PoketMonsters</span>
            </header>
        );
    }
}
