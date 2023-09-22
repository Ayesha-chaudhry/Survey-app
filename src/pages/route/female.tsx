import { useFormData } from '@/context/context'
import Gb1 from '@/ui/Gb1'
import Gr3 from '@/ui/Gr3'
import Grt2 from '@/ui/Grt2'
import Question1 from '@/ui/Question1'
import Question10 from '@/ui/Question10'
import Question11 from '@/ui/Question11'
import Question12 from '@/ui/Question12'
import Question13 from '@/ui/Question13'
import Question14 from '@/ui/Question14'
import Question15 from '@/ui/Question15'
import Question17 from '@/components/Question17'
import Question16 from '@/ui/Question16'
import Question19 from '@/components/Question19'
import Question2 from '@/ui/Question2'
import Question3 from '@/ui/Question3'
import Question4 from '@/ui/Question4'
import Question5 from '@/ui/Question5'
import  Question6  from '@/ui/Question6'
import Question7 from '@/ui/Question7'
import Question8 from '@/ui/Question8'
import Question9 from '@/ui/Question9'
import Thank16 from '@/ui/Thank16'
import ThankA16 from '@/ui/ThankA16'
import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import FmQues9 from '@/ui/FmQues9'
import FmQues10 from '@/ui/FmQues10'
import FmQues13 from '@/ui/FmQues13'
import FmQues14 from '@/ui/FmQues14'

// import { Lemonada } from 'next/font/google'
// const lemonada = Lemonada({ subsets: ["latin"] });

const Female = () => {
  // const [counter, setCounter] = useState(1)
  const {step, setStep,selectedgender} = useFormData()
  
  return (
    <>
{
  step == 12 && (
    <FmQues9/>
  )
}
    {
  step == 13 && (
    <FmQues10/>
  )
}  
{
  step == 14 && (
    <Question11/>
  )
}
{
  step == 15 && (
    <Question12/>
  )
}
{
  step == 16 && (
    <FmQues13/>
  )
}
{
  step == 17 && (
    <FmQues14/>
  )
}
{
  step == 18 && (
    <Question15/>
  )
}
{
  step == 19 && (
    <Question16/>
  )
}

{
  step == 20 && (
    <Thank16/>
  )
}
{
  step == 21 && (
    <ThankA16/>
  )
}
   
      {/* {swit()}
      <Button m={4} onClick={() => setCounter(counter + 1)} cursor={"pointer"}>Next Question</Button>
      <Button onClick={() => setCounter(counter - 1)}>Previous</Button> */}

    </>
  )
}

export default Female