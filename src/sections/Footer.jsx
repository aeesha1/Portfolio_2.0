import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center md:items-start">
                    <a href='https://drive.google.com/file/d/1UhhQv9jaI6F2mC7BRc4f36GpuQAGzxzT/view?usp=sharing' target="_blank" rel="noopener noreferrer">Download my Resume</a>
                </div>
                <div className="socials">
                    {socialImgs.map((social, index) => (
                        <a className='icon' key={index} href={social.url}
                            target="_blank" rel="noopener noreferrer">
                            <img src={social.imgPath} />
                        </a>
                    ))}

                </div>
                <div className="flex flex-col justify-center">
                    <p className='text-center md:text-end'>
                        © {new Date().getFullYear()} | Aisha. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer