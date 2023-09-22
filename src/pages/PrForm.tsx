import { Box, Checkbox, CheckboxGroup, Heading, Radio, RadioGroup, Select, VStack, Input } from '@chakra-ui/react'
import React from 'react';
import { IFemaleData,IMaleData } from "../../types/form_data";



type InputTypeProps = {
    question: IFemaleData|IMaleData;
    value: string | string[];
    onChange: (value: string | string[]) => void;
  }
  
  export const InputType: React.FC<InputTypeProps> = ({question, value, onChange}) => {
    switch (question.type){
      case "select":
        return(
          <Select value={value} onChange={(e) => onChange(e.target.value)}>
            {question.ans?.map((option:any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        );
      case "radio":
        return(
          <RadioGroup value={value as string} onChange={(e) => onChange(e)}>
            <VStack align='start'>
              {question.ans?.map((option:any) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </VStack>
          </RadioGroup>
        );
        
      case "checkbox": 
      const handleGroupChange = (values: string[]) => {
        onChange(values);
      };
        return(
          <CheckboxGroup
                      defaultValue={value as string[]}
                      onChange={handleGroupChange}>
                      <VStack align='start'>
                          {question.ans?.map((option:any) => (
                              <Checkbox key={option} value={option} name={question.name} id={question.name} >
                                  {option}
                              </Checkbox>
                          ))}
                      </VStack>
                  </CheckboxGroup>
        );
      case "email":
        return (
          <Input
           type="email"
           value={value}
           onChange={(e) => onChange(e.target.value)}
          />
        );
        case "phone":
        return (
          <Input
           type="number"
           value={value}
           onChange={(e) => onChange(e.target.value)}
          />
        );
      default:
        return null;
    }
  }