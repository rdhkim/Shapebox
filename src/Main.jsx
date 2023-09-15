import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Cube, Sphere, Tetrahedron, FloorPlane } from './Shapes'
import { OrbitControls, useCursor } from '@react-three/drei'

export const Main = () => {
    const [hovered, hover] = useState(false)
    // useCursor(hovered)

    return (
        <div id="canvas-container" style={{
            height: '100%',
            width: '100%'
        }}>
            <Canvas
                style={{
                    background: '#F5F5DC',
                    height: '75%'
                }}
                camera={{
                    position: [0, 0, 5]
                }}
            >
                <Cube
                    onPointerOver={() => hover(true)}
                    onPointerOut={() => hover(false)}
                />
                <Sphere
                    onPointerOver={() => hover(true)}
                    onPointerOut={() => hover(false)}
                />
                <Tetrahedron
                    onPointerOver={() => hover(true)}
                    onPointerOut={() => hover(false)}
                />
                <FloorPlane />
                <OrbitControls enabled={!hovered} />
            </Canvas>
        </div>
    )
}