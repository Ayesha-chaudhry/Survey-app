import React, { useEffect, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useFormData } from "@/context/context";

const ThankA16 = () => {
  const { step, setStep, formData, setFormData } = useFormData();
  const [style, setStyle] = useState(false);
  function handleSubmit(e: string) {
    setStyle(true);
    setStep(21);
    setFormData({ ...formData, submit: e });
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
        background={"white"}
        display={"flex"}
        flexDirection={{ "2xl": "row", lg: "row", md: "row", sm: "column" }}
        height={{ "2xl": "1088px", lg: "100vh", md: "100vh", sm: "100vh" }}
        w={{ "2xl": "1728px", md: "100%", sm: "100%" }}
      >
        <Box
          w={{ "2xl": "1137px", lg: "67%", md: "70%" }}
          height={{ "2xl": "1088px", lg: "100vh", md: "100vh", sm: "100vh" }}
          mx={{ "2xl": "119px", lg: "35px", md: "30px", sm: "15px" }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            mt={{ "2xl": "150px", lg: "80px", md: "80px", sm: "30px" }}
          >
            <Image
              height={{
                "2xl": "295.135px",
                lg: "200px",
                md: "150px",
                sm: "120px",
              }}
              w={{ "2xl": "320px", lg: "250px", md: "180px" }}
              src="/images/Thankyou.svg"
            />
          </Box>
          <Box
            w={{ "2xl": "922px" }}
            textAlign={{ "2xl": "start", lg: "start", md: "start", sm: "center" }}
            color={"#7EA2FF"}
            fontSize={{ "2xl": "32px", lg: "22px", md: "18px", sm: "14px" }}
            py={{ "2xl": "60px", lg: "40px" }}
            mt={{ "2xl": "39.86px", lg: "px", md: "px", sm: "px" }}
            mx={{ lg: "130px" }}
          >
            <Text fontSize={{}}>You’re all done!</Text>
            <Text mt={{ "2xl": "25px", md: "10px" }} fontSize={""}>
              If you would like to stay in the loop on our activities, please
              provide your contact information so we can stay in touch and
              update you on the latest developments.
            </Text>
          </Box>
        </Box>
        <Box
          pt={{ "2xl": "414px", lg: "260px", md: "180px", sm: "65px" }}
          width={{ "2xl": "567px", lg: "30%", md: "35%" }}
          h={{ "2xl": "1088px", sm: "70vh", md: "100vh", lg: "100%" }}
          background={"#7EA2FF"}
          textColor={"white"}
          fontFamily={"McLaren"}
          fontSize={{ "2xl": "30px", lg: "25px", md: "18px", sm: "14px" }}
          textAlign={"center"}
          px={{ "2xl": "85px", md: "10px", sm: "60px" }}
        >
          <Text mb={{ "2xl": "55px", lg: "30px", md: "25px" }}>Awesome!</Text>
          <Text>We’ll be in touch with updates and amazing opportunities!</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ThankA16;
