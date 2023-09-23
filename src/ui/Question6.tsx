import Question from "./dropdown6";
import React from 'react'
import { Box, Flex, Heading, Image, Text, Input } from "@chakra-ui/react"
import { BiRightArrowAlt } from 'react-icons/bi'
import {useEffect, useState} from "react"
import axios from "axios"
import { useFormData } from "@/context/context";
// import { useFormData } from "../context/context";
const Question6 = ({ data }: any) => {
    const [datas, setDatas] = useState([]);
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

    return (
        <Flex height={{ sm: "100vh" }} backgroundColor={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
      <Box height={{ sm: "60%", mm: "70%", md: "70%", lg: "60%", xl: "60%", "2xl": "70%" }}
        width={{ sm: "90%", md: "85%", lg: "", xl: "85%", "2xl": "85%" }}
        margin={{ sm: "auto" }}
        display={"flex"} alignItems={"start"} 
        gap={{ sm: "12px", md: "20px", lg: "20px", xl: "30px", "2xl": "25px" }}>

        <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} >
          <Text fontSize={{ sm: "16px", ml: "16px", md: "22px", lg: "30px", xl: "40px", "2xl": "48px" }}
            textColor={"#FFF"}>6</Text>
          <Text fontSize={{ sm: "12px", ml: "12px", md: "14px", lg: "20px", xl: "28px", "2xl": "35px" }}
            textColor={"#FFF"}>
            <BiRightArrowAlt />
          </Text>
        </Box>

        <Box display={"flex"} flexDir={"column"} >
          <Box>
            <Text fontSize={{ sm: "16px", ml: "16px", md: "22px", lg: "30px", xl: "40px", "2xl": "48px" }} 
            textColor={"#FFF"} > What’s your monthly household income?</Text>
            <Text fontSize={{ sm: "10px", ml: "10px", md: "14px", lg: "20px", xl: "28px", "2xl": "32px" }}
              textColor={"#A5BFFF"}
              paddingTop={{ sm: "4px", md: "10px", lg: "", xl: "15px", "2xl": "15px" }}
            >We won’t tell the Government so don’t worry!</Text>
          </Box>
          <Box>
            <Box display={{ sm: "flex" }}
              gap={{ sm: "10px", md: "", lg: "", xl: "30px", "2xl": "30px" }}
              paddingY={{ sm: "15px", mm: "20px", md: "30px", lg: "30px", xl: "34px", "2xl": "64px" }}>
              <Question />
            </Box>
          </Box>
        </Box>


        <Image src="/images//cash.gif" w={{"2xl": "350px", md: "180px", ml: "100px", sm: "80px" }} mt={{"2xl": "-174px", lg: "-92px", sm:"-24px", mm:"-32px", md:"-94px"}} ml={{"2xl": "94px", lg:"42px", md:"-12px", mm:"-22px", sm:"-24px"}} />


      </Box>

    </Flex>
    )
}

export default Question6