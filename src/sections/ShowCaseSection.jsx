import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import TitleHeader from '../components/TitleHeader';


gsap.registerPlugin(ScrollTrigger);
const ShowCaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)



    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom -=100'
                    }
                }


            )
        })

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, [])


    return (
        <section id="work" ref={sectionRef} className='app-showcase section-padding'>
            <div className='w-full'>
                <TitleHeader title="Project Showcase" sub='⚡My Selected Projects' />
                <div className='showcaselayout mt-14'>
                    {/* Left */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src='/images/project1.jpeg' alt='ride' />
                        </div>
                        <div className="text-content">
                            <h2>Student Management Platform</h2>
                            <p className="text-white-50 md:text-xl">
                                An integrated system for managing schedules, tracking CGPA, and facilitating peer-to-peer resource sharing where students both contribute
                                and access study materials through a unified platform.
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className='image-wrapper bg-[#dbfaff]'>
                                <img src="/images/project2.jpeg" alt="Ecom" />
                            </div>
                            <h2>E-commerce Platform</h2>
                        </div>
                        <div className="project" ref={project3Ref} >
                            <div className='image-wrapper bg-[#c7e7f8]'>
                                <img src="/images/project3.jpeg" alt="Connect Four" />
                            </div>
                            <h2>Connect Four Game</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCaseSection