import { useFormData } from "@/context/context";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

type optionType = {
  opt_no: string;
  option: string;
};

const option: optionType[] = [
  { opt_no: "A", option: "Son" },
  { opt_no: "B", option: "Daughter" },
  { opt_no: "C", option: "Whoever has more potential" },
];

const Question15 = () => {
  const [style, setStyle] = useState(false);
  const { step, setStep, formData, setFormData } = useFormData();
  function handleSubmit(e: string) {
    setStyle(true);
    setFormData({ ...formData, sendschool: e });
    setStep(19);
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
        mt={{ sm: "80px", md: "70px", xl: "44px", "2xl": "139px"}}
        ml={{ sm: "12px", md: "84px", xl: "150px", "2xl": "162px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "12px",
            md: "18px",
            xl: "24px",
            "2xl": "48px"
          }}
          color={"#FFF"}
        >
          <Text>15</Text>
          <BiRightArrowAlt />
          <Text mx={{ sm: "5px", md: "16px", "2xl": "30px" }}>
            If you could only send your son or daughter to
          </Text>
        </Box>
        <Text
          fontSize={{ sm: "12px", md: "18px", xl: "20px", "2xl": "48px" }}
          ml={{ sm: "28px", md: "54px", xl: "66px", "2xl": "130px" }}
          color={"#FFF"}
        >
          school, which would it be?
        </Text>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{ sm: "10px", md: "16px", xl: "18px", "2xl": "32px" }}
        fontWeight={380}
        ml={{ sm: "40px",mm:"40px", md: "136px", xl: "216px", "2xl": "275px" }}
        mb={{ sm: "3px", md: "5px", xl: "2px" }}
        mt={{ sm: "6px", md: "4px", xl: "10px", "2xl": "30px" }}
      >
        Please select the right option.
      </Box>

      <Box mt={{ sm: "36px", md: "52px", lg: "44px", xl: "90px", "2xl": "30px" }}>
        {option.map((item, id: number) => {
          return (
            <Box
            key={id}
              w={{ sm: "200px", md: "300px", xl: "340px", "2xl": "550px" }}
              background={"rgba(253, 255, 252, 0.10)"}
              _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
              color={"#FFF"}
              ml={{ sm: "35px", md: "132px", xl: "216px", "2xl": "275px" }}
              display={"flex"}
              alignItems={"center"}
              gap={{ sm: "6px", md: "8px", xl: "20px" }}
              border={"solid 1px #FFF"}
              p={{ sm: "10px", md: "10px", xl: "10px", "2xl": "20px" }}
              my={{ sm: "8px", md: "8px", xl: "12px", "2xl": "14px" }}
              borderRadius={{ sm: "4px" }}
              fontWeight={{ sm: "normal" }}
              onClick={(e) => {
                handleSubmit(item.option);
              }}
              cursor={"pointer"}
            >
              <Box
                fontSize={{ sm: "8px", md: "12px", xl: "12px", "2xl": "20px" }}
                border={"solid 1px #FFF"}
                borderRadius={{ sm: "2px" }}
                px={{ sm: "3px", md: "4px", xl: "8px", "2xl": "12px" }}
                mx={{ sm: "2px", md: "4px", xl: "10px" }}
                my={{ sm: "2px", md: "4px", xl: "6px", "2xl": "10px" }}
              >
                {item.opt_no}
              </Box>
              <Box fontSize={{ sm: "10px", md: "14px", xl: "16px", "2xl": "24px" }}>
                {item.option}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Question15;
