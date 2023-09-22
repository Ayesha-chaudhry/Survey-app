import Radiocompo from "@/components/Radio";
import Selectopt from "@/components/Selectopt";
import { data } from "@/data/data";
import { FormControl, VStack } from "@chakra-ui/react";
import React from "react";

const FForm5 = () => {
  const que15 = data.female.find((item: any) => item.id === 15);
  const que16 = data.female.find((item: any) => item.id === 16);
  const que17 = data.female.find((item: any) => item.id === 17);
  return (
    <VStack>
      <FormControl bg="#6e7cd3" p={30} rounded={10} w={"30%"} mt={10}>
        <FormControl mt={5}>
          {data && <Selectopt selectoptdata={que15} />}
        </FormControl>
        <FormControl mt={5}>
          {data && <Selectopt selectoptdata={que16} />}
        </FormControl>
        <FormControl mt={5}>
          {data && <Radiocompo radiodata={que17} />}
        </FormControl>
      </FormControl>
    </VStack>
  );
};

export default FForm5;
