import { useFormData } from "@/context/context";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

type optionType = {
  opt_no: string;
  option: string;
};

const option: optionType[] = [
  {
    opt_no: "A",
    option:
      "Yes, my parents focused on my education from childhood and support me in my career",
  },
  {
    opt_no: "B",
    option:
      "My parents focused on my academic qualification but do not encourage me in my career",
  },
  {
    opt_no: "C",
    option: "No, my parents never focused on my education or career",
  }];

const FmQues14 = () => {
  const {step, setStep, formData, setFormData} = useFormData();
  const [style, setStyle] = useState(false);

  function handleSubmit(e:string){
    setFormData({...formData, support:e})
    setStyle(true)
    setStep(18)
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
        mt={{ sm: "80px", md: "70px", xl: "84px", "2xl": "120px" }}
        ml={{ sm: "12px", md: "84px", xl: "150px", "2xl": "150px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "11px",
            mm: "12px",
            md: "18px",
            xl: "20px",
            "2xl": "48px"
          }}
          color={"#FFF"}
        >
          <Text>14</Text>
          <Text>
            <BiRightArrowAlt />
          </Text>
          <Text mx={{ sm: "5px", md: "16px", xl:"12px", "2xl": "30px" }}>
            Did your parents support you with your education
          </Text>
        </Box>
        <Text
          fontSize={{ sm: "11px", md: "20px", xl: "20px", "2xl": "48px" }}
          ml={{ sm: "28px", mm:"30px", md: "54px", xl: "55px", "2xl": "130px" }}
          color={"#FFF"}
        >
          and career?
        </Text>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{
          sm: "10px",
          mm: "12px",
          md: "16px",
          xl: "18px",
          "2xl": "32px",
        }}
        fontWeight={380}
        ml={{ sm: "38px", mm: "40px", md: "138px", xl: "207px", "2xl": "280px" }}
        mb={{ sm: "40px", md: "5px", xl: "2px", "2xl": "16px" }}
        mt={{ sm: "6px", md: "4px", xl: "10px", "2xl": "16px" }}
      >
        Please answer based on your own experience.
      </Box>
      <Box mt={{ sm: "36px", md: "40px", xl: "50px", "2xl": "50px" }}>
        {option.map((item, id: number) => {
          return (
            <Box
            key={id}
              w={{ sm: "250px", mm:"280px", md: "420px", xl: "450px", "2xl": "810px" }}
              background={"rgba(253, 255, 252, 0.10)"}
              _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
              color={"#FFF"}
              ml={{ sm: "35px", mm:"40px", md: "132px", xl: "205px", "2xl": "280px" }}
              display={"flex"}
              alignItems={"center"}
              gap={{ sm: "6px", md: "8px", xl: "10px" }}
              border={"solid 1px #FFF"}
              p={{ sm: "10px", md: "10px", xl: "10px", "2xl": "20px" }}
              my={{ sm: "8px", md: "8px", xl: "12px", "2xl": "14px" }}
              borderRadius={{ sm: "4px" }}
              fontWeight={{ sm: "normal" }}
              onClick={(e) => handleSubmit(item.option)
              }
            >
              <Box
                fontSize={{ sm: "8px", md: "12px", xl: "12px", "2xl": "20px" }}
                border={"solid 1px #FFF"}
                borderRadius={{ sm: "2px" }}
                px={{ sm: "3px", mm:"2px", md: "4px", xl: "8px", "2xl": "12px" }}
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

export default FmQues14;
