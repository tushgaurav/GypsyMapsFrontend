"use client";
import {
  Box,
  Stack,
  Card,
  Text,
  CardBody,
  Input,
  InputLeftAddon,
  InputGroup,
  InputLeftElement,
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import FeatherIcon from "feather-icons-react";

import Image from "next/image";
import logo from "./Logo.png";
import map from "./map.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.center}>
          <Image src={logo} alt="Logo" height={200} width={200} />
        </div>

        <div className={styles.main_content}>
          <Stack spacing={2}>
            <InputGroup>
              <InputLeftAddon
                children={<FeatherIcon icon="arrow-up-right" />}
              />
              <Input
                type="tel"
                className={styles.input_bg}
                placeholder="Source"
                _placeholder={{ color: "#A0AEC0" }}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children={<FeatherIcon icon="arrow-down" />} />
              <Input
                className={styles.input_bg}
                type="tel"
                placeholder="Destination"
                _placeholder={{ color: "#A0AEC0" }}
              />
            </InputGroup>
          </Stack>

          <Stack
            spacing={2}
            direction="row"
            align="center"
            className={styles.spacing}
          >
            <Button colorScheme="blue">Safety Mode</Button>
            <Text fontSize="xs">Recommended</Text>
          </Stack>

          <ButtonGroup className={styles.spacing}>
            <Button colorScheme="blue" variant="outline">
              Shortest Path
            </Button>
            <Button colorScheme="blue" variant="outline">
              Shortest Time
            </Button>
          </ButtonGroup>

          <Tabs
            className={styles.spacing}
            size="sm"
            variant="soft-rounded"
            colorScheme="blue"
          >
            <TabList>
              <Tab>Car</Tab>
              <Tab>Two Wheeler</Tab>
              <Tab>Foot</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>Estimated Time: 40 minutes</p>
              </TabPanel>
              <TabPanel>
                <p>Estimated Time: 30 minutes</p>
              </TabPanel>
              <TabPanel>
                <p>Estimated Time: 200 minutes</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Card>
            <CardBody>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Fuel
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    The average fuel is fucked bro.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Suggested Stops
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      <ul>
                        <li>GB Road (Strip Club)</li>
                        <li>Pandey's Home (Arcade Gaming)</li>
                        <li>NIET College</li>
                      </ul>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Road Conditions
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere omnis nesciunt provident, perferendis consequatur
                    voluptas.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        </div>
      </div>

      <Image
        className={styles.map}
        src={map}
        width={"100vw"}
        height={"100vh"}
        alt="Map"
      />
    </div>
  );
}
