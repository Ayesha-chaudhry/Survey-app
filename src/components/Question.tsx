import { Checkbox, FormControl, FormLabel, Stack, VStack } from "@chakra-ui/react";
import {InputType} from ".././pages/PrForm"
import React from "react";

const Question = ({ questions,onChange,value }: any) => {
  console.log("questions", questions);
  return (
    <VStack>
      <FormControl bg="#6e7cd3" p={30} rounded={10} w={"30%"} mt={10}>
        <FormLabel>{questions.que}</FormLabel>
        {/* <Stack pl={6} mt={1} spacing={1}>
          {questions &&
            questions.ans.map((item: string) => <Checkbox>{item}</Checkbox>)}
        </Stack> */}
        <InputType question={questions} onChange={onChange} value={value} />

      </FormControl>
    </VStack>
  );
};
export default Question;
