import React from 'react'

const Hello = ( props,{numOne}) => {


  
    const value=props.a+props.b;


  
  return (
    <div>
    <p> I am Hello Page</p>
    <p>{props.name}</p>
    <p>{props.a} adds {props.b} makes {value}</p>
    <h3>{props.isParent?"I am a Child of HelloOne.JSX ":"I am alone"}</h3>
    <h1>i received {numOne} from my parent</h1>
    {/* <h1>i received {props.numOne} from my parent</h1> */}
    </div>
  )
}

export default Hello
