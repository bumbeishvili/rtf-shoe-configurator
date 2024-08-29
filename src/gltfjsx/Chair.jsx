/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ../../public/chair.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/chair.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.outline.geometry} material={materials.outline} />
      <mesh geometry={nodes.seatside.geometry} material={materials.skin} />
      <mesh geometry={nodes.foot.geometry} material={materials.black_plactic} />
      <mesh geometry={nodes.footBase.geometry} material={materials.black_plactic} />
      <mesh geometry={nodes.height_adjust.geometry} material={materials.black_plactic} />
      <mesh geometry={nodes.seat.geometry} material={materials.skin} />
      <mesh geometry={nodes.wheel.geometry} material={materials.black_plactic} />
      <mesh geometry={nodes.arm.geometry} material={materials.skin} />
      <mesh geometry={nodes.backCut.geometry} material={materials.pillow_skin} />
      <mesh geometry={nodes.base.geometry} material={materials.black_plactic} />
      <mesh geometry={nodes.backrest.geometry} material={materials.skin} />
      <mesh geometry={nodes.strip.geometry} material={materials.skin} />
      <mesh geometry={nodes.handrest.geometry} material={materials.skin} />
    </group>
  )
}

useGLTF.preload('/chair.glb')
