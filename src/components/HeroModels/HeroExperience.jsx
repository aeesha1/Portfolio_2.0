import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import HeroLight from './HeroLight'
import { Room } from './Room3'




const HeroExperience = () => {
    const isTablet = useMediaQuery(
        { query: '(max-width: 1270px)' }
    )
    const isMobile = useMediaQuery(
        { query: '(max-width: 915px)' }
    )

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }} shadows>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <HeroLight />

            <group
                scale={isMobile ? 0.04 : isTablet ? 0.055 : 0.05}
                position={isMobile ? [0.4, -1, 0] : isTablet ? [2, -2, 0] : [1, -2.5, 0]}
                rotation={isMobile ? [Math.PI / 60, -Math.PI / 6.2, 0] : [0, -Math.PI / 5, 0]}
            >

                <Room />
            </group>
        </Canvas>
    )
}

export default HeroExperience