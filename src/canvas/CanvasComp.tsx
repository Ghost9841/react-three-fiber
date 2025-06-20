
import { Canvas, } from '@react-three/fiber'
import AnimatedBox from '../mesh/animatedbox'
import { GizmoHelper, GizmoViewcube, GizmoViewport, OrbitControls } from '@react-three/drei'
// import { FirstPersonControls } from '@react-three/drei'

type Props = {}

const CanvasComp = (props: Props) => {
  return (
      <Canvas camera={{position: [3,3,5]}}>
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
          {/* <gridHelper args={[20,20,'red','blue']}/> */}
          <OrbitControls/>
          <AnimatedBox/>
        </mesh>
          <directionalLight position={[2,5,1]}/>
      </Canvas>
  )
}

export default CanvasComp