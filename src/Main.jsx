import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Cube, Sphere, Tetrahedron, FloorPlane } from './Shapes'
import { OrbitControls, useCursor } from '@react-three/drei'
import { hoveringShapeStore } from './stores'
import { useAtomValue } from 'jotai'

export const Main = () => {
    const hoveringShape = useAtomValue(hoveringShapeStore)
    useCursor(hoveringShape)

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
                }}>
                <OrbitControls
                    enabled={!hoveringShape}
                    zoomSpeed={0}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                    enablePan={false}
                />
                <Cube />
                <Sphere />
                <Tetrahedron />
                <FloorPlane />
            </Canvas>
        </div>
    )
}