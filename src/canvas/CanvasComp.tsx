
import { Canvas, } from '@react-three/fiber'
import AnimatedBox from '../mesh/animatedbox'
import { OrbitControls, useHelper } from '@react-three/drei'
import { SpotLight, SpotLightHelper } from 'three'
import { useRef } from 'react'
// import { FirstPersonControls } from '@react-three/drei'
// import { GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei';



function SpotsLightHelper() {
  const light = useRef<SpotLight>(null!);

  useHelper(light, SpotLightHelper, 'orange')

  return (

    <spotLight
      ref={light}
      intensity={80}
      color='0xfcfcfc'
      position={[2, 5, 1]} />
  )
}


const CanvasComp = () => {
  const spotlight = new SpotLight();
  spotlight.color.set('orange');

  return (
    <Canvas>
      <mesh>
        {/* <boxGeometry args={[2,2.5,2]} />
          <sphereGeometry args={[2,2.5,2]} /> */}
        {/* <torusKnotGeometry args={[1.7,0.3,256,250]} />
          <meshPhongMaterial color="gold" /> */}
        {/* <FirstPersonControls/> */}
        {/* <axesHelper args={[500]}/> */}
        {/* <GizmoHelper alignment='bottom-left'>
            <GizmoViewcube/>
            <GizmoViewport/>
          </GizmoHelper> */}
        <gridHelper args={[20, 20, 'red', 'blue']} />
        <OrbitControls />
        <AnimatedBox />
      </mesh>
      {/* <ambientLight color='gold' /> */}
      {/* <directionalLight position={[2,5,1]}/> */}
      <SpotsLightHelper />
    </Canvas>
  )
}

export default CanvasComp