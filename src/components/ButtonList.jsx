// import React from 'react'
import Buttons from "./Buttons"

const list = ["All","Trending","Cenima","Tollyhood","Cricket","Games","Olympics","News","Comedy","Javascript","Svce"]
const ButtonList = () => {
  return (
    <div className="flex overflow-x-hidden ">
      {
        list.map((each,index) =>(
          <Buttons butNames={each} key={index} />
        ))
      }
    </div>
  )
}

export default ButtonList
