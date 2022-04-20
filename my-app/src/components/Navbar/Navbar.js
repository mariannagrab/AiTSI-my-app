import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    state = { isActive: true }
    handleClick = () => {
        this.setState({ isActive: !this.state.isActive })
    }
    render() {
        return (<header>
            <nav className="NavbarItems">

                <h1 className="navbar-logo">Marianna Grabowska<i className="fa-brands fa-centos"></i></h1>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.url} onClick={this.handleClick}
                                    className={({ isActive }) => (isActive ? "nav-links-active" : "nav-links")} >{item.title}</NavLink></li>
                        )
                    })}

                </ul>
            </nav>
        </header>
        )
    }
}

export default Navbar;