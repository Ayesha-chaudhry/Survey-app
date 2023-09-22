import Checkboxs from "@/components/Checkboxs";
import Radiocompo from "@/components/Radio";
import { data } from "@/data/data";
import { FormControl, VStack } from "@chakra-ui/react";
import React from "react";
import RadioInp from "@/components/RadioInp";

const FForm4 = () => {
  const que6 = data.female.find((item: any) => item.id === 6);
  const que7 = data.female.find((item: any) => item.id === 7);
  const que8 = data.female.find((item: any) => item.id === 8);
  const que9 = data.female.find((item: any) => item.id === 9);
  const que10 = data.female.find((item: any) => item.id === 10);
  const que11 = data.female.find((item: any) => item.id === 11);
  const que12 = data.female.find((item: any) => item.id === 12);
  const que13 = data.female.find((item: any) => item.id === 13);
  const que14 = data.female.find((item: any) => item.id === 14);
  return (
    <VStack>
      <FormControl bg="#6e7cd3" p={30} rounded={10} w={"30%"} mt={10}>
        <FormControl>{data && <Radiocompo radiodata={que6} />}</FormControl>
        <FormControl mt={5}>
          {data && <Checkboxs checkboxdata={que7} />}
        </FormControl>
        <FormControl mt={5}>
          {data && <Radiocompo radiodata={que8} />}
        </FormControl>
        <FormControl mt={5}>
          {data && <Checkboxs checkboxdata={que9} />}
        </FormControl>
        <FormControl mt={5}>
          {data && <Radiocompo radiodata={que10} />}
        </FormControl>
        <FormControl mt={5}>
          {data && <Radiocompo radiodata={que11} />}
        </FormControl>
        {/* <FormControl mt={5}>
          {data && <RadioInp RadioInpdata={que12} />}
        </FormControl> */}
        <FormControl mt={5}>
          {data && <Radiocompo radiodata={que13} />}
        </FormControl>
        <FormControl mt={5}>
          {data && <Radiocompo radiodata={que14} />}
        </FormControl>
      </FormControl>
    </VStack>
  );
};

export default FForm4;
