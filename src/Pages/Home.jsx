import React from "react"
import HomeSideBar from "../Components/HomeSideBar"
import { Box } from "@chakra-ui/react"
import CardBox from "../Components/CardBox"
import ScheduleBox from "../Components/ScheduleBox"
import NewSessionButton from "../Components/NewSessionButton"

const Home = () => {
  return (
    <div style={{width:'100%'}}>
      <Box display="flex" width='100%'>
        <Box>
          <HomeSideBar />
        </Box>
        <Box width='100%'>
          <CardBox
            title="Title"
            text="Lorem ipsum dolor sit amet"
            date="April 30, 2024"
          />
          <ScheduleBox
            session="Title"
            title="Lorem ipsum dolor sit amet"
            text="ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssApril 30, 2024"
          />
          <NewSessionButton />
        </Box>
      </Box>
    </div>
  )
}

export default Home
