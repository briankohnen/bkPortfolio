import React, { Component } from 'react';
import './navBurger.css';

class NavBurger extends Component {

    render() {
        return (
                <div className={this.props.open}>
                    <a href='javascript:void(0);' className='closeMenu' onClick={this.props.handleMenuOpen}>
                        <i className='fa fa-times iconVisible'></i>
                    </a>
                    <a href='#about'>
                        <div className='burgerButton' onClick={this.props.handleMenuOpen}>About</div>
                    </a>
                    <a href='#portfolio'>
                        <div className='burgerButton' onClick={this.props.handleMenuOpen}>Portfolio</div>
                    </a>
                    <a href='#contact'>
                        <div className='burgerButton' onClick={this.props.handleMenuOpen}>Contact</div>
                    </a>
                </div>
        );
    }
};

export default NavBurger;