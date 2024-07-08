import React, { ReactNode } from 'react';

// interface navbarItems{
//     children: ReactNode;
// }


export default function Navbar(){
    return <div className='bg-dark-two place-content-evenly'>
       <div className='logo-nd-nav-options flex place-content-evenly'>
        <img src={process.env.PUBLIC_URL + '/Logotype&LogoMark.png'} alt="logotype and logomark" />
        <div className='text-white font-Exo font-medium text-base flex place-content-evenly'>
            <p>RACKETS</p>
            <p>BAGS</p>
            <p>APPAREL</p>
            <p>BALLS</p>
            <p>GEARS</p>
        </div>

        <div className='icons flex place-content-around'>
        <img src='/public/user.png alt="user-icon"' alt='user-icon' />
        <img src={process.env.PUBLIC_URL + '/public/user.png'} alt="user-icon" />
        <img src={process.env.PUBLIC_URL + '/public/search.png'} alt="search-icon" />
        <img src={process.env.PUBLIC_URL + '/public/shopping-bag-03.png'} alt="shopping-bag-icon" />
        </div>

        </div>
    </div>
}