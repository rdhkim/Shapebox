import React from 'react'
import dynamic from 'next/dynamic'

const Index = () => {
  const DynamicMain = dynamic(() => import('@/Main').then((mod) => mod.Main), { ssr: false })

  return (
    <>
      <style global jsx>{`
      html,
      bdoy,
      bdoy > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
        position: absolute;
        width: 100%
      }
    `}</style>
      <DynamicMain />
    </>
  )
}

export default Index