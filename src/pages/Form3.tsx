import { FormContext } from "@/GlobalState/context";
import Radiocompo from "../components/Radio";
import Checkboxs from "@/components/Checkboxs";
// import CheckboxInp from "@/components/CheckboxInp";
import { data } from "../data/data";
import { FormControl, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import Selectopt from "@/components/Selectopt";

const Form3 = () => {
  const { stepData, setStepData } = useContext(FormContext);
  const que14 = data.male.find((item: any) => item.id === 14);
  const que15 = data.male.find((item: any) => item.id === 15);
  const que16 = data.male.find((item: any) => item.id == 16);

  return (
    <VStack>
      <FormControl bg="#6e7cd3" p={30} rounded={10} w={"30%"} mt={10}>
        {data && <Selectopt selectoptdata={que14} />}
        <FormControl mt={5}>
          {data && <Selectopt selectoptdata={que15} />}
        </FormControl>
        <FormControl mt={5}>
          {data && <Radiocompo radiodata={que16} />}
        </FormControl>
      </FormControl>
    </VStack>
  );
};

export default Form3;
