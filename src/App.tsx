
import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {

  return (
    <div id="canvas-container" className='w-[100vw] h-[100vh]'>
      <Canvas camera={{position: [3,3,5]}}>
        <mesh>
          {/* <boxGeometry args={[2,2.5,2]} />
          <sphereGeometry args={[2,2.5,2]} /> */}
          <torusKnotGeometry args={[1.7,0.3,256,256]} />
          <meshPhongMaterial color="gold" />
          <directionalLight position={[2,5,1]}/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
