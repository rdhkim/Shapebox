import React, { useState } from 'react'
import { useCursor } from '@react-three/drei'

export const Cube = (() => {
    const [hovered, hover] = useState(false)
    useCursor(hovered)

    return (
        <mesh
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            className="w-full h-full"
            position={[1, 1, 1]}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={hovered ? 'hotpink' : 'royalblue'} />
        </mesh>
    )
})

export const Sphere = (() => {
    const [hovered, hover] = useState(false)
    useCursor(hovered)

    return (
        <mesh
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            className="w-full h-full"
            position={[3, 1, 1]}
        >
            <sphereGeometry args={[0.8, 32, 12]} />
            <meshBasicMaterial color={hovered ? 'hotpink' : 'royalblue'} />
        </mesh>
    )
})

export const Tetrahedron = (() => {
    const [hovered, hover] = useState(false)
    useCursor(hovered)

    return (
        <mesh
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            className="w-full h-full"
            position={[5, 1, 1]}
        >
            <tetrahedronGeometry args={[1]} />
            <meshBasicMaterial color={hovered ? 'hotpink' : 'royalblue'} />
        </mesh>
    )
})

export const FloorPlane = (() => {

    return (
        <mesh
            className="w-full h-full"
            position={[1, 1, 1]}
            rotation-x={-90}
        >
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial color={'grey'} />
        </mesh>
    )
})