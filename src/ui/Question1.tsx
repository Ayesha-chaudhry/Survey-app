"use client";
import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";
import Dropdown from "../components/Dropdown";

const Question1 = ({ data }: any) => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".initialPosition");
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.add("animate");
        }
      });
    });
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <Flex
      height={{ sm: "100vh" }}
      backgroundColor={"#7EA2FF"}
      overflow={"hidden"}
      flexDirection={"column"}
      bg={"#7EA2FF"}
      className="initialPosition"
      transitionDuration={"1000ms"}
      transform={`${style ? "translateY(0px)" : "translateY(350px)"}`}
      opacity={`${style ? "" : "1"}`}
    >
      <Box
      
        height={{
          sm: "90%",
          mm: "80%",
          md: "70%",
          lg: "",
          xl: "70%",
          "2xl": "70%",
        }}
        width={{ sm: "90%", md: "85%", lg: "", xl: "85%", "2xl": "85%" }}
        margin={{ sm: "auto" }}
        display={"flex"}
        alignItems={"start"}
        gap={{ sm: "10px", md: "12px", lg: "", xl: "25px", "2xl": "25px" }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text
            fontSize={{
              sm: "16px",
              mm: "16px",
              md: "18px",
              xl: "22px",
              "2xl": "48px",
              // sm: "14px",
              // md: "20px",
              // lg: "",
              // xl: "40px",
              // "2xl": "48px",
            }}
            textColor={"#FFF"}
            onClick={() => {
              console.log("clicked text heading");
            }}
          >
            1
          </Text>
          <Text
            fontSize={{
              sm: "16px",
              mm: "16px",
              md: "18px",
              xl: "22px",
              "2xl": "48px",
              // sm: "14px",
              // md: "20px",
              // lg: "",
              // xl: "40px",
              // "2xl": "35px",
            }}
            textColor={"#FFF"}
          >
            <BiRightArrowAlt />
          </Text>
        </Box>

        <Box>
          <Box>
            <Text
              fontSize={{
                sm: "16px",
                mm: "16px",
                md: "18px",
                xl: "22px",
                "2xl": "48px"
              }}
              textColor={"#FFF"}
              paddingX={{ sm: "1px", md: "6px",lg: "4px", xl: "15px", "2xl": "1px" }}
            >
              Where do you live these days? 
            </Text>
            <Text
              fontSize={{
                sm: "14px",
                mm: "14px",
                md: "16px",
                xl: "16px",
               "2xl": "32px",
              }}
              pl={{ sm: "1px", md: "6px", lg: "6px", xl: "18px", "2xl": "10px" }}
              textColor={"#A5BFFF"}
              paddingTop={{
                sm: "4px",
                md: "10px",
                lg: "",
                xl: "15px",
                "2xl": "15px",
              }}
            >
              We promise not to send the paparazzi!
            </Text>
          </Box>
          <Box
            display={{ sm: "flex" }}
            flexWrap={"wrap"}
            gap={{ sm: "10px", md: "", lg: "", xl: "30px", "2xl": "30px" }}
            paddingY={{
              sm: "15px",
              mm: "20px",
              md: "30px",
              lg: "",
              xl: "64px",
              "2xl": "64px",
            }}
            pl={{ sm: "0px", md: "0px", lg: "0px", xl: "18px", "2xl": "10px" }}
            onClick={() => {
              setStyle(true);
            }}
          >
            <Dropdown />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Question1;
