import React from 'react'
import { Main } from '../src/Main'

const Index = () => {
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
      <Main />
    </>
  )
}

export default Index