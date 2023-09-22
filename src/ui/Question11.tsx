import { useFormData } from "@/context/context";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Question11 = () => {
  const [style, setStyle] = useState(false);
  const {step, setStep, formData, setFormData} = useFormData()
  function handleSubmit(e:string){
    setStyle(true)
    setStep(15)
    setFormData({...formData, easiertowork: e})    
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
          sm: "50px",
          mm: "90px",
          md: "70px",
          xl: "84px",
          "2xl": "198px"
        }}
        ml={{ sm: "12px", mm: "20px", md: "84px", xl: "160px", "2xl": "162px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "14px",
            mm: "14px",
            md: "18px",
            xl: "20px",
            "2xl": "48px"
          }}
          color={"#FFF"}
        >
          <Text mb={{ sm: "21px", mm: "2px", ml:"18px", md: "8px" }}>11</Text>
          <Text mb={{ sm: "21px", mm: "2px", ml:"18px", md: "8px" }}>
            <BiRightArrowAlt />
          </Text>
          <Text mx={{ sm: "4px", mm: "10px", md: "8px", "2xl": "20px" }}
          mb={{ml:"20px", md:"10px"}}>
            Who do you think is more easy to work with?
          </Text>
        </Box>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{
          sm: "12px",
          mm: "12px",
          md: "16px",
          xl: "18px",
          "2xl": "32px",
        }}
        fontWeight={380}
        ml={{ sm: "44px", mm: "60px", md: "130px", xl: "210px", "2xl": "285px" }}
        mb={{ sm: "40px", md: "5px", xl: "2px", "2xl": "16px" }}
        mt={{ sm: "6px", mm:"3px", md: "4px",ml:"-20px", xl: "2px", "2xl": "16px" }}
      >
        Please answer based on your own experience.
      </Box>
      <Box color={"#A5BFFF"} fontSize={"32px"} fontWeight={380} mb={5}></Box>
      <Box
        ml={{ sm: "2px", mm: "-4px", md: "64px", xl: "145px", "2xl": "225px" }}
        mt={{ sm: "-30px", mm: "-8", "2xl": "-2px" }}
      >
        <Box display={{mm:"flex"}}
          m={{ sm: "45px", mm: "65px" }}
          gap={{ sm: "12px", mm: "4px", md: "10px", "2xl": "30px" }}
          
        >
          <Box 
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{
              sm: "150px",
              mm: "2500px",
              md: "120px",
              xl: "160px",
              "2xl": "350px",
            }}
            height={{
              sm: "100px",
              mm: "120px",
              md: "155px",
              xl: "190px",
              "2xl": "350px",
            }}
            mb={{sm:"12px"}}
            fontSize={{ sm: "10px", md: "14px", xl: "16px", "2xl": "24px" }}
            onClick={(e) => handleSubmit("Male")}
            cursor={"pointer"}
          >
            <Box
              m={{ sm: "30px", mm: "10px", md: "10px", xl: "10px", "2xl": "60px" }}
              mt={{ sm:"8px", md: "12px", xl: "20px" }}
              
            >
              <Image
                src={"/images/boy.gif"}
                alt="male"
                width={{ sm: "150px",mm:"150", md: "150px", xl: "240px", "2xl": "250px" }}
                height={{ mm: "70px", md: "90px", xl: "130px", "2xl": "200px" }}
              />
              <Text
                mt={{ sm: "2px", mm: "12px", xl:"4px" }}
                textAlign={"center"}
                color="#FFF"
              >
                Men
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{
              sm: "150px",
              mm: "2500px",
              md: "120px",
              xl: "160px",
              "2xl": "350px",
            }}
            height={{
              sm: "100px",
              mm: "120px",
              md: "155px",
              xl: "190px",
              "2xl": "350px",
            }}
            mb={{sm:"12px"}}
            fontSize={{ sm: "10px", md: "14px", xl: "16px", "2xl": "24px" }}
            onClick={(e) => handleSubmit("Female")}
            cursor={"pointer"}
          >
            <Box
              m={{ sm: "30px", mm: "10px", md: "10px", xl: "10px", "2xl": "60px" }}
              mt={{ sm:"8px", md: "12px", xl: "20px" }}
              
            >
              <Image
                src={"/images/girl.gif"}
                alt="male"
                width={{ sm: "150px", md: "190px", xl: "240px", "2xl": "250px" }}
                height={{ mm: "70px", md: "90px", xl: "130px", "2xl": "200px" }}
              />
              <Text
                mt={{ sm: "2px", mm: "14px", xl:"4px" }}
                textAlign={"center"}
                color="#FFF"
              >
                Women
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{
              sm: "150px",
              mm: "2500px",
              md: "120px",
              xl: "160px",
              "2xl": "350px",
            }}
            height={{
              sm: "120px",
              mm: "120px",
              md: "155px",
              xl: "190px",
              "2xl": "350px",
            }}
            fontSize={{
              sm: "10px",
              mm: "9px",
              md: "14px",
              xl: "16px",
              "2xl": "24px",
            }}
            onClick={(e) => handleSubmit("It doesn't matter")}
            cursor={"pointer"}
          >
            <Box
              m={{ sm: "30px", mm: "10px", md: "10px", xl: "10px", "2xl": "60px" }}
              mt={{ sm:"8px", md: "12px", xl: "20px" }}
              
            >
              <Image
                src={"/images/dm.gif"}
                alt="male"
                width={{ sm: "150px", md: "190px", xl: "240px", "2xl": "250px" }}
                height={{ mm: "70px", md: "90px", xl: "130px", "2xl": "200px" }}
              />
              <Text mt={{sm:"2px", mm:"6px"}} textAlign={"center"} color="#FFF">
                It doesn't matter
              </Text>
            </Box>
          </Box>
        </Box>  
      </Box>
    </Box>
  );
};

export default Question11;
