import React from "react"
import HomeSideBar from "../Components/HomeSideBar"
import CardBox from "../Components/CardBox"
import ScheduleBox from "../Components/ScheduleBox"
import NewSessionButton from "../Components/NewSessionButton"

function Home() {
  return (
    <div>
      <div className="flex">
        <div>
          <HomeSideBar />
        </div>
        <div>
          <div>
            <NewSessionButton />
          </div>
          <div>
            <div className="mt-10 ml-5 ">
              <p className="text-lg"> Created sessions</p>
            </div>
            <div className="flex max-w-[1200px] flex-wrap">
              <CardBox
                title="Title"
                text="Lorem ipsum dolor sit amet"
                date="April 30, 2024"
              />
              <CardBox
                title="Title"
                text="Lorem ipsum dolor sit amet"
                date="April 30, 2024"
              />
              <CardBox
                title="Title"
                text="Lorem ipsum dolor sit amet"
                date="April 30, 2024"
              />
            </div>
            <div className="mt-5 ml-5 ">
              <p className="text-lg"> Schedules</p>
            </div>
            <div className="flex flex-col">
              <ScheduleBox
                session="Title"
                title="Lorem ipsum dolor sit amet"
                text="ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssApril 30, 2024"
                width="500px"
              />
              <ScheduleBox
                session="Title"
                title="Lorem ipsum dolor sit amet"
                text="ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssApril 30, 2024"
                width="500px"
              />
              <ScheduleBox
                session="Title"
                title="Lorem ipsum dolor sit amet"
                text="ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssApril 30, 2024"
                width="500px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
