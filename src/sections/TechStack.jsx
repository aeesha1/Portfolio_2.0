
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const TechStack = () => {
    // Animate the tech cards in the skills section
    // useGSAP(() => {
    //     gsap.fromTo(
    //         ".tech-card",
    //         {
    //             // Initial values
    //             y: 50, // Move the cards down by 50px
    //             opacity: 0, // Set the opacity to 0
    //         },
    //         {
    //             // Final values
    //             y: 0, // Move the cards back to the top
    //             opacity: 1, // Set the opacity to 1
    //             duration: 1, // Duration of the animation
    //             ease: "power2.inOut", // Ease of the animation
    //             stagger: 0.2, // Stagger the animation by 0.2 seconds
    //             scrollTrigger: {
    //                 trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
    //                 start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
    //             },
    //         }
    //     );
    // });

    return (
        <div id="skills" className="section-padding">
            <TitleHeader
                title="My Tech Stack & Skills"
                sub="🤝 What I Bring to the Table"
            />
            <div className="h-full px-0 relative -mr-8 mt-14 xl:mr-0">
                <div className="gradient-edge" />
                <div className='gradient-edge' />

                <div className="marquee h-96">
                    <div className="marquee-box h-full md:gap-12 gap-5">
                        {techStackImgs.map((techStackIcon, index) => (
                            <div
                                key={index}
                                className="card-border overflow-hidden group xl:rounded-full rounded-4xl"
                            >
                                <div className="tech-card-content py-10">
                                    <div className="tech-icon-wrapper">
                                        <img src={techStackIcon.imgPath} alt="" className="w-28 h-28 md:w-36 md:h-36" />
                                    </div>
                                    <div className="w-36">
                                        <p className="w-full p-0">{techStackIcon.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

            </div>
        </div>
    );
};

export default TechStack;