"use client"
import { BsArrowRightShort } from "react-icons/bs"
// import { Flex, Image, Icon, Select, Center } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
// import axios from "axios"
import ReactCountryFlag from "react-country-flag"
// import { AD } from "emoji-flags"
import { countries } from "./countries"
import { Box,  Stack, Text } from '@chakra-ui/react'
import { RiArrowDropDownFill } from "react-icons/ri";
import   { useFormData } from "@/context/context";


function Abc({ selected }: any) {

    const {FormData, setFormData} = useFormData();
    console.log(selected)
    return (<Box display={"flex"} gap={"10px"} justifyContent={"space-between"} alignItems={"center"} width={"50%"}>
        <ReactCountryFlag
            style={{ width: '35px', height: '20px' }}
            countryCode={selected?.Code} svg />
        <Text fontSize={"18px"} paddingX={"20px"}>{selected?.Name}</Text>
    </Box>)
}

type selexted = {
    Code: string,
    Name: string
}

const Dropdown = () => {
    // const [selectedCioc, setSelectedCioc] = useState("");
    // const [dropdownVisible, setDropdownVisible] = useState(false);
    // const [data, setData] = useState<any>([]);
    const [style, setStyle] = useState(false)

    const [selected, setSelected] = useState<selexted>();
    const [isOpen, setIsOpen] = useState(true);
    const convertedCountries = Object.keys((countries as any)).map((code: any) => {
        return { code, name: countries[code] };
    });
    const { step, setStep, formData, setFormData} = useFormData();
    function handleSubmit(){
        setStyle(true)
        setStep(4)
        // setTimeout(() => {
           
        // }, 500);
    }


    return (
        <Box backgroundColor={"#7EA2FF"} width={{ sm: "250px", md: "", lg: "", xl: "350px", "2xl": "500px" }}
            border={2} borderColor={"white"}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} paddingX={{sm:"10px", xl:"5px", "2xl": "12px" }} 
                paddingY={"10px"} border={"1px"} borderColor={"white"}>
                <Box
                    cursor={"pointer"}
                    bgColor={"#7EA2FF"}
                    textColor={"white"}
                    // _active={{bg: "#7fa2fa"}}
                    border={2}
                    paddingY={"5px"}
                    borderColor={"white"}
                    width={{ sm: "350px", md: "", lg: "", xl: "500px", "2xl": "600px" }}
                    fontSize={{ sm: "12px", md: "", lg: "", xl: "20px", "2xl": "24px" }}
                    paddingX={"10px"}
                    
                    placeholder={`${selected ? (
                        <ReactCountryFlag
                            style={{ width: '35px', height: '20px' }} className="bg-slate-300 border-4 rounded-full"
                            placeholder={`${selected.Name}`} countryCode={selected?.Code} svg />) : ("please select your country")}`}

                >
                    {
                        selected ? <Abc selected={selected} /> : "Please select your country"
                    }
                    
                </Box>
                {/* <Box onClick={()=>setIsOpen(!isOpen)}>click me</Box> */}

                <Text display={"flex"} textAlign={"center"} alignItems={"center"} textColor={"white"}
                    border={"1px"} borderColor={"white"} width={"20px"} height={"18px"}
                >
                    <RiArrowDropDownFill fontSize={"32px"}  onClick={()=>setIsOpen(!isOpen)}/>
                </Text>
            </Box>
            {/* <Button
                }

            >Change State</Button> */}
            <Stack width={{ sm: "250px", md: "", lg: "", xl: "350px", "2xl": "500px" }}
                scrollBehavior={"smooth"} overflowY={"auto"} textColor={"white"} border={2} borderColor={"white"} backgroundColor={"#A5BFFF"}
                className={`custom-scrollbar h-72 ` } display={isOpen ? "none" : "block"} >
                {
                    convertedCountries.map((data: any, id: number) => {
                        return <Box key={id} className="flex items-center" 
                            paddingY={{xl:"10px",sm:"2px"}}
                            paddingX={{xl:"30px",sm:"10px"}}
                            marginY={"8px"}
                            
                            onClick={() => {
                                setSelected({ Code: data.code, Name: data.name })
                                setFormData({...formData, country: data.name})
                                setIsOpen(!isOpen)
                                handleSubmit()
                                
                            }}>
                            <ReactCountryFlag countryCode={data.code}
                                style={{ width: '20px', height: '20px' }}
                                svg />
                            <Text cursor={"pointer"} fontSize={{"2xl": "24px"}} px= {5}>{data.name}</Text>
                        </Box>
                    })
                }
            </Stack>

        </Box>
    );
};

export default Dropdown;