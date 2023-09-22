import { useFormData } from "@/context/context";
import { Box, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

type optionType = {
  opt_no: string;
  option: string;
};

const option: optionType[] = [
  { opt_no: "A", option: "High School" },
  { opt_no: "B", option: "Bachelor’s" },
  { opt_no: "C", option: "Master’s" },
  { opt_no: "D", option: "Doctorate" },
];
const Question4 = () => {
  const {step, setStep, formData, setFormData} = useFormData()
  const [style, setStyle] = useState(false);
  function handleSubmit(e: string) {
    setStyle(true);
    setStep(7);
    setFormData({ ...formData, education: e });
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
          md: "80px",
          lg: "104px",
         "2xl": "139px",
          
        }}
        ml={{
          sm: "10px",
          mm:"18px",
          md: "84px",
          lg: "150px",
         "2xl": "162px"
        }}
      >
        <Box
          display={"flex"}
          // alignItems={"center"}
          fontSize={{
            sm: "14px",
            md: "18px",
            lg: "20px",
            "2xl": "48px",
            
          }}
          color={"#FFF"}
        >
          <Text mt={{sm:"1px"}}>4</Text>
          <Box mt={{sm:"3px", md: "4px", lg: "8px", "2xl": "10px" }}>
            <BiRightArrowAlt />
          </Box>
          <Text mx={{ sm: "5px",  md: "16px", "2xl": "20px" }}>
            What’s your highest level of education?
          </Text>
          {/* sm: "40px", mm:"55px", */}
          <Box
            mt={{ sm: "-5px",mm:"-14px", md: "-6", lg: "-52px", "2xl": "-80px" }}
            ml={{ sm: "-16px",mm:"-34px", md: "-32px", lg: "-80px", "2xl": "-15px" }}
            
          >
            <Image
              src="images/Results 1.png"
              width={{
                sm: "100px",
                md: "180px",
                lg: "250px",
                "2xl": "350px",
              }}
              // height={{ "2xl": "300px" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{ sm: "10px", mm:"12px", md: "16px", lg: "18px", "2xl": "32px" }}
        fontWeight={380}
        ml={{ sm: "40px",mm:"48px", md: "130px", lg: "200px", "2xl": "267px" }}
        mb={{ sm: "28px",mm:"2px", md: "58px", lg: "50px" }}
        mt={{ sm: "-10px",mm:"-48px", md: "-104px", lg: "-128px", "2xl": "-140px" }}
      >
        Please select the right option
      </Box>
      <Box mt={{ sm: "24px",mm:"34px", md: "28px", lg: "34px" }}>
        {option.map((item, id: number) => {
          return (
            <Box
            key={id}
              w={{ sm: "250px", md: "300px", lg: "340px", "2xl": "500px" }}
              background={"rgba(253, 255, 252, 0.10)"}
              _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
              color={"#FFF"}
              ml={{ sm: "35px", mm:"48px", md: "132px", lg: "200px", "2xl": "257px" }}
              display={"flex"}
              alignItems={"center"}
              gap={{ sm: "6px", md: "8px", lg: "20px", "2xl": "25px" }}
              border={"solid 1px #FFF"}
              p={{ sm: "10px", md: "10px", lg: "10px", "2xl": "20px" }}
              my={{ sm: "6px", md: "8px", lg: "12px", "2xl": "14px" }}
              borderRadius={{ sm: "4px" }}
              fontWeight={{ sm: "normal" }}
              onClick={(e) => handleSubmit(item.option)}
              cursor={"pointer"}
            >
              <Box
                fontSize={{ sm: "8px", md: "12px", lg: "12px", "2xl": "20px" }}
                border={"solid 1px #FFF"}
                borderRadius={{ sm: "2px" }}
                px={{ sm: "3px", md: "4px", lg: "8px" }}
                mx={{ sm: "2px", md: "4px", lg: "10px" }}
                my={{ sm: "2px", md: "4px", lg: "6px" }}
              >
                {item.opt_no}
              </Box>
              <Box fontSize={{ sm: "10px", md: "14px", lg: "16px", "2xl": "24px" }}>
                {item.option}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Question4;
