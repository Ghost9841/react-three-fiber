import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Rotate } from './types'
import { useControls } from 'leva';

export default function AnimatedBox() {
    const boxRef = useRef<Rotate>({ rotation: { x: 0, y: 0, z: 0 } });

    const { speed, color } = useControls({
        speed: {
           value: 0.01,
           min: 0.00,
           max: 0.1,
           step: 0.01
        },
        color:'blue'
    })

    useFrame(() => {
        boxRef.current.rotation.y += speed
        boxRef.current.rotation.x += speed
        boxRef.current.rotation.y += speed
    })
    return (
        <mesh ref={boxRef}>
            <boxGeometry args={[2, 2.5, 2]} />

            <axesHelper args={[500]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}