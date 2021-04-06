import React, { useState } from 'react';
import './navoverlay.css';

const NavOverlay = (props) => {

    const [navState, setNavState] = useState({spawn: false, x: 0, y: 0, title: '', tinyOpen: false});

    const spawnText = (bool, title) => {
        window.onmousemove = e => {
            let x = e.clientX - 75;
            let y = e.clientY - 50;
            setNavState({spawn: bool, x: x, y: y, title: title});
        };
    };

    const toggleTiny = () => {
        setNavState({tinyOpen: !navState.tinyOpen});
    };

    const globalAndTiny = (globalToSet) => {
        setNavState({tinyOpen: !navState.tinyOpen});
        props.handleGlobalState('activePage', globalToSet);
    };

    return (
        <div className='mainOverlay'>
            
            <div
            onMouseOver={()=>spawnText(true, 'about')} onMouseOut={()=>spawnText(false)}
            onClick={()=>props.handleGlobalState('activePage', 'about')} 
            style={props.activePage !== 'about' ? {animation: 'fadein 2000ms'} : {animation: `${props.activePage} 1500ms forwards`}}>
            </div>
            
            <div
            onMouseOver={()=>spawnText(true, 'portfolio')} onMouseOut={()=>spawnText(false)}
            onClick={()=>props.handleGlobalState('activePage', 'portfolio')} 
            style={props.activePage !== 'portfolio' ? {animation: 'fadein 2000ms'} : {animation: `${props.activePage} 1500ms forwards`}}>
            </div>
            
            <div
            onMouseOver={()=>spawnText(true, 'contact')} onMouseOut={()=>spawnText(false)}
            onClick={()=>props.handleGlobalState('activePage', 'contact')} 
            style={props.activePage !== 'contact' ? {animation: 'fadein 2000ms'} : {animation: `${props.activePage} 1500ms forwards`}}>
            </div>
            
            <div
            onMouseOver={()=>spawnText(true, 'home')} onMouseOut={()=>spawnText(false)}
            onClick={()=>props.handleGlobalState('activePage', 'home')} 
            style={props.activePage !== 'home' ? {animation: 'fadein 2000ms'} : {animation: `${props.activePage} 1500ms forwards`}}>
            </div>

            <aside className={`spawnedText ${navState.spawn ? 'showSpawn' : ''}`} style={{left: `${navState.x}px`, top: `${navState.y}px`}}>{navState.title}</aside>

            <aside className='tinyMenu'>
                <p onClick={toggleTiny} style={navState.tinyOpen === false ? {color: 'white', background: 'transparent'} : {color: 'rgb(17,17,17)', background: 'white'}}>O</p>
                <ul className={navState.tinyOpen === false ? '' : 'showTinyMenu'}>
                    <li onClick={()=>globalAndTiny('about')} >about</li>
                    <li onClick={()=>globalAndTiny('portfolio')} >portfolio</li>
                    <li onClick={()=>globalAndTiny('contact')} >contact</li>
                </ul>
            </aside>
            
        </div>
    );
};

export default NavOverlay;