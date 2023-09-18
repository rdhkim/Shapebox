import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Cube, Sphere, Tetrahedron } from './Shapes'
import { OrbitControls, useCursor, Stats, Grid } from '@react-three/drei'
import { clickShapeStore } from './stores'
import { useAtomValue } from 'jotai'

export const Main = () => {
    const clickShape = useAtomValue(clickShapeStore)
    useCursor(clickShape)

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
                    position: [0, 6, 1]
                }}>
                <OrbitControls
                    enabled={!clickShape}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                    rotateSpeed={0.1}
                    zoomSpeed={0.3}
                    panSpeed={0.2}
                />
                <Cube />
                <Sphere />
                <Tetrahedron />
                <Grid
                    cellSize={2000}
                    sectionColor={'grey'}
                    cellColor={'white'}
                    infiniteGrid={true}
                />
                <Stats />
            </Canvas>
        </div>
    )
}