import React from "react"
import Logo from "../assets/logo.png"
import home from "../assets/home.png"
import Vector from "../assets/Vector.png"
import Vector1 from "../assets/Vector1.png"
import Vector2 from "../assets/Vector2.png"
import Vector3 from "../assets/Vector3.png"
import Vector4 from "../assets/Vector4.png"
import Vector5 from "../assets/Vector5.png"
import money from "../assets/money.png"
import {
  Box,
  Button,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react"

const HomeSideBar = () => {
  return (
    <div>
      <Box my="5" mx="16">
        <img src={Logo} />
      </Box>
      <Box display="grid" gridGap={32}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
          mx="8"
        >
          <Button bgColor="#DFECFB" width="220px" height="50px" my="3">
            <Box display="flex" alignItems="center">
              <Box mx="2">
                <img src={home} />
              </Box>
              <Box>Home</Box>
            </Box>
          </Button>
          <Button bgColor="#DFECFB" width="220px" height="50px" my="3">
            <Box display="flex" alignItems="center">
              <Box mx="2">
                <img src={Vector} />
              </Box>
              <Box>Schedules</Box>
            </Box>
          </Button>
          <Button bgColor="#DFECFB" width="220px" height="50px" my="3">
            <Box display="flex" alignItems="center">
              <Box mx="2">
                <img src={Vector1} />
              </Box>
              <Box>My docs</Box>
            </Box>
          </Button>
          <Button bgColor="#DFECFB" width="220px" height="50px" my="3">
            <Box display="flex" alignItems="center">
              <Box mx="2">
                <img src={Vector2} />
              </Box>
              <Box>Show client</Box>
            </Box>
          </Button>
          <Accordion defaultIndex={[0]} allowMultiple width="220px" height="50px" my="3">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" display="flex" alignItems="center" height="30px">
                    <Box mx="2">
                      <img src={money} />
                    </Box>
                    <Box>Sessions</Box>
                  </Box>

                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>Session 1</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button bgColor="#DFECFB" width="220px" height="50px" my="3">
            <Box display="flex" alignItems="center">
              <Box mx="2">
                <img src={Vector3} />
              </Box>
              <Box>Notifications</Box>
            </Box>
          </Button>
          <Button bgColor="#DFECFB" width="220px" height="50px" my="3">
            <Box display="flex" alignItems="center">
              <Box mx="2">
                <img src={Vector4} />
              </Box>
              <Box>Settings</Box>
            </Box>
          </Button>
          <Button bgColor="#DFECFB" width="220px" height="50px" my="3">
            <Box display="flex" alignItems="center">
              <Box mx="2">
                <img src={Vector5} />
              </Box>
              <Box>Logout</Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default HomeSideBar
