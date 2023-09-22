import { Box, Checkbox, Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react'
import { type } from 'os'
import React from 'react'

const CheckboxInp = ({CheckboxInpdata}: {CheckboxInpdata : any}) => {
  return (
    <FormControl>
        <FormLabel>{CheckboxInpdata && CheckboxInpdata.que}</FormLabel>
        <Stack pl={6} mt={1} spacing={1}>
            {CheckboxInpdata && CheckboxInpdata.ans.map((item:string, id: number) => (
                <Flex key={id}>
                    <Checkbox>{item}</Checkbox>
                    <Box>{item == "Other:" && <input type="text"/> }

                    </Box>
                </Flex>
            ))}
        </Stack>
    </FormControl>
  )
}

export default CheckboxInp