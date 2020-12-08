import React from 'react';
import './Header.css';
import { Navbar } from '../../common';
function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <h1 className="header-logo"><a href="/">TAKASHI MURAKAMI, 村上 隆</a></h1>
                </section>
                <section className="header-top_navbar">
                    <section className="header-top__navigation">
                        <Navbar />
                    </section>
                    <hr className="header-top__separator" />
                </section>
            </section>
            {/* <section className="header-bottom">
                <section className="header-bottom__phone">
                    5047151044
                </section>
                <section className='header-bottom__email'>
                    darcyjdraper@gmail.com
                </section> */}
            {/* </section> */}
        </section>
    )
}

export default Header;
