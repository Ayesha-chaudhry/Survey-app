"use client"
import { useFormData } from "@/context/context";
import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiMiniClock } from "react-icons/hi2";
const Gb1 = () => {

  const { step, setStep, formData, setFormData, addData } = useFormData()
    const [style, setStyle] = useState(false)

    
    useEffect(() => {
      const elements = document.querySelectorAll(
        ".initialPosition"
      );
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
    }, [])

    function handleSubmit(){
      setFormData({...formData,global:"global"})
      setStyle(true)
      setTimeout(() => {
          setStep(2)
      }, 500);
  }

  return (
   <Box
   className="initialPosition"
      transitionDuration={"1000ms"}
      transform={`${style ? "translateY(0px)" : "translateY(350px)"}`}
      opacity={`${style ? "0" : "1"}`}>
    <Box
      mt={{
        sm: "100px",
        mm: "90px",
        ml: "90px",
        md: "50px",
        xl: "70px",
        "2xl": "246px",
      }}
      mx={{ sm: "20px", mm: "30px",ml:"40px", md: "70px", xl: "300px", "2xl":"274px" }}
    >
      <Box
        color={"#FFF"}
        fontFamily={"McLaren"}
        fontSize={{
          sm: "12px",
          mm: "14px",
          md: "28px",
          xl: "28px",
          "2xl": "48px",
        }}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"normal"}
      >
        <Text
          mx={{ sm: "12px", mm: "14px", md: "30px", xl: "28px", "2xl": "60px" }}
        >
          Global Insights: Education & Empowerment
        </Text>
        <Text>Because changing the world is serious business,</Text>
        <Text
          ml={{ sm: "50px", mm: "58px", md: "115px", xl: "128px", "2xl": "190px" }}
        >
          but we promise our survey isn't!
        </Text>
      </Box>
      <Box
        mt={{ sm: "10px", mm: "22px", xl: "26px", "2xl": "50px" }}
        fontSize={{
          sm: "11px",
          mm: "12px",
          md: "22px",
          xl: "24px",
          "2xl": "40px",
        }}
      >
        <Text
          color={"#A5BFFF"}
          ml={{ sm: "2px", mm: "12px", md: "50px", xl: "40px", "2xl": "68px" }}
        >
          This survey is completely anonymous & confidential
        </Text>
      </Box>
      <Box
          mx={{
            sm: "40px",
            mm:"70px",
            ml: "60px",
            md: "150px",
            xl: "180px",
            "2xl": "295px",
          }}
          mt={{ sm: "18px", mm: "26px", md: "20px", xl: "22px", "2xl": "50px" }}
          h={{ xl: "40px" }}
          w={{
            sm: "200px",
            ml: "210px",
            md: "300px",
            xl: "270px",
            "2xl": "529.577px",
          }}
          pt={{ sm: "4px", md: "6px", "2xl": "14px" }}
          pb={{ sm: "4px", md: "6px", "2xl": "50px" }}
          bg={"#FFF"}
          onClick={() => {
            handleSubmit();
          }}
        >
          <Text
          // height={"46px"}
            px={{ sm: "0px", ml: "6px", xl: "10px", "2xl": "16.08" }}
            fontSize={{
              sm: "12px",
              ml: "12px",
              md: "18px",
              xl: "16px",
              "2xl": "32px",
            }}
            fontWeight={"400px"}
            lineHeight={"normal"}
            fontStyle={"normal"}
            textAlign={"center"}
            color={"#8391B4"}
            cursor={"pointer"}
          >
            Ready to 'Insightify' the world?
          </Text>
        </Box>
      <Box
        fontSize={{ sm: "6px", mm: "8px", md: "14px", xl: "18px", "2xl": "16px" }}
        mx={{ sm: "110px", mm: "123px", ml:"135px", md: "230px", xl: "240px", "2xl": "509px" }}
        // ml={{mm:"140px"}}
        mt={{ sm: "5px", xl: "5px", "2xl":"15px" }}
        display={"flex"}
        alignItems={"center"}
        color={"#FFF"}
      >
        <Box>
          <HiMiniClock />
        </Box>
        <Text mx={{ sm: "3px", mm: "0px", md: "12px", xl: "10px", "2xl": "12px" }}>
          Takes 3 minutes
        </Text>
      </Box>
      <Box>
        <Image
          mx={{
            sm: "100px",
            mm: "120px",
            md: "240px",
            xl: "270px",
            "2xl": "490px",
          }}
          src={"/images/earth.gif"}
          width={{
            sm: "80px",
            mm: "100px",
            md: "120px",
            xl: "140px",
            "2xl": "200px",
          }}
        />
      </Box>
      <Text
        color={"#A5BFFF"}
        mx={{ sm: "35px", mm: "52px", ml:"60px", md: "130px", xl: "160px", "2xl": "366px" }}
        fontSize={{
          sm: "12px",
          mm: "12px",
          md: "20px",
          xl: "20px",
          "2xl": "24px",
        }}
      >
        #PartyforProgress #ColortheFuture
      </Text>
    </Box>
    </Box>
  );
};

export default Gb1;
