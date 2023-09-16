import React, { useState } from 'react'
import { useCursor } from '@react-three/drei'
import { useSetAtom } from 'jotai'
import { hoveringShapeStore } from './stores'

export const Cube = (() => {
    const [hovered, setHovered] = useState(false)
    const setHoveringShapeStore = useSetAtom(hoveringShapeStore)
    useCursor(hovered)

    const handlePointOver = () => {
        setHovered(true)
        setHoveringShapeStore(true)
    }

    const handlePointOut = () => {
        setHovered(false)
        setHoveringShapeStore(false)
    }

    return (
        <mesh
            onPointerOver={handlePointOver}
            onPointerOut={handlePointOut}
            className="w-full h-full"
            position={[1, 1, 0]}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={hovered ? 'hotpink' : 'royalblue'} />
        </mesh>
    )
})

export const Sphere = (() => {
    const [hovered, setHovered] = useState(false)
    const setHoveringShapeStore = useSetAtom(hoveringShapeStore)
    useCursor(hovered)

    const handlePointOver = () => {
        setHovered(true)
        setHoveringShapeStore(true)
    }

    const handlePointOut = () => {
        setHovered(false)
        setHoveringShapeStore(false)
    }

    return (
        <mesh
            onPointerOver={handlePointOver}
            onPointerOut={handlePointOut}
            className="w-full h-full"
            position={[3, 1, 0]}
        >
            <sphereGeometry args={[0.8, 32, 12]} />
            <meshBasicMaterial color={hovered ? 'hotpink' : 'royalblue'} />
        </mesh>
    )
})

export const Tetrahedron = (() => {
    const [hovered, setHovered] = useState(false)
    const setHoveringShapeStore = useSetAtom(hoveringShapeStore)
    useCursor(hovered)

    const handlePointOver = () => {
        setHovered(true)
        setHoveringShapeStore(true)
    }

    const handlePointOut = () => {
        setHovered(false)
        setHoveringShapeStore(false)
    }

    return (
        <mesh
            onPointerOver={handlePointOver}
            onPointerOut={handlePointOut}
            className="w-full h-full"
            position={[5, 1, 0]}
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
            position={[1, 1, 0]}
            rotation-x={-90}
        >
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial color={'grey'} />
        </mesh>
    )
})