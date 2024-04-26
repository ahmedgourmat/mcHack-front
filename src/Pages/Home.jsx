import React from "react"
import HomeSideBar from "../Components/HomeSideBar"
import { Box } from "@chakra-ui/react"

const Home = () => {
  return (
    <div>
      <Box display="flex">
        <Box>
          <HomeSideBar />
        </Box>
        <Box></Box>
      </Box>
    </div>
  )
}

export default Home
