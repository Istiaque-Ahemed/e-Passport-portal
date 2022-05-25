import React from 'react';
import './Hader.css'

const Hader = () => {
    return (
        <div className='frist-hader'>
            <div className='bdLogo'>
                <img className='bd-img' src={'https://i.ibb.co/vZN6Dh7/logo-left-sm.png'} alt="" />
                <p>Government of the <br /> People's Republic of Bangladesh</p>
            </div>
            <div class="passLogo">
                <p>Government of the <br /> People's Republic of Bangladesh</p>
                <img className='pass-img' src={'https://i.ibb.co/NrSPLYD/logo-right-sm.png'} alt="" />
            </div>
        </div>

    );
};

export default Hader;