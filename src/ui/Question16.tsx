import { useFormData } from "@/context/context";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { wrap } from "module";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Question16 = () => {
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
          xl: "60px",
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
          <Text mb={{ sm: "20px" }} mt={{md:"20px"}}>16</Text>
          <Text mb={{ sm: "20px" }} mt={{md:"20px"}}>
            <BiRightArrowAlt />
          </Text>
          <Text mx={{ sm: "4px", mm: "6px", md: "12px", xl: "13px", "2xl": "25px" }}>
            One last question! Some of us who have faced many failures in life
          </Text>
        </Box>
        <Text
          ml={{ sm: "30px", mm: "32px", md: "50px", xl: "60px", "2xl": "130px" }}
          color={"#FFF"}
          fontWeight={300}
          fontSize={{
            sm: "14px",
            mm: "14px",
            md: "18px",
            xl: "22px",
            "2xl": "48px"
          }}
          alignItems={"center"}
          mt={{md:"-20px"}}
        >
          often blame elementary education for misfortunes because we
        </Text>
        <Text
          ml={{ sm: "30px", mm: "32px", md: "48px", xl: "60px", "2xl": "130px" }}
          color={"#FFF"}
          fontWeight={300}
          fontSize={{
            sm: "14px",
            mm: "14px",
            md: "18px",
            xl: "22px",
            "2xl": "48px"
          }}
          alignItems={"center"}
        >
          couldn’t afford good schooling and never got the
        </Text>

        <Text
          ml={{ sm: "30px", mm: "32px", md: "48px", xl: "60px", "2xl": "130px" }}
          color={"#FFF"}
          fontWeight={300}
          fontSize={{
            sm: "14px",
            mm: "14px",
            md: "18px",
            xl: "20px",
            "2xl": "48px"
          }}
          alignItems={"center"}
        >
          better opportunities in life. How strongly do you feel about this?
        </Text>
      </Box>
      <Box
        color={"#A5BFFF"}
        fontSize={{
          sm: "12px",
          mm: "12px",
          md: "14px",
          xl: "18px",
          "2xl": "32px",
        }}
        fontWeight={380}
        ml={{ sm: "44px", mm: "54px", md: "90px", xl: "136px", "2xl": "190px" }}
        mb={{ sm: "24px", md: "24px", xl: "16px", "2xl": "94px" }}
        mt={{ sm: "6px", md: "4px", xl: "10px", "2xl": "16px" }}
      >
        Please select the right option.
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
            height={{ mm: "130px", md: "180px", xl: "200px", "2xl": "350px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "20px" }}
            onClick={(e) => handleSubmit("I strongly agree")}
            // onClick={() => {
            //   setFormData({ ...formData, suggestion: "" });
            // }}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "30px", xl: "20px", "2xl": "60px" }}
              mt={{ md: "36px" }}
            >
              <Image
                src={"/images/ab.gif"}
                alt="male"
                width={{mm:"130px", md: "190px", xl: "240px", "2xl": "250px" }}
                height={{ md: "90px", xl: "130px", "2xl": "200px" }}
              />
              <Text
                mt={{ xl: "15px", "2xl": "32px" }}
                textAlign={"center"}
                color="#FFF"
              >
                I strongly agree
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ sm:"100px",mm: "100px", md: "160px", xl: "200px", "2xl": "350px" }}
            height={{ mm: "130px", md: "180px", xl: "200px", "2xl": "350px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "18px" }}
            onClick={(e) => handleSubmit("I somewhat agree")}
            // onClick={() => {
            //   setFormData({ ...formData, suggestion: "I somewhat agree" });
            // }}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "30px", xl: "20px", "2xl": "60px" }}
              mt={{ md: "36px" }}
            >
              <Image
                src={"/images/th.gif"}
                alt="male"
                width={{ md: "100px", xl: "120px", "2xl": "250px" }}
                height={{ md: "90px", xl: "120px", "2xl": "200px" }}
              />
              <Text
                mt={{ xl: "28px", "2xl": "32px" }}
                textAlign={"center"}
                color="#FFF"
              >
                I somewhat agree
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ sm:"100px",mm: "100px", md: "160px", xl: "200px", "2xl": "350px" }}
            height={{ mm: "130px", md: "180px", xl: "200px", "2xl": "350px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "18px" }}
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
              mt={{ md: "36px" }}
            >
              <Image
                src={"/images/need.gif"}
                alt="male"
                width={{ md: "100px", xl: "120px", "2xl": "250px" }}
                height={{ md: "90px", xl: "120px", "2xl": "200px" }}
              />
              <Text
                mt={{ xl: "28px", "2xl": "32px" }}
                textAlign={"center"}
                color="#FFF"
              >
                I’m not sure
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ sm:"100px",mm: "100px", md: "160px", xl: "200px", "2xl": "350px" }}
            height={{ mm: "130px", md: "180px", xl: "200px", "2xl": "350px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "16px" }}
            onClick={(e) => handleSubmit("I somewhat disagree")}
            // onClick={() => {
            //   setFormData({ ...formData, suggestion: "I somewhat disagree" });
            // }}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "30px", xl: "20px", "2xl": "60px" }}
              mt={{ md: "36px" }}
            >
              <Image
                src={"/images/da.gif"}
                alt="male"
                width={{ md: "190px", xl: "120px", "2xl": "250px" }}
                height={{ md: "90px", xl: "120px", "2xl": "200px" }}
              />
              <Text
                mt={{ xl: "28px", "2xl": "32px" }}
                textAlign={"center"}
                color="#FFF"
              >
                I somewhat disagree
              </Text>
            </Box>
          </Box>
          <Box
            bgColor="rgba(253, 255, 252, 0.10)"
            _hover={{ bgColor: "rgba(253, 255, 252, 0.30)" }}
            border={"solid 1px #FFF"}
            width={{ sm:"100px",mm: "100px", md: "160px", xl: "200px", "2xl": "350px" }}
            height={{ mm: "130px", md: "180px", xl: "200px", "2xl": "350px" }}
            fontSize={{ sm: "10px", md: "14px", xl: "14px", "2xl": "16px" }}
            onClick={(e) => handleSubmit("I strongly disagree")}
          >
            <Box
              m={{ sm: "10px", mm: "10px", md: "30px", xl: "20px", "2xl": "60px" }}
              mt={{ md: "36px" }}
            >
              <Image
                src={"/images/sd.gif"}
                alt="male"
                width={{ md: "190px", xl: "120px", "2xl": "250px" }}
                height={{ md: "90px", xl: "120px", "2xl": "200px" }}
              />
              <Text
                mt={{ xl: "28px", "2xl": "32px" }}
                textAlign={"center"}
                color="#FFF"
              >
                I strongly disagree
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Question16;
