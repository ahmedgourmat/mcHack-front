<<<<<<< HEAD
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
=======
import { Box, Button, Image } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import File from '../assets/File.png'
import axios from 'axios'

function DragDrop() {
    const inputRef = useRef(null)

    const [file , setFile] = useState('')


    const submitHandler = ()=>{

        const formData = new FormData()
        formData.append('file' , file)

        axios.post('http://localhost:8080/api/docs/create',formData,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })

    }


    const handleButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <Box
            w='100%'
        >
            <input
                type="file"
                accept='application/pdf'
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={(e) => {
                    setFile(e.target.files[0])
                }}
            />
            <button
                style={{
                    width:'100%'
                }}
                onClick={handleButtonClick}
            >
                <Box
                    width= "100%"
                    marginTop= "30px"
                    marginRight= "40px"
                    display= "flex"
                    justifyContent= "center"
                    alignItems= "center"
                    backgroundColor= "#F3F4F6"
                    height= "200px"
                    border= "2px dashed #D3D3D3"
                    borderRadius= "20px"
                >
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        <Box
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
                                alt="File Icon"
                            />

                            <Box style={{ color: "#2870C5", fontWeight: "700" }}>
                                Drag and drop files, or browse{" "}
                            </Box>
                            <Box style={{ color: "#A2B5B3" }}>All formats </Box>
                        </Box>
                    </Box>
                </Box>
            </button>
            <Button
                colorScheme='blue'
                w='100%'
                m='10px 0px'
                onClick={submitHandler}
            >
                Submit
            </Button>
        </Box>
    )
}

export default DragDrop;
>>>>>>> 8eb7a6dfbeb2500a2b89a441a50b9ff9bacbdaa8
