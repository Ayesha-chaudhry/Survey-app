import { useFormData } from "@/context/context";
import { Box, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Question17 = () => {
  const [style, setStyle] = useState(false)
  const {step, setStep, formData, setFormData} = useFormData()


  function handleSubmit(e:String){
    setFormData({...formData, phone: e})
    setStyle(true)
    setStep(18)
  }
  useEffect(() => {
    const elements = document.querySelectorAll(".initialPosition");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add("animate");
        }
      });
    });
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);
  return (
    <>
      <Box
        mt={{
          sm: "70px",
          md: "80px",
          lg: "100px",
          xl: "150px",
          "2xl": "198px",
          
        }}
        ml={{ sm: "5px", md: "10", lg: "90", xl: "100px", "2xl": "162px" }}
        className='initialPosition'
        transitionDuration={"1000ms"}
        transform={`${style ? "translateY(0px)" : "translateY(350px)"}`}
        opacity={`${style ? "0" : "1"}`}
      >
        <Box display={"flex"} justifyContent={"space-around"}>
          <Box>
            <Box
              fontSize={{
                sm: "8px",
                md: "24px",
                lg: "16px",
                xl: "40px",
                "2xl": "48px",
              }}
              color={"#FFF"}
            >
              <Box display={"flex"} justifyItems={"center"}>
                <Text>17</Text>
                <Text pt={{ md: "6px" }}>
                  <BiRightArrowAlt />
                </Text>
                <Text ml={{ sm: "8px", md: "30px" }}>
                And finally, what's your phone number?
                </Text>
              </Box>
              <Text
                ml={{
                  sm: "24px",
                  md: "76px",
                  lg: "62px",
                  xl: "130px",
                  "2xl": "130px",
                }}
                color={"#A5BFFF"}
                fontSize={{
                  sm: "9px",
                  md: "18px",
                  lg: "14px",
                  xl: "32px",
                  "2xl": "32px",
                }}
              >
                We'll use this for all future communications.
              </Text>
            </Box>
          </Box>
          <Box
            mr={{
              sm: "20px",
              md: "22px",
              lg: "440px",
              xl: "48px",
              "2xl": "1800px",
            }}
            mt={{
              sm: "-20px",
              md: "-50px",
              lg: "-70px",
              xl: "-140px",
              "2xl": "-98px",
            }}
          >
            <Image
              src="images/phone.png"
              width={{
                sm: "90px",
                md: "180px",
                lg: "250px",
                xl: "550px",
                "2xl": "400px",
              }}
              height={{ "2xl": "300px" }}
            />
          </Box>
        </Box>
        <Box
          pl={{
            sm: "30px",
            md: "80px",
            lg: "72px",
            xl: "113px",
            "2xl": "122px",
          }}
          mt={{
            sm: "18",
            md: "-20px",
            lg: "-30px",
            xl: "7px",
            "2xl": "-68px",
          }}
          paddingY={{
            sm: "10px",
            mm: "20px",
            md: "60px",
            lg: "20px",
            xl: "35px",
            "2xl": "54px",
          }}
        >
          <Input
            placeholder="name@example.com"
            _placeholder={{ color: "#A5BFFF" }}
            px={"none"}
            fontSize={{ sm: "10px", lg: "15px", xl: "24px", "2xl": "32px" }}
            paddingY={{ "2xl": "3px" }}
            width={{
              sm: "220px",
              md: "500px",
              lg: "500px",
              xl: "1000px",
              "2xl": "1054px",
            }}
            height={{ sm: "20px", lg: "50px" }}
            border={"0"}
            rounded={"none"}
            borderBottom={"1px"}
            borderColor={""}
            textColor={"#FFF"}
            onClick={() => handleSubmit("03009585843")
            }
          ></Input>
        </Box>
      </Box>
    </>
  );
};

export default Question17;
