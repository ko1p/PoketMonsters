import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Navigation.css'
import {popupOpen} from "../../store/actions/popup";
import backImg from '../../images/back.svg'

class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <ul className="nav__links">
                    <Link to={{pathname: "/"}} className="nav__link"><img className="nav__back" src={backImg} /> На главную</Link>
                    <li className="nav__link" onClick={this.props.popupOpen}>Список покемонов</li>
                </ul>
            </nav>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        popupOpen: () => dispatch(popupOpen()),
    }
}

export default connect(null, mapDispatchToProps)(Navigation)
