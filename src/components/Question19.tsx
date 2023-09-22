import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Dropdown19 from "../ui/Dropdown19";

const Question19 = () => {
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
    <Box  width={{sm:"auto", lg:"1278px", "2xl":"1728px"}} height={{sm: "auto", lg: "571px", "2xl": "1088px"}}   display={{lg:"flex"}}  justifyContent={"space-around"}
    className="initialPosition"
      transitionDuration={"1000ms"}
      transform={`${style ? "translateY(0px)" : "translateY(350px)"}`}
      opacity={`${style ? "0" : "1"}`}>
      {/* left side */}
      <Box bg={"#FFF"} width={{"2xl":"1137px"}}  >
        <Image mt={"0px"} mx={"auto"} src="/images/Thankyou.svg" width={{lg: "150px",sm:"100px" , "2xl":"220px"}} height={{lg: "157px", sm:"100px" ,"2xl":"220px"}} />
        <Box ml={{"2xl":"130px",sm:"10px"}} mr={{lg:"200px", sm:"10px"}} mb={{ "2xl":"235px",sm:"10px"} }fontSize={{lg: "15px",sm:"10px" , "2xl":"30px"}} color={"#7EA2FF"}>
        <Text mt={{"2xl":"82px",sm:"22px"}}>
          You're all done! 
        </Text>
        {<br/>}
        <Text>If you would like to stay in the loop on our activities, </Text>
        <Text>please provide your contact information so we can stay</Text>
        <Text>in touch and update you on the latest developments.</Text>
        </Box>
      </Box>
      {/* Rigth side */}
      <Box bg={"#7EA2FF"} width={{lg: "500px","2xl":"567px",sm:"200px"}} ml={{lg: "57px",sm:"40px"}}>
        <Box display={"flex"} flexDirection={"column"} gap={{"2xl": "50px"}}>
            <Text fontSize={{"2xl": "36px"}} color={"#FFF"} mx={{lg: "auto", "2xl":'auto'}} mt={{lg: "50px", "2xl":"151px",sm:"10px"}}>LET’S STAY IN TOUCH!</Text>
            </Box>
        <Box mx={{lg: "80px", "2xl":"97px"}} fontSize={{ sm: "10px", lg: "20px", "2xl": "24px", xl: "32px" }}>
        <Text  mt={{lg:"69px",}} color={"#FFF"} >Full Name</Text>
        <Input
            placeholder="Hira Khan"
            _placeholder={{ color: "#A5BFFF" }}
            px={"none"}
            fontSize={{ sm: "10px", lg: "20px", "2xl": "24px", xl: "32px" }}
            border={"0"}
            rounded={"none"}
            borderBottom={"1px"}
            borderColor={""}
            textColor={"#FFF"}
          ></Input>
          <Text mt={{lg: "40px", "2xl":"50px"}}  color={"#FFF"}>Email</Text>
        <Input
            placeholder="example@gmail.com"
            _placeholder={{ color: "#A5BFFF" }}
            px={"none"}
            fontSize={{ sm: "10px", lg: "20px", "2xl": "24px", xl: "32px" }}
            border={"0"}
            rounded={"none"}
            borderBottom={"1px"}
            borderColor={""}
            textColor={"#FFF"}
          ></Input>
          <Text mt={{lg: "40px", "2xl":"50px"}}  color={"#FFF"}>Phone Number</Text>
        <Box display={"flex"} gap={"30px"}>
        
          <Dropdown19/>
          <Input
            placeholder="0300-123-4567"
            _placeholder={{ color: "#A5BFFF" }}
            px={"none"}
            fontSize={{ sm: "10px", lg: "20px", "2xl": "24px", xl: "32px" }}
            border={"0"}
            rounded={"none"}
            borderBottom={"1px"}
            borderColor={""}
            textColor={"#FFF"}
          ></Input>
        </Box>
          <Box mt={{lg: "50px", "2xl":"72px",sm:"10px"}}>
          <Button ml={{lg:"50px", "2xl":"auto",sm:"50px"}}  width={{lg: "250px", "2xl":"376px"}} height={{lg: "50px", "2xl":"75px",sm:"20px"}} color={"#7EA2FF"} fontSize={{"2xl":"32px"}}>Submit</Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Question19;
