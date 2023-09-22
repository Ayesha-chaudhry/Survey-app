"use client";
import { BsArrowRightShort } from "react-icons/bs";
// import { Flex, Image, Icon, Select, Center } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";
// import { AD } from "emoji-flags"
import { countries } from "@/components/countries";
import {
  Box,
  Stack,
  Text,
  Input,
} from "@chakra-ui/react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useFormData } from "@/context/context";


function Abc({ selected }: any) {
  
  return (
    <Box
      display={"flex"}
      gap={"3px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={{ sm: "30%", xl: "18%", "2xl": "20%" }}
      margin={"auto"}
    >
      <ReactCountryFlag
        style={{
          width: "35px",
          height: "22px",
          border: "2px",
          borderRadius: "58px",
        }}
        countryCode={selected?.Code}
        svg
      />
      <Text
        fontSize={{ sm: "14px", lg:"px", xl: "18px", "2xl": "20px" }}
        paddingLeft={{ sm: "5px", xl: "18px", "2xl": "20px" }}
      >
        {selected?.Code}
      </Text>
    </Box>
  );
}

type selexted = {
  Code: string;
  Name: string;
};

const Question = () => {
  const [selectedCioc, setSelectedCioc] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [data, setData] = useState<any>([]);

  

  const [selected, setSelected] = useState<selexted>();
  const [isOpen, setIsOpen] = useState(true);
  const convertedCountries = Object.keys(countries).map((code: any) => {
    return { code, name: countries[code] };
  });
  const { step, setStep, formData, setFormData, addData } = useFormData()
  const [style, setStyle] = useState(false);
  function handleSubmit(){
        setStyle(true)
        setTimeout(() => {
            setStep(9)
        }, 500);
    }


  return (
    <Box
      backgroundColor={"#7EA2FF"}
      width={{
        sm: "150px",
        md: "200px",
        lg: "300px",
        xl: "400px",
        "2xl": "600px",
      }}
      border={2}
      borderColor={"white"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingX={{ sm: "5px", mm: "3px", xl: "20px" }}
        paddingY={{
          sm: "5px",
          mm: "3px",
          md: "",
          lg: "px",
          xl: "12px",
          "2xl": "20px",
        }}
        border={"1px"}
        borderColor={"white"}
        width={{
          sm: "200px",
          md: "250px",
          lg: "",
          xl: "500px",
          "2xl": "600px",
        }}
      >
        <Input
          placeholder="Enter your income"
          outline={"none"}
          border={"0px"}
          fontSize={{ sm: "10px",lg:"16px", "2xl": "24px" }}
          width={{ sm: "500px", md: "300px",lg:"600px", xl: "800px", "2xl": "1000px" }}
          textColor={"white"}
          _placeholder={{ color: "#A5BFFF" }}
        />
        <Box
          cursor={"pointer"}
          bgColor={"#7EA2FF"}
          textColor={"white"}
          border={2}
          paddingY={{ sm: "3px", "2xl": "5px" }}
          borderColor={"white"}
          width={{ sm: "150px", md: "", lg: "", xl: "500px", "2xl": "500px" }}
          fontSize={{ sm: "12px", md: "", lg: "", xl: "24px", "2xl": "24px" }}
          paddingX={"5px"}
          _placeholder={{ textColor: "white" }}
          placeholder={`${
            selected ? (
              <ReactCountryFlag
                style={{ width: "35px", height: "20px" }}
                className="bg-slate-300 border-4 rounded-full"
                placeholder={`${selected.Name}`}
                countryCode={selected?.Code}
                svg
              />
            ) : (
              ""
            )
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {selected ? <Abc selected={selected} /> : ""}
        </Box>
        <Text
          display={"flex"}
          textAlign={"center"}
          alignItems={"center"}
          textColor={"white"}
          width={"34px"}
          height={"28px"}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <RiArrowDropDownFill fontSize={"30px"} />
        </Text>
      </Box>

      <Stack
        width={{
          sm: "200px",
          md: "250px",
          lg: "",
          xl: "350px",
          "2xl": "400px",
        }}
        marginLeft={{
          sm: "",
          mm: "90px",
          md: "",
          lg: "",
          xl: "250px",
          "2xl": "300px",
        }}
        scrollBehavior={"smooth"}
        overflowY={"auto"}
        textColor={"white"}
        border={"1px"}
        borderColor={"white"}
        backgroundColor={"#A5BFFF"}
        height={{ sm: "200px", xl: "350px", "2xl": "400px" }}
        className={`custom-scrollbar h-72 `}
        display={isOpen ? "none" : "block"}
        // display={isOpen ? "hidden" : "block"}
        // onClick={()=>{isOpen ? "hidden" : "block"}`})}
      >
        {convertedCountries.map((data: any, id: number) => {
          return (
            <Box
              key={id}
              display={"flex"}
              alignItems={"center"}
              paddingY={"7px"}
              paddingX={{ sm: "10px", "2xl": "25px" }}
              marginY={"8px"}
              onClick={() => {
                setSelected({ Code: data.code, Name: data.name });
                setFormData({...formData, income: data.name})
                handleSubmit();
              }}
            >
              <ReactCountryFlag
                countryCode={data.code}
                style={{ width: "35px", height: "20px" }}
                svg
              />
              <Text
              cursor={"pointer"}
                textColor={"white"}
                fontSize={{ sm: "13px", xl: "16px", "2xl": "20px" }}
                paddingX={{ sm: "8px", "2xl": "5px" }}
              >
                {data.name}
              </Text>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Question;
