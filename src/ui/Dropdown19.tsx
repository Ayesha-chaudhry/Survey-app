"use client"
import { BsArrowRightShort } from "react-icons/bs"
// import { Flex, Image, Icon, Select, Center } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import axios from "axios"
import ReactCountryFlag from "react-country-flag"
// import { AD } from "emoji-flags"
import { countries } from "@/components/countries";
import { Box, Button, Code, Flex, Select, Stack, Text, Input } from '@chakra-ui/react'
import { RiArrowDownSLine, RiArrowDropDownFill } from "react-icons/ri"
import { useFormData } from "../context/context";

function Abc({ selected }: any) {
    return (
        <Box display={"flex"} gap={"3px"} justifyContent={"space-between"} alignItems={"center"}
            width={{ sm: "40%", xl: "18%", "2xl": "20%" }} margin={"auto"}>
            <ReactCountryFlag
                style={{ width: '50px', height: '22px', border: "2px", borderRadius: "58px" }}
                countryCode={selected?.Code} svg />
        </Box>)
}

type selexted = {
    Code: string,
    Name: string
}

const DropDown19 = () => {
    const [selected, setSelected] = useState<selexted>();
    const [isOpen, setIsOpen] = useState(true);
    const convertedCountries = Object.keys(countries).map((code: any) => {
        return { code, name: countries[code] };
    });
    const { step, setStep, formData, setFormData, addData } = useFormData()
    const [style, setStyle] = useState(false)
    function handleSubmit() {
        setStyle(true)
        setTimeout(() => {
            setStep(7)
        }, 500);


    }
    return (
        <Box backgroundColor={"#7EA2FF"}
            border={2} borderColor={"white"}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"end"} 
            borderBottom={"1px"} rounded={"none"} border={"1"} borderColor={"#FFF"}
            paddingY={"6px"}
            // paddingX={{ sm: "5px", mm: "3px", xl: "20px" }}
                // paddingY={{ sm: "5px", mm: "3px", md: "", lg: "px", xl: "12px", "2xl": "20px" }}
                width={"80px"}
                >

                {/* <Box
                    cursor={"pointer"}
                    bgColor={"#7EA2FF"}
                    textColor={"white"}
                    border={2}
                    paddingY={{ sm: "3px", "2xl": "5px" }}
                    borderColor={"white"}
                    width={{ sm: "50px", md: "", lg: "", xl: "200px", "2xl": "300px" }}
                    fontSize={{ sm: "12px", md: "", lg: "", xl: "24px", "2xl": "24px" }}
                    paddingX={"5px"}
                    _placeholder={{ textColor: "white" }}
                    placeholder={`${selected ? (
                        <ReactCountryFlag
                            style={{ width: '35px', height: '20px' }} className="bg-slate-300 border-4 rounded-full"
                            placeholder={`${selected.Name}`} countryCode={selected?.Code} svg />
                    ) : ("")}`}
                    onClick={() => { setIsOpen(!isOpen); }}>
                    {
                        selected ? <Abc selected={selected} /> : ""
                    }
                </Box> */}
                <Box display={"flex"} justifyContent={"space-around"} textAlign={"center"} alignItems={"center"} textColor={"white"}
                    width={"60px"} height={"28px"} onClick={() => { setIsOpen(!isOpen) }} >
                    <Box>
                        {selected ? (
                            <ReactCountryFlag
                                style={{ width: '35px', height: '20px' }}
                                placeholder={`${selected.Name}`} countryCode={selected?.Code} svg />
                        ) : (<ReactCountryFlag
                            style={{ width: '35px', height: '20px' }}
                            countryCode={"PK"} svg />)}
                    </Box>
                    {/* <Box>
                        {
                            selected ? (<Abc />) : (
                                <ReactCountryFlag
                                    style={{ width: '30px', height: '18px' }}
                                    countryCode={"PK"} svg />
                            )
                        }
                    </Box> */}
                    <Box>
                        <RiArrowDownSLine fontSize={"20px"} />
                    </Box>
                </Box>
            </Box>


            <Stack width={"80px"}
                scrollBehavior={"smooth"} overflowY={"auto"} textColor={"white"}
                border={"1px"} borderColor={"white"} backgroundColor={"#A5BFFF"}
                height={{ sm: "200px", xl: "350px", "2xl": "400px" }}
                className={`custom-scrollbar h-72 `} display={isOpen ? "none" : "block"} >
                {
                    convertedCountries.map((data: any, id: number) => {
                        return <Box key={id}
                            display={"flex"}
                            alignItems={"center"}
                            paddingY={"7px"}
                            paddingX={{ sm: "10px", "2xl": "25px" }}
                            marginY={"8px"}
                            onClick={() => {
                                setIsOpen(!isOpen)
                                setSelected({ Code: data.code, Name: data.name })
                                handleSubmit()
                            }}>
                            <ReactCountryFlag countryCode={data.code}
                                style={{ width: '35px', height: '20px' }}
                                svg />
                        </Box>
                    })
                }
            </Stack>

        </Box>
    );
};

export default DropDown19