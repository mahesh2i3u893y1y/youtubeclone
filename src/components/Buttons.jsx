/* eslint-disable react/prop-types */
//import React from 'react'


const Buttons = (props) => {
    const {butNames} = props
  return (
    <div className="text-[13px] ">
        <button className="bg-gray-200 px-3 py-1 m-1 rounded-2xl">{butNames}</button>
    </div>
  )
}



export default Buttons