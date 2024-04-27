import React from "react"
import HomeSideBar from "../Components/HomeSideBar"
import DragDrop from "../Components/DragDrop"
import ScanForm from "../Components/ScanForm"
import FilterClient from "../Components/FilterClient"

const Client = () => {
  return (
    <div className="flex">
        <div>
      <div className="">
        <p className="mb-4">Send file</p>
        <DragDrop />
      </div>
      <div>
        <p className="mb-4">Send file</p>
        <ScanForm />
      </div></div>
      <div>
        <FilterClient />
      </div>
    </div>
  )
}

export default Client
