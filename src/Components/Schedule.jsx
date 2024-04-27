import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Input, Stack, Text , Select } from '@chakra-ui/react'

function Schedule() {
  return (
    <div className="flex">
    <div className="m-5 border solid rounded-md">
      <Card width={width} height='130px'>
        <CardBody>
          <Box>
            <Heading size="md">
              <Box>
                Session : <span style={{ color: "#2870C5" }}>{session}</span>
              </Box>
              <Box pt="2">
                Title : <span style={{ color: "#DAB909" }}>{title}</span>
              </Box>
            </Heading>
            <Text pt="2" fontSize="sm" color="#A2B5B3" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
              Note: {text}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </div></div>
  )
}

export default Schedule
