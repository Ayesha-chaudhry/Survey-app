import { useFormData } from "@/context/context";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const FmQues13 = () => {
  const [style, setStyle] = useState(false);
  const {step, setStep, formData, setFormData} = useFormData();

  function handleSubmit(e:string){
    setFormData({...formData, genderpreference: e})
    setStyle(true)
    setStep(11)
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
          sm: "80px",
          mm: "90px",
          md: "70px",
          lg: "104px",
          "2xl": "160px",
         
        }}
        ml={{ sm: "14px", mm: "18px", md: "84px", lg: "150px", "2xl": "200px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "14px",
            mm: "14px",
            md: "18px",
            lg: "20px",
            "2xl": "48px"
          }}
          color={"#FFF"}
        >
          <Text mb={{sm:"20px", mm:"-3px"}}>13</Text>
          <Text mb={{sm:"20px", mm:"-3px"}}><BiRightArrowAlt /></Text>
          <Text mx={{ sm: "7px", mm: "3px", ml:"18px", md: "8px", "2xl": "20px" }}>
          Do you struggle to get support from family if you
          </Text>
        </Box>
        <Text
          ml={{ sm: "38px", mm: "30px", ml:"44px", md: "44px", lg: "50px", "2xl": "120px" }}
          color={"#FFF"}
          fontWeight={300}
          fontSize={{
            sm: "14px",
            mm: "14px",
            md: "18px",
            lg: "20px",
            "2xl": "48px"
          }}
          alignItems={"center"}
        >
          have to work long hours / overtime?
        </Text>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{
          sm: "12px",
          mm: "12px",
          md: "16px",
          lg: "18px",
          "2xl": "32px",
        }}
        fontWeight={380}
        ml={{ sm: "52px", mm: "46px", ml:"62px", md: "130px", lg: "200px", "2xl": "320px" }}
        mb={{ sm: "24px", md: "24px", lg: "16px", "2xl": "94px" }}
        mt={{ sm: "6px", md: "4px", lg: "10px", "2xl": "16px" }}
      >
        Please feel free to share your honest opinion.
      </Box>
      <Box color={"#A5BFFF"} fontSize={"32px"} fontWeight={380} mb={5}></Box>
      <Box
        ml={{ sm: "-10px", mm: "-16px", ml:"-6px", md: "70px", lg: "136px", "2xl": "240px" }}
        mt={{ sm: "-30px", mm: "-8", "2xl": "52px" }}
      >
        <Flex
          m={{ sm: "65px", mm: "65px" }}
          gap={{ sm: "12px", mm: "10px", md: "12px", "2xl": "30px" }}
        >
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ mm: "121px", md: "160px", lg: "180px", "2xl": "350px" }}
            height={{ mm: "134px", md: "140px", lg: "190px", "2xl": "350px" }}
            fontSize={{ sm: "10px", md: "14px", lg: "18px", "2xl": "24px" }}
          >
            <Box
              m={{ sm: "10px", mm: "8px", md: "20px", lg: "20px", "2xl": "60px" }}
              mt={{ md: "12px", lg: "20px" }}
              onClick={(e) => 
                handleSubmit("yes")
              }
            >
              <Image
                src={"/images/yes.gif"}
                alt="male"
                width={{mm:"100px", md: "190px", lg: "240px", "2xl": "250px" }}
                height={{ md: "90px", lg: "130px", "2xl": "200px" }}
              />
              <Text mt={{mm:"2px", md:"6px"}} fontSize={{sm:"12px", md:"14px", lg:"16px", "2xl": "24px"}} textAlign={"center"} color="#FFF">
                Yes
              </Text>
            </Box>
          </Box>
          <Box 
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ mm: "121px", md: "160px", lg: "180px", "2xl": "350px" }}
            height={{ mm: "134px", md: "140px", lg: "190px", "2xl": "350px" }}
            fontSize={{ sm: "10px", md: "14px", lg: "18px", "2xl": "24px" }}
          >
            <Box
              m={{ sm: "10px", mm: "8px", md: "20px", lg: "20px", "2xl": "60px" }}
              mt={{ md: "12px", lg: "20px" }}
              onClick={() => handleSubmit("No")}
            >
              <Image
                src={"/images/no.gif"}
                alt="male"
                width={{mm:"100px", md: "190px", lg: "240px", "2xl": "250px" }}
                height={{ md: "90px", lg: "130px", "2xl": "200px" }}
              />
              <Text mt={{mm:"2px", md:"6px"}} fontSize={{sm:"12px", md:"14px", lg:"16px", "2xl": "24px"}} textAlign={"center"} color="#FFF">
                No
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FmQues13;
