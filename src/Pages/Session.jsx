import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Select,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"
import React from "react"

const Session = () => {
  return (
    <div>
      <div className="border solid mx-10 mt-10 w-[100%] rounded-xl">
        <Card bgColor="#FAFAFA">
          <CardBody p="5">
            <Box>
              <Heading
                size="md"
                color="#707070"
                textTransform="uppercase"
                pl="5"
                pt="2"
              >
                About
              </Heading>
            </Box>
            <Stack divider={<StackDivider />} spacing="3">
              <Box p="5">
                <Text pt="2" fontSize="sm">
                  <span className="font-bold"> Created by :</span> Ahmed amine
                </Text>
                <Text pt="2" fontSize="sm">
                  <span className="font-bold"> Email :</span>{" "}
                  ahmedahmed@gmail.dz
                </Text>
              </Box>
              <Box p="5">
                <Heading size="xs" textTransform="uppercase">
                  note:
                </Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor sit amet consectetur. Tortor blandit
                  eleifend rhoncus cursus lacus lectus. Tristique habitasse
                  condimentum sed nibh cursus lectus volutpat. Amet c
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
      <div className="border solid mx-10 mt-10 w-[100%] rounded-xl">
        <Card bgColor="#DFECFB">
          <CardBody p="5">
            <Box display="flex" justifyContent="space-between">
              <Heading size="md" color="#707070" textTransform="uppercase">
                Ai summary
              </Heading>
              <Select placeholder="Language" maxWidth="200px" bgColor="#DAB909">
                <option value="option1">English</option>
                <option value="option2">French</option>
                <option value="option3">Arabic</option>
              </Select>
            </Box>
            <Text pt="5" fontSize="sm">
              Lorem ipsum dolor sit amet consectetur. Feugiat quis malesuada
              quis dictum mollis. Elementum porta facilisis nunc quam. Donec vel
              augue sed nisi velit aliquet eget arcu. Habitant turpis etiam
              rhoncus feugiat fringilla scelerisque praesent. Amet lectus sed
              ante molestie id arcu. Nunc diam ultricies rutrum sed tristique
              arcu ultrices dignissim ultricies. Lorem id at egestas donec.
              Netus libero in elit fermentum maecenas ac amet massa
              pellentesque. Tellus enim et vel feugiat arcu. Facilisis
              condimentum vitae blandit neque hendrerit. Aliquet proin
              scelerisque auctor interdum id. Ut porta venenatis id neque ipsum.
              Tempus a vitae nulla in nisl malesuada semper. Lorem pretium
              habitasse enim aliquet enim. Porttitor mattis urna integer at in
              ultrices faucibus convallis ultrices.
            </Text>
            = ={" "}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Session
