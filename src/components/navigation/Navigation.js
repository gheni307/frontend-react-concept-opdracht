import React from 'react';
import './navigation.css'
import {NavLink} from "react-router-dom";

function Navigation(){
    return(
        <section className='nav-sec'>
            <article className='nav-art'>
                <nav className='nav-div'>
                    <NavLink className='nav-link' to="/">home</NavLink>
                </nav>
                <div className='header-div'>
                    <img src='/src/assets/logo.png' alt='logo'/>
                    <h1>Reddit</h1>
                </div>
            </article>
        </section>
    )
}
export default Navigation;