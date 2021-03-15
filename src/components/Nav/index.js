import React, { Component } from 'react';
import './style.css';
import NavBurger from '../NavBurger';

class Nav extends Component {

    state = {
        open: false,
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
                <div className='buttonsWrapper'>

                    {this.props.width < 1000 ?
                        <a href='javascript:void(0);' className='hamburg' onClick={this.handleMenuOpen}>
                            <i className='fa fa-bars iconVisible'></i>
                        </a>
                    :
                    <>
                        <div className='navButton un'><a href='#about'>About</a></div>
                        <div className='navButton un'><a href='#portfolio'>Portfolio</a></div>
                        <div className='navButton un'><a href='#contact'>Contact</a></div>
                    </>
                    }
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