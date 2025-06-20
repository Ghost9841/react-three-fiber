
import { Canvas, } from '@react-three/fiber'
import './App.css'
import AnimatedBox from './mesh/animatedbox'

function App() {

  return (
    <div id="canvas-container" className='w-[100vw] h-[100vh]'>
      <Canvas camera={{position: [3,3,5]}}>
        <mesh>
          {/* <boxGeometry args={[2,2.5,2]} />
          <sphereGeometry args={[2,2.5,2]} /> */}
          {/* <torusKnotGeometry args={[1.7,0.3,256,250]} />
          <meshPhongMaterial color="gold" /> */}
          <AnimatedBox />
        </mesh>
          <directionalLight position={[2,5,1]}/>
      </Canvas>
    </div>
  )
}

export default App
