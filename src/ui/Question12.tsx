import { useFormData } from "@/context/context";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
const Question12 = () => {
  const [style, setStyle] = useState(false);
  const { step, setStep, formData, setFormData } = useFormData();

  function handleSubmit(e: string) {
    setStyle(true);
    setStep(16);
    setFormData({ ...formData, priority: e });
  }

  // animation
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
    <Box
      className="initialPosition"
      transitionDuration={"1000ms"}
      transform={`${style ? "translateY(0px)" : "translateY(350px)"}`}
      opacity={`${style ? "0" : "1"}`}
    >
      <Box
        mt={{
          sm: "60px",
          mm: "60px",
          md: "70px",
          xl: "84px",
          "2xl": "160px"
        }}
        ml={{ sm: "12px", mm: "20px", md: "84px", xl: "150px", "2xl": "200px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "14px",
            mm: "12px",
            md: "18px",
            xl: "20px",
            "2xl": "48px"
          }}
          color={"#FFF"}
        >
          <Text mb={{ sm: "22px", mm: "2px", md: "0px" }}>12</Text>
          <Text mb={{ sm: "22px", mm: "2px", md: "0px" }}>
            <BiRightArrowAlt />
          </Text>
          <Text
            mx={{ sm: "6px", mm: "14px", md: "16px", xl: "10px", "2xl": "20px" }}
          >
            Which do you prioritize more? Career or Family?
          </Text>
        </Box>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{
          sm: "12px",
          mm: "14px",
          md: "14px",
          xl: "18px",
          "2xl": "32px",
        }}
        fontWeight={380}
        ml={{ sm: "44px", mm: "66px", md: "138px", xl: "205px", "2xl": "320px" }}
        mb={{ sm: "10px", md: "5px", xl: "2px", "2xl": "16px" }}
        mt={{ sm: "2px", md: "4px", xl: "10px", "2xl": "16px" }}
      >
        Please answer based on your own beliefs.
      </Box>
      <Box color={"#A5BFFF"} fontSize={"32px"} fontWeight={380} mb={5}></Box>
      <Box
        ml={{ sm: "40px", mm: "64px", md: "138px", xl: "200px", "2xl": "320px" }}
        mt={{ sm: "20px", md: "70px", xl: "52px", "2xl": "64px" }}
      >
        <Box
          display={{ md: "flex" }}
          gap={{ mm: "10px", md: "12px", xl: "10px", "2xl": "30px" }}
        >
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            height={{ sm: "105px", mm: "130px", xl: "180px", "2xl": "340" }}
            width={{ sm: "120px", lg: "150px", "2xl": "300px" }}
            fontSize={{ sm: "10px", mm: "12px", md:"13px", xl: "16px", "2xl": "24px" }}
            onClick={(e) => handleSubmit("career")}
            cursor={"pointer"}
            mb={{ sm: "5px" }}
          >
            <Box
              m={{ sm: "5px", mm: "5px", md: "12px", xl: "10px", "2xl": "50px" }}
              height={"fit-content"}
            >
              <Image
                src={"/images/career.gif"}
                alt="career"
                width={{ sm: "110px", md: "140px", xl: "140px", "2xl": "224px" }}
                height={{
                  sm: "80px",
                  mm: "100px",
                  md: "90px",
                  xl: "130px",
                  "2xl": "224px",
                }}
              />
              <Text mt={{ sm: "2px" }} textAlign={"center"} color={"#FFF"}>
                Career
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            height={{
              sm: "95",
              md: "130px",
              mm: "100px",
              xl: "180px",
              "2xl": "340",
            }}
            width={{ sm: "120px", xl: "150px","2xl": "300px" }}
            fontSize={{ sm: "10px", mm: "12px", md:"13px", xl: "16px", "2xl": "24px" }}
            mb={{ sm: "5px" }}
            onClick={(e) => handleSubmit("Family")}
            cursor={"pointer"}
          >
            <Box
              m={{ sm: "5px", mm: "5px", md: "12px", xl: "10px", "2xl": "50px" }}
            >
              <Image
                src={"/images/family.gif"}
                alt="Family"
                width={{ sm: "60", md: "90px", xl: "130px", "2xl": "224px" }}
                height={{ sm: "70", md: "90px", xl: "130px", "2xl": "224px" }}
              />
              <Text mt={{ sm: "2px" }} textAlign={"center"} color={"#FFF"}>
                Family
              </Text>
            </Box>
          </Box>

          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            height={{
              sm: "105px",
              mm: "110px",
              md: "130px",
              xl: "180px",
              "2xl": "340",
            }}
            width={{ sm: "120px", xl: "150px", "2xl": "300px" }}
            fontSize={{ sm: "10px", mm: "12px", md:"13px", xl: "16px", "2xl": "24px" }}
            mb={{ sm: "4px" }}
            onClick={(e) => handleSubmit("I balance both")}
            cursor={"pointer"}
          >
            <Box
              m={{ sm: "5px", mm: "5px", md: "12px", xl: "10px", "2xl": "50px" }}
            >
              <Image
                src={"/images/balance1.gif"}
                alt="gif"
                width={{ sm: "120px", md: "90px", xl: "140px", "2xl": "224px" }}
                height={{ sm: "80px", md: "90px", xl: "130px", "2xl": "224px" }}
              />
              <Text mt={{ sm: "2px" }} textAlign={"center"} color={"#FFF"}>
                I balance both
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Question12;
