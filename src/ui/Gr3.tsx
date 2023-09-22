import { useFormData } from "@/context/context";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";



const Gr3 = () => {

 
    const { step, setStep, formData, setFormData, addData } = useFormData()
      const [style, setStyle] = useState(false)
  
    useEffect(() => {
      const elements = document.querySelectorAll(
        ".initialPosition"
      );
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
    }, [])
  
    function handleSubmit(){
      setFormData({...formData,great:"great"})
      setStyle(true)
      setTimeout(() => {
          setStep(10)
      }, 500);
  }
  return (
    

    <Flex alignItems={"center"} justifyContent={"center"} height={""}>
      <Box
        mt={{ sm: "100px", md: "80px", xl: "80px", "2xl": "340px" }}
        mb={{ sm: "104px",xl:"0px", "2xl": "108.86px" }}
        mx={{
          sm: "200px",
          mm: "50px",
          ml: "60px",
          md: "200px",
          xl: "20px",
          "2xl": "436px",
        }}
      >
        <Box
          color={"#FFF"}
          fontFamily={"McLaren"}
          fontSize={{
            sm: "14px",
            mm: "16px",
            ml: "18px",
            md: "28px",
            xl: "36px",
            "2xl": "48px",
          }}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"normal"}
          mx={{ sm: "42px", md: "150px", "2xl": "132px" }}
        >
          <Text>We’re almost done!</Text>
        </Box>
        <Box
          color={"#FFF"}
          fontFamily={"McLaren"}
          fontSize={{
            sm: "14px",
            mm: "16px",
            ml: "18px",
            md: "28px",
            xl: "36px",
            "2xl": "48px",
          }}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"normal"}
          mx={{ sm: "12px", md: "92px", "2xl": "19px" }}
        >
          <Text>Just a few more fun questions.</Text>
        </Box>
        <Box
          mt={{ sm: "10px", mm: "8px", md: "10px", ml:"2px", xl: "26px", "2xl": "5px" }}
          fontSize={{
            sm: "11px",
            mm: "12px",
            ml: "14px",
            md: "22px",
            xl: "32px",
            "2xl": "38px",
          }}
          mx={{ sm: "0px", md: "70px", "2xl": "0px" }}
        >
          <Text color={"#A5BFFF"}>We want to ask you about your experience.</Text>
        </Box>
        <Box
          mx={{
            sm: "20px",
            ml: "20px",
            md: "150px",
            xl: "130px",
            "2xl": "83.42px",
          }}
          mt={{ sm: "18px", mm: "26px", md: "20px", xl: "22px", "2xl": "50px" }}
          h={{ "2xl": "75px" }}
          w={{
            sm: "200px",
            ml: "260px",
            md: "300px",
            xl: "400px",
            "2xl": "529.577px",
          }}
          bg={"#FFF"}
          onClick={() => {
            handleSubmit();
          }}
        >
          <Text
            px={{ sm: "60px", ml: "80px", xl: "120px", "2xl": "177.8" }}
            py={{ sm: "4px", md: "6px", "2xl": "14px" }}
            fontSize={{
              sm: "12px",
              ml: "14px",
              md: "18px",
              xl: "24px",
              "2xl": "32px",
            }}
            color={"#8391B4"}
            cursor={"pointer"}
          >
            
            Grrrrreat!
          </Text>
        </Box>

        <Box mt={{ sm: "20px", md: "22px", "2xl": "49px" }}>
          <Image
            mx={{
              sm: "78px",
              mm: "80px",
              ml: "90px",
              md: "240px",
              xl: "240px",
              "2xl": "248px",
            }}
            src={"/images/grttt.gif"}
            width={{
              sm: "80px",
              mm: "100px",
              md: "120px",
              xl: "140px",
              "2xl": "200px",
            }}
          />
        </Box>
        <Box mt={{ sm: "4px", md: "10px", "2xl": "11px" }}>
          <Text
            color={"#A5BFFF"}
            mx={{
              sm: "8px",
              mm: "6px",
              ml: "16px",
              md: "120px",
              xl: "130px",
              "2xl": "124px",
            }}
            fontSize={{
              sm: "12px",
              mm: "14px",
              md: "20px",
              xl: "20px",
              "2xl": "24px",
            }}
          >
            #PartyforProgress #ColortheFuture
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Gr3;




