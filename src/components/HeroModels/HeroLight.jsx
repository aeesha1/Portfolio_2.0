
import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

// note: +ve x-axis is at the right, +ve y is at the top, +ve z is in front
const HeroLight = () => {

    const directionalLightRef = useRef()

    // Add this line to create the helper
    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')

    const spotLightRef = useRef()

    // Add the helper (visible only in development)
    useHelper(
        spotLightRef,
        THREE.SpotLightHelper,
        'cyan' // Optional color
    )

    return (

        <>
            {/* Dim ambient light to give overall visibility */}
            <ambientLight intensity={0.2} color="#1a2f38" />

            {/* Directional moonlight through window – soft & cool */}
            <spotLight
                // ref={spotLightRef}
                position={[5, 10, -3]} // Centered on ceiling (adjust Y for room height)
                intensity={50}
                angle={Math.PI / 3.5} // 45-degree beam width
                penumbra={0.8} // Soft edges
                decay={2} // Natural falloff
                distance={55} // How far light travels
                color="#a0c8ff"
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />


            <directionalLight
                // ref={directionalLightRef}
                position={[10, 5, -5]}
                intensity={2.5}
                color="#88aaff"
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* Monitor glow - strong and focused */}
            <spotLight
                position={[-0.5, 0.8, 1.3]} // just above and in front of monitor
                rotation={[-Math.PI / 4.5, 0, 0]} // angled downward & to the right
                angle={0.5}       // soft cone
                penumbra={0.6}      // very soft edges
                intensity={100}
                distance={5}     // enough to reach the desk
                color="#ffffff"
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            {/* Fill light (low intensity) from behind the chair to keep some visibility */}
            <directionalLight
                // ref={directionalLightRef}
                position={[0, -1, 5]}
                intensity={2}
                color="#88aaff"
                distance={5}
            />
            <spotLight
                // ref={spotLightRef}
                position={[5, 1, -1]}
                intensity={100}
                angle={0.4} // 45-degree beam width
                penumbra={1} // Soft edges
                
                distance={50} // How far light travels
                color="#aaccee"
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
        </>
    )
}

export default HeroLight