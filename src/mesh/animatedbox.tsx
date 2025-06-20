import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Rotate } from './data'

export default function AnimatedBox(){
  const boxRef  = useRef<Rotate>({ rotation: { x: 0, y: 0, z: 0 } });
  useFrame(() => {
    boxRef.current.rotation.y += 0.01
    boxRef.current.rotation.x += 0.01
    boxRef.current.rotation.y += 0.01
  })
  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2,2.5,2]} />
      <meshStandardMaterial color="gold" />
    </mesh>
  )
}