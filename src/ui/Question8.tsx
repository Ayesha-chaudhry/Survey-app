"use client"
import { useFormData } from "@/context/context";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

type optionType = {
  opt_no: string;
  option: string;
};

const option: optionType[] = [
  { opt_no: "A", option: "Couldn't afford better education" },
  { opt_no: "B", option: "Gender bias and discrimination" },
  { opt_no: "C", option: "Limited job opportunities" },
  { opt_no: "D", option: "Limited career growth" },
  { opt_no: "E", option: "Sacrificed career for family" },
  { opt_no: "F", option: "None of the above" },
];
const Question8 = () => {
  const {step, setStep, formData, setFormData,selectedgender} = useFormData()
  const [style, setStyle] = useState(false);
  function handleSubmit(e:string){
    setStyle(true)
    setFormData({...formData, careerchallanges: e})
    if (formData.selectedgender == "male"){
      setStep(12)
  }
  else if (formData.selectedgender == "female") {
    setStep(12)

  }
      // setStep(12)
    
    
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
        mt={{ sm: "80px", md: "30px", xl: "44px", "2xl": "139px" }}
        ml={{ sm: "12px", mm:"18px", md: "84px", xl: "150px", "2xl": "162px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "14px",
            mm:"14px",
            md: "18px",
            xl: "24px",            
            "2xl": "48px",
          }}
          color={"#FFF"}
        >
          <Text>8</Text>
          <BiRightArrowAlt />
          <Text mx={{ sm: "5px", mm:"10px", md: "16px", xl:"20px", "2xl": "48px" }}>
            What are some of the biggest challenges
          </Text>
        </Box>
        <Text
          fontSize={{ sm: "14px", mm:"14px", md: "18px", xl: "20px", "2xl": "48px" }}
          ml={{ sm: "28px", mm:"36px", md: "48px", xl: "62px", "2xl": "130px" }}
          color={"#FFF"}
        >
          you face in your career?
        </Text>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{ sm: "12px", md: "16px", xl: "18px", "2xl": "32px" }}
        fontWeight={380}
        ml={{ sm: "38px", mm:"54px", md: "130px", xl: "212px", "2xl": "280px" }}
        mb={{ sm: "3px", md: "5px", xl: "2px" }}
        mt={{ sm: "6px", md: "4px", xl: "4px", "2xl": "8px" }}
      >
        You can select as many options as you like.
      </Box>

      <Box mt={{ sm: "24px", md: "24px", xl: "34px", "2xl": "50px" }}>
        {option.map((item, id: number) => {
          return (
            <Box
            key={id}
              w={{ sm: "250px", md: "300px", xl: "440px", "2xl": "600px" }}
              background={"rgba(253, 255, 252, 0.10)"}
              _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
              color={"#FFF"}
              ml={{ sm: "35px", mm:"54px", md: "132px", xl: "200px", "2xl": "280px" }}
              display={"flex"}
              alignItems={"center"}
              gap={{ sm: "6px", md: "8px", xl: "20px" }}
              border={"solid 1px #FFF"}
              p={{ sm: "10px", md: "10px", xl: "10px", "2xl": "20px" }}
              my={{ sm: "6px", md: "8px", xl: "12px", "2xl": "14px" }}
              borderRadius={{ sm: "4px" }}
              fontWeight={{ sm: "normal" }}
              onClick={(e) => handleSubmit(item.option)}
              cursor={"pointer"}
            >
              <Box
                fontSize={{ sm: "8px", md: "12px", xl: "12px", "2xl": "20px" }}
                border={"solid 1px #FFF"}
                borderRadius={{ sm: "2px" }}
                px={{ sm: "3px", md: "4px", xl: "8px", "2xl": "12px" }}
                mx={{ sm: "2px", md: "4px", xl: "10px" }}
                my={{ sm: "2px", md: "4px", xl: "6px", "2xl": "8px" }}
              >
                {item.opt_no}
              </Box>
              <Box fontSize={{ sm: "10px", md: "14px", xl: "16px", "2xl": "24px" }} >
                {item.option}

              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Question8;
