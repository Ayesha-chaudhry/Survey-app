import React, { useEffect, useState } from 'react'
import { Box, Button,Image, Input, Text } from '@chakra-ui/react'
import DropDown19 from './Dropdown19';
import { useFormData } from '@/context/context';

const Thank16 = () => {
    const {step, setStep, formData, setFormData} = useFormData()
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
        <Box background={"white"} display={ "flex"} flexDirection={{xl:"row",lg:"row",md:"row" , sm:"column"}} height={{ xl: "fit-content" ,sm:"100vh"}} w={{ xl: "fit-content",md:"100%", sm:"100%" ,lg:"" }}  >
            <Box w={{ xl: "auto",lg:"67%",md:"70%" }} height={{ xl: "",lg:"100vh",md:"100vh",sm:"100vh" }} mx={{ xl: "50px" ,lg:"35px",md:"30px",sm:"15px" }}>
                <Box mt={{ "2xl": "100px",xl:"12px",md:"80px", sm:"-2px" }} display={"flex"} justifyContent={"center"} ><Image height={{ xl: "",lg:"200px",md:"150px",sm:"120px" }} 
                w={{ "2xl": "320px",xl:"250px",md:"180px" }} src='/images/Thankyou.svg' /></Box>
                <Box m={{"2xl": "100px"}} w={{ xl: "auto" }} mx={"auto"}  textAlign={"start"} color={'#7EA2FF'} fontSize={{ xl: "32px" ,lg:"22px",sm:"12px" }} 
                py={ {"2xl": "70px", xl: "px",lg:"40px" }}
                >
                    <Text  mt={{xl:"56px" }} fontSize={{"2xl": "32px", xl: "20px"}}>
                    You’re all done!


                </Text>
                    <Text mt={{ xl: "38px", ml:"12px", md:"10px", sm: "8px" }} fontSize={{"2xl": "32px", xl: "20px"}} mb={{sm:"2px"}}>
                        If you would like to stay in the loop on our activities, please provide your contact information so we can 
                        stay in touch and update you on the latest developments.
                    </Text>
                </Box>
            </Box>
            <Box width={{"2xl":"1200px", xl: "auto",lg:"29%" }} h={{ xl: "auto",sm:"100vh" }} background={"#7EA2FF"} textColor={"white"} fontFamily={"McLaren"} >
                <Box mt={{"2xl": "200px", xl: "36px",lg:"125px", ml:"-3px", md:"100px",sm:"20px" }}   >
                    <Text fontSize={{"2xl":"36px", xl:"18px",lg:"22px",sm:"16px"}} mx={{"2xl": "45px", xl:"60px", lg:"20px", md:"30px",sm:"60px" }} fontWeight={"400px"} fontFamily={"McLaren"} ml={{ml:"104px"}} mt={{sm:"4px", ml:"12px", "2xl": "48px"}}>LET’S STAY IN TOUCH!</Text>
                    <Box display={"flex"} flexDirection={"column"} gap={{xl:"30px",lg:"30px",md:"20px",sm:"5px"}} mt={{ xl: "50px",lg:"40px",md:"30px",sm:"5px" }} mx={{ xl: "79px",lg:"30px",md:"30px",sm:"70px" }}  w={{xl:"276px", lg:"250px",md:"200px" } } fontSize={{"2xl": "24px", xl:"18px", md:"15px",sm:"12px"}} >
                        <Box><Text>Full Name</Text>
                            <Input borderBottom={"1px"} rounded={"none"} border={"1"} placeholder='Hira Khan' _placeholder={{ color: "#A5BFFF", fontsize: {xl:"24px",md:"10px"} }} px={"none"} />
                        </Box>
                        <Box><Text>Email</Text>
                            <Input borderBottom={"1px"} rounded={"none"} border={"1"} placeholder='example@gmail.com' _placeholder={{ color: "#A5BFFF", fontsize: "18px" }} px={"none"} />
                        </Box>
                        <Box ><Text>Phone Number</Text>
                            <Box display={"flex"} justifyContent={"space-between"} >
                                <Box >
                                    <DropDown19 />
                                </Box>
                                <Box width={{xl:"300px", lg:"180px", md:"140px" }}>

                                <Input borderBottom={"1px"} rounded={"none"} border={"1"} placeholder='0300-123-4567'
                                
                                    _placeholder={{ color: "#A5BFFF", fontsize: "24px" }} px={"none"} />
                                </Box>
                            </Box>
                        </Box>
                        <Button h={{ xl: "55px",lg:"40px",md:"30px",sm:"20px"  }} w={{ "2xl":"350px", xl: "276px",lg:"250px",md:"200px" }} _placeholder={{ color: "#8391B4" }} 
                        backgroundColor={"#fff"}
                        textColor={"#8391B4"}
                        mb={{sm:"12px"}}
                        fontSize={{"2xl": "32px", xl:"18px",lg:"20px",md:"15px",sm:"12px"}} rounded={"none"} 
                        onClick={(e) => handleSubmit("submit")}> Submit</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
        </Box>
    )
}

export default Thank16