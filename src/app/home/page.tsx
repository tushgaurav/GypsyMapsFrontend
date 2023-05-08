"use client";

import { useState, useEffect } from "react";

import {
  Box,
  Menu,
  MenuButton,
  MenuList,
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
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteGroup,
  AutoCompleteGroupTitle,
} from "@choc-ui/chakra-autocomplete";

import FeatherIcon from "feather-icons-react";
import Maps from "../../../components/Maps";

import Image from "next/image";
import logo from "./Logo.png";
import map from "./map.png";
import styles from "./page.module.css";
import Weather from "../../../components/Weather";

export default function Home() {
  const [source, setSource] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dest, setDest] = useState("");
  const [suggestions, setSuggestions] = useState(["NIET", "GNIOT", "IILM"]);

  const handleChangeSource = async (event) => {
    setSource(event.target.value);
    if (event.target.value.length >= 3) {
      setSuggestions([]);
      const response = await fetch(
        `http://127.0.0.1:8000/api/search/?text=${event.target.value}&maxResults=5`
      );
      const data = await response.json();
      // setSuggestions(response);
      data.Results.forEach((result) => {
        suggestions.push(result.Place.Label);
      });
    }
    console.log(suggestions);
  };

  const handleChangeDest = (event) => {
    setDest(event.target.value);
    console.log(dest);
  };

  return (
    <div>
      <div className={styles.sidebar}>
        <div className={styles.center}>
          <Image src={logo} alt="Logo" height={200} width={200} />
        </div>

        <div className={styles.niet_hackathon}>
          <Text fontSize="xs">NIET HACKATHON PREVIEW</Text>
        </div>
        <div className={styles.main_content}>
          <Stack spacing={2}>
            <Tabs
              className={styles.spacing}
              size="sm"
              variant="soft-rounded"
              colorScheme="blue"
            >
              <TabList>
                <Tab _selected={{ color: "white", bg: "blue.600" }}>Car</Tab>
                <Tab _selected={{ color: "white", bg: "blue.600" }}>
                  Two Wheeler
                </Tab>
                <Tab _selected={{ color: "white", bg: "blue.600" }}>Foot</Tab>
              </TabList>

              <Weather lat={23} lon={43} />
            </Tabs>

            <Stack spacing={2}>
              <div className={styles.inputGrp}>
                <FeatherIcon icon="arrow-up-right" />

                <AutoComplete openOnFocus>
                  <AutoCompleteInput
                    onChange={handleChangeSource}
                    variant="filled"
                  />
                  <AutoCompleteList>
                    {suggestions.map((suggestion, cid) => (
                      <AutoCompleteItem
                        key={`option-${cid}`}
                        value={suggestions}
                        textTransform="capitalize"
                      >
                        {suggestions}
                      </AutoCompleteItem>
                    ))}
                  </AutoCompleteList>
                </AutoComplete>
              </div>

              <div className={styles.inputGrp}>
                <FeatherIcon icon="arrow-down" />
                <AutoComplete openOnFocus>
                  <AutoCompleteInput variant="filled" />
                  <AutoCompleteList>
                    {suggestions.map((country, cid) => (
                      <AutoCompleteItem
                        key={`option-${cid}`}
                        value={country}
                        textTransform="capitalize"
                      >
                        {country}
                      </AutoCompleteItem>
                    ))}
                  </AutoCompleteList>
                </AutoComplete>
              </div>
            </Stack>
          </Stack>

          <Stack spacing={1}>
            <Text className={styles.spacing}>
              <span>Distance: </span>
              <span className="cl-blue bold">1.9 KM</span>
            </Text>

            <Text>
              <span>Duration: </span>
              <span className="cl-blue bold">20 Minutes</span>
            </Text>
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

          <ButtonGroup className="padding-vertical">
            <Button colorScheme="blue" variant="outline" size="sm">
              Shortest Path
            </Button>
            <Button colorScheme="blue" variant="outline" size="sm">
              Shortest Time
            </Button>
          </ButtonGroup>

          <Stack flex="row"></Stack>

          <Card>
            <CardBody>
              <Accordion defaultIndex={[2]} allowToggle>
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
                    The average fuel consumption is lower than usual.
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
                        <li>NIET Greater Noida</li>
                        <li>Pandey's Home (Arcade Gaming)</li>
                        <li>IILM College Greater Noida</li>
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
                    Route between IILM College and NIET College is very good. No
                    traffic is to be expected. Drive faster than normal to reach
                    in optimal time.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* <Image
        className={styles.map}
        src={map}
        width={"100vw"}
        height={"100vh"}
        alt="Map"
      /> */}

      <Maps className={styles.map} />
    </div>
  );
}
