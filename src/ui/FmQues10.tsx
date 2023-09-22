import { useFormData } from "@/context/context";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { wrap } from "module";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const FmQues10 = () => {
  const { step, setStep, formData, setFormData } = useFormData();
  const [style, setStyle] = useState(false);

  function handleSubmit(e: string) {
    setStyle(true);
    setStep(20);
    setFormData({ ...formData, suggestion: e });
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
          mm: "90px",
          md: "70px",
          lg: "60px",
          "2xl": "60px"
        }}
        ml={{ sm: "14px", mm: "22px", md: "44px", xl: "80px", "2xl": "60px" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{
            sm: "14px",
            mm: "14px",
            md: "18px",
            xl: "22px",
            "2xl": "48px"
          }}
          color={"#FFF"}
        >
          <Text mb={{ sm: "20px" }} mt={{ml:"22px", md:"20px"}}>16</Text>
          <Text mb={{ sm: "20px" }} mt={{ml:"22px", md:"20px"}}>
            <BiRightArrowAlt />
          </Text>
          <Text mx={{ sm: "4px", mm: "6px", md: "14px", "2xl": "30px" }}>
          Are you in favor of encouraging women to work?
          </Text>
        </Box>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{
          sm: "12px",
          mm: "11px",
          md: "14px",
          xl: "18px",
          "2xl": "32px",
        }}
        fontWeight={380}
        ml={{ sm: "44px", mm: "54px", md: "90px", xl: "136px", "2xl": "190px" }}
        mb={{ sm: "24px", md: "24px", xl: "16px", "2xl": "94px" }}
        mt={{ sm: "6px", ml:"-16px", md: "-12px", xl: "10px", "2xl": "16px" }}
      >
        What are your thoughts on women in your family being in the work place?
      </Box>
      <Box color={"#A5BFFF"} fontSize={"32px"} fontWeight={380} mb={5}></Box>
      <Box
        ml={{ sm: "-32px", mm: "-2px", md: "20px", xl: "18px", "2xl": "10px" }}
        mt={{ sm: "-30px", mm: "-8", "2xl": "52px" }}
      >
        <Box
          display={{ sm: "flex" }} 
          flexWrap={{sm:"wrap",xl:"nowrap"}}
          m={{ sm: "65px", mm: "65px" }}
          gap={{ sm: "12px", mm: "10px", md: "30px", xl: "6px", "2xl": "8px" }}
        >
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{
              sm: "100px",
              mm: "100px",
              md: "160px",
              xl: "200px",
              "2xl": "350px",
            }}
            height={{ mm: "155px", md: "220px", xl: "210px", "2xl": "380px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "24px" }}
            onClick={(e) => handleSubmit("I strongly agree")}
            // onClick={() => {
            //   setFormData({ ...formData, suggestion: "" });
            // }}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "30px", xl: "20px", "2xl": "60px" }}
              mt={{ md: "36px", "2xl": "2" }}
            >
              <Image
                src={"/images/nwork.gif"}
                alt="male"
                width={{mm:"120px", md: "190px", xl: "150px", "2xl": "250px" }}
                height={{ md: "90px", xl: "120px", "2xl": "200px" }}
              />
              <Text
                mt={{ mm: "18px", xl: "16px", "2xl": "76px" }}
                textAlign={"center"}
                color="#FFF"
              >
                No, women should not work
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ sm:"100px",mm: "100px", md: "160px", xl: "200px", "2xl": "350px" }}
            height={{ mm: "155px", md: "220px", xl: "210px", "2xl": "380px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "24px" }}
            onClick={(e) => handleSubmit("I somewhat agree")}
            // onClick={() => {
            //   setFormData({ ...formData, suggestion: "I somewhat agree" });
            // }}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "30px", xl: "20px", "2xl": "60px" }}
              mt={{ md: "36px", "2xl": "2" }}
            >
              <Image
                src={"/images/sush.gif"}
                alt="male"
                width={{ md: "100px", xl: "120px", "2xl": "250px" }}
                height={{ md: "90px", xl: "120px", "2xl": "200px" }}
              />
              <Text
                mt={{ xl: "2px", "2xl": "3px" }}
                textAlign={"center"}
                color="#FFF"
              >
                No, Women should focus on family after marriage
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ sm:"100px",mm: "100px", md: "160px", xl: "200px", "2xl": "350px" }}
            height={{ mm: "155px", md: "220px", xl: "210px", "2xl": "380px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "24px" }}
            onClick={(e) => handleSubmit("I don’t have any idea about this")}
            // onClick={() => {
            //   setFormData({
            //     ...formData,
            //     suggestion: "",
            //   });
            // }}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "30px", xl: "20px", "2xl": "60px" }}
              mt={{ md: "36px", "2xl": "2" }}
            >
              <Image
                src={"/images/pref.gif"}
                alt="male"
                width={{ md: "100px", xl: "120px", "2xl": "250px" }}
                height={{ md: "90px", xl: "120px", "2xl": "200px" }}
              />
              <Text
                mt={{ mm:"18px", xl: "16px", "2xl": "76px" }}
                textAlign={"center"}
                color="#FFF"
              >
                I don't have any preference
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ sm:"100px",mm: "100px", md: "160px", xl: "200px", "2xl": "350px" }}
            height={{ mm: "155px", md: "230px", lg:"220", xl: "210px", "2xl": "380px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "24px" }}
            onClick={(e) => handleSubmit("I somewhat disagree")}
            // onClick={() => {
            //   setFormData({ ...formData, suggestion: "I somewhat disagree" });
            // }}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "30px", xl: "20px", "2xl": "60px" }}
              mt={{ md: "36px", lg:"28px", "2xl": "2"}}
            >
              <Image
                src={"/images/need.gif"}
                alt="male"
                width={{ md: "190px", xl: "120px", "2xl": "250px" }}
                height={{ md: "90px", xl: "120px", "2xl": "200px" }}
              />
              <Text
                mt={{md:"14px", xl: "2px", "2xl": "10px" }}
                textAlign={"center"}
                color="#FFF"
              >
                Yes, only if there's a financial need in the family
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ sm:"100px",mm: "100px", md: "160px", xl: "200px", "2xl": "350px" }}
            height={{ mm: "145px", md: "230px", xl: "210px", "2xl": "380px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "24px" }}
            onClick={(e) => handleSubmit("I strongly disagree")}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "30px", xl: "20px", "2xl": "60px" }}
              mt={{ md: "36px", "2xl": "-3" }}
            >
              <Image
                src={"/images/ab.gif"}
                alt="male"
                width={{ md: "110px", xl: "120px", "2xl": "250px" }}
                height={{ md: "80px", xl: "120px", "2xl": "200px" }}
              />
              <Text
                mt={{ mm:"5px", xl: "2px", "2xl": "30px" }}
                textAlign={"center"}
                color="#FFF"
              >
                Absolutely, women should be able to work if they want to
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FmQues10;
