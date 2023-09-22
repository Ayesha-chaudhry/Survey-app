import { FormControl, FormLabel, Input} from '@chakra-ui/react';
import React from 'react'

const Inpcompo = ({Inpdata}: {Inpdata: any}) => {
  return (
    <FormControl>
        <FormLabel>{Inpdata && Inpdata.que}</FormLabel>
        <Input>{Inpdata && Inpdata.ans}</Input>
    </FormControl>
  )
}

export default Inpcompo