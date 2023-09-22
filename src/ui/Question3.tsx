import { useFormData } from "@/context/context";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

type optionType = {
  opt_no: string;
  option: string;
};

type Option = {
  value: string;
  opt_no?: string;
  label: string;
};
const option: optionType[] = [
  { opt_no: "A", option: "under 18 year old" },
  { opt_no: "B", option: "18-24 year old" },
  { opt_no: "C", option: "25-34 year old" },
  { opt_no: "D", option: "35-44 year old" },
  { opt_no: "E", option: "45-54 year old" },
  { opt_no: "F", option: "55 year old and above" },
];

const Question3 = () => {
  const { step, setStep, formData, setFormData } = useFormData();
  const [style, setStyle] = useState(false);

  function handleSubmit(e: string) {
    setStyle(true);
    setStep(6);
    setFormData({ ...formData, age: e });
  }

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
      transform={"translateY(350px)"}
    >
      <Box
        mt={{ sm: "80px", md: "30px", lg: "44px", "2xl": "120px"}}
        ml={{ sm: "10px", mm:"18px", md: "84px", lg: "150px", "2xl": "180px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "14px",
            md: "18px",
            lg: "24px",
            "2xl": "48px",
           
          }}
          color={"#FFF"}
        >
          <Text>3</Text>
          <Text mr={{sm:"6px"}}><BiRightArrowAlt /></Text>
          <Text mx={{ sm: "2px", mm:"7px", md: "18px", "2xl": "16px" }}>
          Cool! Which age group do you belong to?
          </Text>
        </Box>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{ sm: "10px", md: "16px", lg: "18px", "2xl": "32px" }}
        fontWeight={380}
        ml={{ sm: "40px", mm:"55px", md: "136px", lg: "212px", "2xl": "280px" }}
        mb={{ sm: "3px", md: "5px", lg: "2px" }}
        mt={{ sm: "6px", md: "4px", lg: "0px", "2xl": "8px" }}
      >
        Could you let us in on which age group you're part of?
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{ sm: "10px", md: "16px", lg: "18px", "2xl": "32px" }}
        fontWeight={380}
        ml={{ sm: "40px", mm:"55px", md: "136px", lg: "212px", "2xl": "280px" }}
        mb={{ sm: "3px", md: "5px", lg: "2px" }}
        mt={{ sm: "6px", md: "4px", lg: "0px", "2xl": "8px" }}
      >
        You know, the chapter of life you're currently flipping through?
      </Box>

      <Box mt={{ sm: "24px", md: "24px", lg: "34px", "2xl": "50px" }}>
        {option.map((item, id: number) => {
          return (
            <Box
            key={id}
              w={{ sm: "250px", md: "300px", lg: "440px", "2xl": "600px" }}
              background={"rgba(253, 255, 252, 0.10)"}
              _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
              color={"#FFF"}
              ml={{ sm: "40px", mm:"55px", md: "136px", lg: "210px", "2xl": "270px" }}
              display={"flex"}
              alignItems={"center"}
              gap={{ sm: "6px", md: "8px", lg: "20px" }}
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
                px={{ sm: "3px", md: "4px", lg: "8px", "2xl": "12px" }}
                mx={{ sm: "2px", md: "4px", lg: "10px" }}
                my={{ sm: "2px", md: "4px", lg: "6px", "2xl": "8px" }}
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

export default Question3;
