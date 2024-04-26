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
  Image,
} from "@chakra-ui/react";

const firstFourButtons = [
  { name: "Home", icon: home },
  { name: "Schedules", icon: Vector },
  { name: "My docs", icon: Vector1 },
  { name: "Show client", icon: Vector2 },
];

const notificationButtons = [
  { name: "Notifications", icon: Vector3 },
  { name: "Settings", icon: Vector4 },
  { name: "Logout", icon: Vector5 },
];

const sessionButtons = [
  { name: "Session 1", icon: money },
  { name: "Session 2", icon: money },
  { name: "Session 3", icon: money },
];

const HomeSideBar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Box display="flex" flexDir="column" alignItems="center" height='100vh' position='fixed' zIndex='19999' bg='#F6F6F6'>
      <Image
        h="60px"
        w="120px"
        objectFit="cover"
        src={logoblue}
        alt="Dan Abramov"
      />
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
              <AccordionPanel pb={4} >
                {sessionButtons.map((button) => (
                  <Button
                    key={button.name}
                    bgColor={activeButton === button.name ? "#3182ce" : "#DFECFB"}
                    color={activeButton === button.name ? "white" : "black"}
                    width="100%"
                    height="50px"
                    my="3"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    onClick={() => handleButtonClick(button.name)}
                  >
                    <Box display="flex" alignItems="center">
                      <Box mr="2">
                        <img src={button.icon} alt={button.name} />
                      </Box>
                      <Box>{button.name}</Box>
                    </Box>
                  </Button>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {notificationButtons.map((button) => (
            <Button
              key={button.name}
              bgColor={activeButton === button.name ? "#E6E6E6" : "#F6F6F6"}
              color='black'
              width="220px"
              height="50px"
              my="3"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              onClick={() => handleButtonClick(button.name)}
            >
              <Box display="flex" alignItems="center">
                <Box mr="2">
                  <img src={button.icon} alt={button.name} />
                </Box>
                <Box>{button.name}</Box>
              </Box>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSideBar;
