import React from "react"
import HomeSideBar from "../Components/HomeSideBar"
import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Schedules from "./Schedules"
import Docs from "./Docs"

const Main = () => {
  return (
    <Box w='100%'>
      <Box display="flex" width='100%'>
        <Box>
          <HomeSideBar />
        </Box>
        <Box
          pl='300px'
          w='100%'
        >
          <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/Schedules' element={<Schedules/>} />
            <Route path='/Docs' element={<Docs/>} />
            <Route path='/Client' element={<Home/>} />
            <Route path='/Sessions' element={<Home/>} />
            <Route path='/Notification' element={<Home/>} />
            <Route path='/Settings' element={<Home/>} />
          </Routes>
        </Box>
      </Box>
    </Box>
  )
}

export default Main
