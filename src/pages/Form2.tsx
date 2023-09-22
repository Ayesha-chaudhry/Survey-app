import { FormContext } from "@/GlobalState/context";
import React, { useContext } from "react";
import Radiocompo from "@/components/Radio";
import {data} from "../data/data";
import Checkboxs from "@/components/Checkboxs";
import {
  Box,
  FormControl,
  FormLabel,
  Radio,
  Stack,
  VStack,
} from "@chakra-ui/react";


const Form2 = () => {
    const{stepData, setStepData}=useContext(FormContext)
    const que6 = data.male.find((item:any) => item.id == 6)
    const que8 = data.male.find((item:any) => item.id == 8)
    const que9 = data.male.find((item:any) => item.id == 9)
    const que10 = data.male.find((item:any) => item.id == 10)
    const que11 = data.male.find((item:any) => item.id == 11)
    const que12 = data.male.find((item:any) => item.id == 12)
    const que13 = data.male.find((item:any) => item.id == 13)
    // console.log('user data:', que6)
    
  return (
    <VStack>
      <FormControl bg="#6e7cd3" p={30} rounded={10} w={"30%"} mt={10}>
      {data && <Radiocompo radiodata={que6}/>}
      {data && <Checkboxs checkboxdata={que8}/>}
      {data && <Radiocompo radiodata={que9}/>}
      {data && <Radiocompo radiodata={que10}/>}
      {data && <Radiocompo radiodata={que11}/>}
      {data && <Radiocompo radiodata={que12}/>}
      {data && <Radiocompo radiodata={que13}/>}
      </FormControl>
    </VStack>
  );
};

export default Form2;
