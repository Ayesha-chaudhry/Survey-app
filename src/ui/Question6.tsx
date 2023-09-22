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
        <Flex fontFamily={"Lemonada"} height={{sm: "100vh"}} backgroundColor={"#7EA2FF"} className='initialPosition' transitionDuration={'1000ms'} transform={'translateY(350px)'} opacity={`${style ? '0' : '1'}`}>
            <Box height={{sm: "60%", mm: "70%", md: "70%", lg: "", xl: "60%", "2xl": "70%"}} 
            width={{sm: "90%", mm: "80%", md: "85%", lg: "", xl: "85%", "2xl": "85%"}} 
            margin={{sm: "auto"}} 
            // backgroundColor={"white"}
            display={"flex"} alignItems={"start"} gap={{sm: "10px", md: "12px", lg: "", xl:"25px", "2xl": "25px"}}>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text fontSize={{ sm: "14px",
            md: "18px",
            lg: "24px",
            "2xl": "48px" }} textColor={"#FFF"}
                    >6</Text>
                    <Text fontSize={{ sm: "14px",
            md: "18px",
            lg: "24px",
            "2xl": "48px" }} textColor={"#FFF"}>
                        <BiRightArrowAlt />
                    </Text>
                </Box>

                <Box >
                    <Box>
                        <Text fontSize={{sm: "14px",
            md: "18px",
            lg: "24px",
            "2xl": "48px"  }} 
                        textColor={"#FFF"}
                        
                        paddingX={{sm: "1px", md: "2px", lg:"0px", xl:"15px"}}
                        >What’s your monthly household income?</Text>
                        <Text fontSize={{ sm: "10px", mm: "12px", md: "16px", lg: "", xl: "24px", "2xl": "32px" }} 
                        textColor={"#A5BFFF"}
                            paddingTop={{ sm: "4px", md: "10px", lg: "", xl: "12px", "2xl": "15px" }}
                            pl={{ sm: "0px", md: "2px", lg: "3px", xl: "18px", "2xl": "0px" }} >We won’t tell the Government so don’t worry!</Text>
                    </Box>
                    <Box display={{sm:"flex"}}
                        gap={{ sm: "10px", md: "", lg: "", xl: "30px", "2xl": "30px" }} 
                        paddingY={{ sm: "15px", mm: "20px", md: "30px", lg: "", xl: "34px", "2xl": "64px" }}
                        pl={{ sm: "0px", md: "0px", lg: "3px", xl: "18px", "2xl": "0px" }}>
                            
                        <Question/>
                    </Box>
                </Box>
            </Box>

        </Flex>
    )
}

export default Question6