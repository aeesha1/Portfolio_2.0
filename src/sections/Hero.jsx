import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Button from '../components/button'
import HeroExperience from '../components/HeroModels/HeroExperience'


const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            }
        )
    })
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className='absolute top-0 -left-0 z-10 w-screen h-screen'>
                <img src="images/bg_night.jpg" alt="background" className="opacity-25 w-full h-full" />
            </div>


            <div className='hero-layout'>
                {/*LEFT: HERO CONTENT */}
                <header className='flex flex-col justify-center items-center lg:items-start md:w-1/3 w-screen md:px-20 px-10'>
                    <div className='flex flex-col gap-5'>
                        <div className='text-center lg:text-start'>
                            <p className='text-white-50 md:text-2xl relative z-10 pointer-events-none'>
                                Hello there,
                            </p>
                            <h1 className='text-blue-300 font-semibold md:text-[60px] text-[30px] relative z-10'>I'm Aisha</h1>
                            <p className='text-white-50 md:text-xl relative z-10 py-5 px-5 md:px-0 pointer-events-none'>
                                I am a software developer from Nigeria. I love using code to create practical solutions that solve real-world problems.
                            </p>
                        </div>
                        <div className='flex gap-5 items-center justify-center xl:justify-start'>
                            <Button className="md:w-48 md:h-16 w-40 h-12" id="work" text="See my Work" />
                            <Button className="md:w-50 md:h-16 w-43 h-12" id='cv' url="https://drive.google.com/file/d/1UhhQv9jaI6F2mC7BRc4f36GpuQAGzxzT/view?usp=sharing" text="Download CV" />
                        </div>
                    </div>


                </header>
                {/*RIGHT: 3D MODEL  */}
                <figure className='relative flex justify-center items-start h-96 xl:h-[80%] md:w-3/4 w-full'>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>

        </section>
    )
}

export default Hero