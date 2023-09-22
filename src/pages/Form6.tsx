import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React from "react";

const Form6 = () => {
  return (
    <VStack>
      <FormControl bg="#6e7cd3" p={30} rounded={10} w={"30%"} mt={10}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter your Email" />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Phone Number</FormLabel>
          <Input placeholder="Enter Phone# " />
        </FormControl>
      </FormControl>
    </VStack>
  );
};

export default Form6;
