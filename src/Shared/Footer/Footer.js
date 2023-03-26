import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <small>copyright @  {year}</small>
        </footer>
    );
};

export default Footer;