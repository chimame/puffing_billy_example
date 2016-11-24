import React, { Component } from 'react'

const Sample = (props) => {
  return(
    <div>
      {props.samples.map((item, i) => <p key={i}>{item}</p>)}
      <button onClick={() => props.onFetchData([1,2])}>fetch data</button>
    </div>
  )
}

export default Sample
