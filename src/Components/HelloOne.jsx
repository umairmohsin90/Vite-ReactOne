import React, { useState } from 'react'
import Hello from './Hello'

const HelloOne = () => {

    const [isParent, setisParent] = useState(true);
    const numOne=45
    
  return (
    <div>
      <Hello name="James" a={200}b={7000} isParent={isParent} numOne={numOne}/>
    </div>
  )
}

export default HelloOne
