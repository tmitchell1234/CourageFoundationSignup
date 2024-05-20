import React from 'react';
import '../css/components.css';
import logo from '../media/logosmaller.png';

function PageHeader()
{
    const goHome = () => {
        window.location.href = 'https://www.markdivinecouragefoundation.org/';
    };

    return (
        <div className='page-header'>
            <button onClick={goHome}>
                <img src={logo} alt="Courage Foundation Logo" style={{width: 'auto', height: 'calc(100% - 20px)'}}/>
            </button>
        </div>
    )

}

export default PageHeader;