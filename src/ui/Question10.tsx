import { useFormData } from "@/context/context";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

type optionType = {
  opt_no: string;
  option: string;
};

const option: optionType[] = [
  { opt_no: "A", option: "Paid less than male colleagues" },
  { opt_no: "B", option: "Been harassed at work" },
  { opt_no: "C", option: "Not promoted because of gender bias" },
  { opt_no: "D", option: "I've never faced any of these issues" },
];
const Question10 = () => {
  const {step, setStep, formData, setFormData} = useFormData();
  const [style, setStyle] = useState(false);
function handleSubmit(e:string){
  setStyle(true)
  setFormData({...formData, experience: e})
  setStep(14)
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
        mt={{ sm: "80px", md: "60px", xl: "58px", "2xl": "139px" }}
        ml={{ sm: "10px", md: "84px", xl: "150px", "2xl": "162px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "14px",
            mm: "14px",
            md: "18px",
            xl: "20px",
            "2xl": "48px",
          }}
          color={"#FFF"}
        >
          <Text mb={{sm:"34px", ml:"16px", xl:"-4"}}>10</Text>
          <Text mb={{sm:"34px", ml:"16px", xl:"-4"}}><BiRightArrowAlt /></Text>
          <Text mx={{ sm: "5px", md: "16px", "2xl": "20px" }} mb={{sm:"16px", xl:"-4"}}>
            In your experience, did you ever face any of following?
          </Text>
        </Box>
        
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{ sm: "10px", mm: "12px", md: "16px", xl: "18px","2xl": "32px" }}
        fontWeight={380}
        ml={{ sm: "42px", md: "134px", xl: "210px","2xl": "284px" }}
        mb={{ sm: "3px", mm: "-6px", md: "5px", xl: "2px" }}
        mt={{ sm: "-8px", mm: "-12px", md: "-10px", xl: "18px","2xl": "30px" }}
      >
        Please answer based on your own experience.
      </Box>

      <Box mt={{ sm: "36px", md: "28px", xl: "44px","2xl": "30px" }}>
        {option.map((item, id: number) => {
          return (
            <Box
            key={id}
              w={{ sm: "250px", md: "300px", xl: "400px","2xl": "700px" }}
              background={"rgba(253, 255, 252, 0.10)"}
              _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
              color={"#FFF"}
              ml={{ sm: "35px", mm: "42px", md: "132px", xl: "210px","2xl": "284px" }}
              display={"flex"}
              alignItems={"center"}
              gap={{ sm: "6px", md: "8px", xl: "12px" }}
              border={"solid 1px #FFF"}
              p={{ sm: "10px", md: "10px", xl: "10px", "2xl": "20px" }}
              my={{ sm: "8px", md: "8px", xl: "12px", "2xl": "14px" }}
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
                my={{ sm: "2px", md: "4px", xl: "10px", "2xl": "10px" }}
              >
                {item.opt_no}
              </Box>
              <Box fontSize={{ sm: "10px", md:"14px", xl: "16px", "2xl": "24px" }}>
                {item.option}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Question10;
