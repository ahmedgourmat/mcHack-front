import React from "react"
import SessionModel from "./SessionModel"
import { Image } from "@chakra-ui/react"
import File from "../assets/File.png"

const DragDrop = () => {
  return (
    <div>
      <SessionModel>
        <button>
          <div
            style={{
              width: "1200px",
              marginRight: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F3F4F6",
              height: "200px",
              border: "2px dashed #D3D3D3",
              borderRadius: "20px",

            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <div
                style={{
                  flexDirection: "column",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  boxSize="50px"
                  objectFit="cover"
                  src={File}
                  alt="Dan Abramov"
                />

                <div style={{ color: "#2870C5", fontWeight: "700" }}>
                  Drag and drop files, or browse{" "}
                </div>
                <div style={{ color: "#A2B5B3" }}>
                All formats                </div>
              </div>
            </div>
          </div>{" "}
        </button>
      </SessionModel>
    </div>
  )
}

export default DragDrop
