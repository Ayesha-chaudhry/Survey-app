import { Checkbox, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import React from "react";
type checkboxType = {
  id: number;
  que: string;
  ans: string[];
};

const Checkboxs = ({ checkboxdata }: { checkboxdata: any }) => {
  return (
    <FormControl>
      <FormLabel>{checkboxdata && checkboxdata.que}</FormLabel>
      <Stack pl={6} mt={1} spacing={1}>
        {checkboxdata &&
          checkboxdata.ans.map((item: string, id: number) => <Checkbox
          key={id}
          >{item}</Checkbox>)}
      </Stack>
    </FormControl>
  );
};

export default Checkboxs;
