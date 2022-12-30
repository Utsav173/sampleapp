import React from 'react'
import Addtodo from './Addtodo'
import Todos from './Todos'

const Combine = ({promps, fams}) => {
  return (
    <>
        <Todos toda={promps} />
        <Addtodo fams={fams}/>
    </>
  )
}

export default Combine