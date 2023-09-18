import React, { useState } from 'react'
import { useCursor } from '@react-three/drei'
import { useSetAtom, useAtom } from 'jotai'
import {
    clickShapeStore,
    movingCubeStore,
    movingSphereStore,
    movingTetrahedronStore
} from './stores'
import { useThree, useFrame } from '@react-three/fiber'

export const Cube = (() => {
    const { viewport } = useThree()

    const [hovered, setHovered] = useState(false)
    const [cubePosition, setCubePosition] = useState([1, 1, 0])

    const setClickShapeStore = useSetAtom(clickShapeStore)
    const [movingCube, setMovingCubeStore] = useAtom(movingCubeStore)

    useCursor(hovered)

    const handlePointOut = () => {
        setHovered(false)
        setClickShapeStore(false)
        if (movingCube) {
            setClickShapeStore(false)
            setMovingCubeStore(false)
        }
    }

    useFrame(({ mouse }) => {
        if (movingCube) {
            const x = (mouse.x * viewport.width) / 2
            const y = (mouse.y * viewport.height) / 2
            setCubePosition([x, y, 0])
        }
    })

    const handleOnPointerDown = () => {
        setClickShapeStore(true)
        setMovingCubeStore(true)
    }

    const handleOnPointerUp = () => {
        setClickShapeStore(false)
        setMovingCubeStore(false)
    }

    return (
        <mesh
            onPointerOver={() => setHovered(true)}
            onPointerOut={handlePointOut}
            onPointerDown={handleOnPointerDown}
            onPointerUp={handleOnPointerUp}
            className="w-full h-full"
            position={cubePosition}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={hovered ? 'hotpink' : 'royalblue'} />
        </mesh>
    )
})

export const Sphere = (() => {
    const [hovered, setHovered] = useState(false)
    const [spherePosition, setSpherePosition] = useState([3, 1, 0])

    const setClickShapeStore = useSetAtom(clickShapeStore)
    const [movingSphere, setMovingSphereStore] = useAtom(movingSphereStore)

    const { viewport } = useThree()

    useCursor(hovered)

    const handlePointOut = () => {
        setHovered(false)
        setClickShapeStore(false)
        if (movingSphere) {
            setClickShapeStore(false)
            setMovingSphereStore(false)
        }
    }

    useFrame(({ mouse }) => {
        if (movingSphere) {
            const x = (mouse.x * viewport.width) / 2
            const y = (mouse.y * viewport.height) / 2
            setSpherePosition([x, y, 0])
        }
    })

    const handleOnPointerDown = () => {
        setClickShapeStore(true)
        setMovingSphereStore(true)
    }

    const handleOnPointerUp = () => {
        setClickShapeStore(false)
        setMovingSphereStore(false)
    }

    return (
        <mesh
            onPointerOver={() => setHovered(true)}
            onPointerOut={handlePointOut}
            onPointerDown={handleOnPointerDown}
            onPointerUp={handleOnPointerUp}
            className="w-full h-full"
            position={spherePosition}
        >
            <sphereGeometry args={[0.8, 32, 12]} />
            <meshBasicMaterial color={hovered ? 'hotpink' : 'royalblue'} />
        </mesh>
    )
})

export const Tetrahedron = (() => {
    const [hovered, setHovered] = useState(false)
    const [tetrahedronPosition, setTetrahedronPosition] = useState([5, 1, 0])

    const setClickShapeStore = useSetAtom(clickShapeStore)
    const [movingTetrahedron, setMovingTetrahedronStore] = useAtom(movingTetrahedronStore)

    const { viewport } = useThree()

    useCursor(hovered)

    const handlePointOut = () => {
        setHovered(false)
        setClickShapeStore(false)

        if (movingTetrahedron) {
            setClickShapeStore(false)
            setMovingTetrahedronStore(false)
        }
    }

    useFrame(({ mouse }) => {
        if (movingTetrahedron) {
            const x = (mouse.x * viewport.width) / 2
            const y = (mouse.y * viewport.height) / 2
            setTetrahedronPosition([x, y, 0])
        }
    })

    const handleOnPointerDown = () => {
        setClickShapeStore(true)
        setMovingTetrahedronStore(true)
    }

    const handleOnPointerUp = () => {
        setClickShapeStore(false)
        setMovingTetrahedronStore(false)
    }

    return (
        <mesh
            onPointerOver={() => setHovered(true)}
            onPointerOut={handlePointOut}
            onPointerDown={handleOnPointerDown}
            onPointerUp={handleOnPointerUp}
            className="w-full h-full"
            position={tetrahedronPosition}
        >
            <tetrahedronGeometry args={[1]} />
            <meshBasicMaterial color={hovered ? 'hotpink' : 'royalblue'} />
        </mesh>
    )
})
