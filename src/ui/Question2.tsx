import { useFormData } from "@/context/context";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Question2 = () => {
  const [style, setStyle] = useState(false);
  const {step, setStep, formData, setFormData} = useFormData();

  function handleSubmit(e:string){
    setStyle(true)
    setStep(5)
    setFormData({...formData, selectedgender: e})    
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
          xl: "84px",
          // xl: "160px",
          "2xl": "198px",
        }}
        ml={{ sm: "10px", mm: "18px", md: "84px", xl: "150px", "2xl": "200px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "16px",
            mm: "16px",
            md: "18px",
            xl: "22px",
            "2xl": "48px",
          }}
          color={"#FFF"}
        >
          <Text mb={{sm:"20px", md:"2px", xl:"-5px"}}>2</Text>
          <Text mr={{sm:"5px"}} mb={{sm:"20px", md:"2px", xl:"-5px"}}><BiRightArrowAlt /></Text>
          <Text mx={{sm:"5px", mm: "6px", md: "16px", xl:"12px", "2xl": "20px" }}>
          Wow, that’s a wonderful place! Now, what’s your gender?
          </Text>
        </Box>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{
          sm: "14px",
          mm: "14px",
          md: "16px",
          xl: "16px",
          "2xl": "32px",
        }}
        fontWeight={380}
        ml={{ sm: "50px", mm: "55px", md: "135px", xl: "205px", "2xl": "310px" }}
        mb={{ sm: "24px", md: "5px", xl: "2px" }}
        mt={{ sm: "6px", md: "4px", xl: "10px", "2xl": "16px" }}
      >
        Which of these do you identify with?
      </Box>
      <Box color={"#A5BFFF"} fontSize={"32px"} fontWeight={380} mb={5}></Box>
      <Box
        ml={{ sm: "-10px", mm: "-5px", md: "72px", xl: "140px", "2xl": "250px" }}
        mt={{ sm: "-30px", mm: "-8" }}
      >
        <Flex
          m={{ sm: "65px", mm: "65px" }}
          gap={{ sm: "12px", mm: "10px", md: "12px", "2xl":"30px" }}
        >
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ mm: "2000px", md: "160px", xl: "200px", "2xl": "310px" }}
            height={{ mm: "130px", md: "140px", xl: "200px", "2xl": "320px" }}
            fontSize={{ sm: "10px", mm:"12px", md: "14px", xl: "18px", "2xl": "24px" }}
            
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "20px", xl: "20px", "2xl": "50px" }}
              mt={{ md: "12px", xl: "20px" }}
              onClick={(e) => handleSubmit("male")}
              cursor={"pointer"}
            >
              <Image
                src={"/images/boy.gif"}
                alt="male"
                width={{ md: "200px", xl: "240px", "2xl": "250px" }}
                height={{ md: "90px", xl: "130px", "2xl": "200px" }}
              />
              <Text mt={{sm:"8px", mm:"10px", ml:"3px"}} textAlign={"center"} color="#FFF">
                Male
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ mm: "2000px", md: "160px", xl: "200px", "2xl": "310px" }}
            height={{ mm: "130px", md: "140px", xl: "200px", "2xl": "320px" }}
            fontSize={{ sm: "10px", mm:"12px", md: "14px", xl: "18px", "2xl": "24px" }}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "20px", xl: "20px", "2xl": "50px" }}
              mt={{ md: "12px", xl: "20px" }}
              onClick={() => handleSubmit("female")}
              cursor={"pointer"}
            >
              <Image
                src={"/images/girl.gif"}
                alt="male"
                width={{ md: "200px", xl: "240px", "2xl": "250px" }}
                height={{ md: "90px", xl: "130px", "2xl": "200px" }}
              />
              <Text mt={{sm:"8px", mm:"10px", ml:"3px"}} textAlign={"center"} color="#FFF">
                Female
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Question2;
