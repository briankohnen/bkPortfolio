import React, { Component } from 'react';
import './style.css';
import NavBurger from '../NavBurger';
import bkLogo from '../../images/bkLogo.png'

class Nav extends Component {

    state = {
        open: false
    }

    handleMenuOpen = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
            
        document.querySelector('.appWrapper').classList.toggle('blur');
        document.querySelector('.navi').classList.toggle('verticalOpen');
    };

    render() {
        return (
            <>
            <nav className='navi'>
            <a href='#about'>
                <img className='smNavLogo' src={bkLogo} alt='Brian Kohnen'></img>
            </a>
                <div className='buttonsWrapper'>
                    <a href='#about'>
                        <div className='navButton un'>About</div>
                    </a>
                    <a href='#portfolio'>
                        <div className='navButton un'>Portfolio</div>
                    </a>
                    <a href='#contact'>
                        <div className='navButton un'>Contact</div>
                    </a>
                    <a href='javascript:void(0);' className='hamburg' onClick={this.handleMenuOpen}>
                        <i className='fa fa-bars iconVisible'></i>
                    </a>
                </div>
            </nav>
            
            {this.state.open ? (
                <NavBurger open='verticalMenu verticalMenuOpen' handleMenuOpen={this.handleMenuOpen} />
                ) : 
                (
                <NavBurger open='verticalMenu' handleMenuOpen={this.handleMenuOpen} />
                )
            }
            </>
        );
    };
};


export default Nav;