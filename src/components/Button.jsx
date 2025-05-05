import React from 'react';

const Button = ({ text, className, id, url }) => {
    return (
        <a
            onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(id)

                if (target && id) {
                    const offset = window.innerHeight * 0.15;

                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' })
                }

                if (url) {
                    window.open(url, '_blank')
                }
            }}
            className={`${className ?? ''} cta-wrapper`}>
            <div className='cta-button group'>
                <div className='bg-circle' />
                <p className='text'>{text}</p>
                <div className='arrow-wrapper'>
                    {id == 'cv' ? <img src='/images/download.svg' alt="download" />
                        : <img src='/images/arrow-down.svg' alt="arrow" />
                    }
                    {/* You are here. You want to add a download symbol instead of arrow
                    for cv. Then you are working on hero rtext */}
                </div>
            </div>
        </a>
    )
}

export default Button