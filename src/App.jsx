//import React from 'react'
import Header from "./components/Header"
import store from "./utilities/store"
import Body from "./components/Body"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "./components/MainContainer"
import Watch from "./components/Watch"

const App = () => {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<Watch/>
      }
    ]
    }
  ]) 


  return (
    <Provider store={store}>
      <div className="p-2">
        <Header/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  )
}

export default App
