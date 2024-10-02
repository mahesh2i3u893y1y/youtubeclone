// import React from 'react'
//import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utilities/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utilities/constants";
import { cacheStore } from "../utilities/searchSlice";

const Header = () => {

  const [searchSuggestion,setSearchSuggestion] = useState("")
  const [searchResults,setSearchResults] = useState([])
  const [blurEvents,setBlurEvents]  = useState(false)
   //console.log(searchSuggestion)

  const sliceData = useSelector((store) => store.search)

  const dispatch = useDispatch()
  const toggleHandleMenu = () =>{
    dispatch(toggleMenu())
  }

  useEffect(() =>{
    const timer = setTimeout(() =>{
      if(sliceData[searchSuggestion]){
        setSearchResults(sliceData[searchSuggestion])
      }else{
        getSearchSuggestions()
      }
    },200)

    return () =>{
      clearTimeout(timer)
    }

  },[searchSuggestion])

  

  const getSearchSuggestions =  async () =>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchSuggestion)
    const json = await data.json()
    //console.log(json)
    setSearchResults(json[1])

    dispatch(cacheStore({
      [searchSuggestion]: json[1]
    }))
  }

  return (
    <div className="grid grid-flow-col shadow-lg p-1 sticky top-0 bg-white" >
      <div className="flex col-span-1">
        <img src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" 
        alt="hamburger" className="h-12 cursor-pointer" onClick={() => toggleHandleMenu()}/>
        <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="youtube" 
          className="h-12  cursor-pointer mx-1 "/>
      </div>
      <div className="col-span-10">
        <div className=" p-3 flex ">
          <input type="text" className="w-1/2 border border-gray-400 input-ele px-2 py-2 text-[13px]"
          placeholder="search" value={searchSuggestion}  onChange={(e) => setSearchSuggestion(e.target.value)}
          onBlur={() => setBlurEvents(false)} onFocus={() => setBlurEvents(true)} />
          <button className="border border-gray-400 px-2 bg-gray-300  search-button"><IoIosSearch/></button>
        </div>
        {blurEvents && 
        <div className="w-[18rem] absolute bg-white rounded-lg">
          <ul className="">
            {
              searchResults.map((s) =>(
                <li className="px-2 py-1  shadow-sm flex content-center text-[14px] hover:bg-gray-200" key={s}><IoIosSearch className="h-4 mx-1"/> {s}</li>
              ))
            }
          </ul>
        </div>
        }
      </div>
      <div className="col-span-1">
        <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user"
        className="h-10 cursor-pointer"/>
      </div>
    </div>
  )
}

export default Header
