import { FormContext } from "@/GlobalState/context";
import { data } from "../data/data";
import {
  Box,
  FormControl,
  FormLabel,
  Radio,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Radiocompo from "@/components/Radio";
import Selectopt from "@/components/Selectopt";
import RadioInp from "@/components/RadioInp";

const Form1 = () => {
  const { stepData, setStepData } = useContext(FormContext);
  // console.log('state of form1',stepData)
  const quesOne = data.step1.find((item: any) => item.id === 1);
  const ques2 = data.step1.find((item: any) => item.id === 2);
  const ques3 = data.step1.find((item: any) => item.id === 3);
  const ques4 = data.step1.find((item: any) => item.id === 4);
  const ques5 = data.step1.find((item: any) => item.id === 5);
  
  // console.log(value)

  return (
    <VStack>
      <FormControl bg="#6e7cd3" p={30} rounded={10} w={"30%"} mt={10}>
        <FormControl mt={"5%"}>
          {/* <FormLabel>{quesOne?.que}</FormLabel>
          <Select id="country" name="country" placeholder="Select option">
            {quesOne?.ans.map((item) => (
              <option value={item.toLocaleLowerCase()}>{item}</option>
            ))}
          </Select> */}
          <Selectopt selectoptdata={quesOne}/>
        </FormControl>
        <FormControl mt={5}>
        {data && <Radiocompo radiodata={ques2} />}
          {/* <FormLabel>{quesTwo?.que}</FormLabel>
          <Stack>
            <Radio
              size="md"
              name="gender"
              onClick={(e) =>
                setStepData({ ...stepData.step1, gender: "male" })
              }
            >
              Male
            </Radio>
            <Radio
              size="md"
              name="gender"
              onClick={(e) =>
                setStepData({ ...stepData.step1, gender: "female" })
              }
            >
              Female
            </Radio>
          </Stack> */}
        </FormControl>
        <FormControl mt={5}>
          {data && <Radiocompo radiodata={ques3} />}
          {/* <FormLabel>{quesThree?.que}</FormLabel>
          <Stack>
            <Radio size="md" name="age">
              Under 18 years old
            </Radio>
            <Radio size="md" name="age">
              18-24 years old
            </Radio>
            <Radio size="md" name="age">
              25-34 years old
            </Radio>
            <Radio size="md" name="age">
              35-44 years old
            </Radio>
            <Radio size="md" name="age">
              45-54 years old
            </Radio>
            <Radio size="md" name="age">
              55 years old and above
            </Radio>
          </Stack> */}
        </FormControl>
        <FormControl mt={5}>
          {data && <RadioInp RadioInpdata={ques4}/>}
          
          {/* <FormLabel>{quesFour?.que}</FormLabel>
          <Stack>
            <Radio size="md" name="education">
              High School
            </Radio>
            <Radio size="md" name="education">
              Currently enrolled in College / University
            </Radio>
            <Radio size="md" name="education">
              Bachelors
            </Radio>
            <Radio size="md" name="education">
              Masters
            </Radio>
            <Radio size="md" name="education">
              PhD
            </Radio>
            <Radio size="md" name="education">
              Other:
            </Radio>
          </Stack> */}
        </FormControl>
        <FormControl mt={5}>
          {data && <Radiocompo radiodata={ques5}/>}
          {/* <FormLabel>{ques5?.que}</FormLabel>
          <Stack>
            <Radio size="md" name="yes">
              Yes
            </Radio>
            <Radio size="md" name="no">
              No
            </Radio>
          </Stack> */}
        </FormControl>
      </FormControl>
    </VStack>
  );
};

export default Form1;
