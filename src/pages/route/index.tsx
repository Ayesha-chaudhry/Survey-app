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
import Question16 from '@/ui/Question16'
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
import Male from './male'
import Female from './female'

// import { Lemonada } from 'next/font/google'
// const lemonada = Lemonada({ subsets: ["latin"] });

const Page = () => {
  const [counter, setCounter] = useState(1)
  const {step, setStep,selectedgender ,formData} = useFormData()
  // function swit(){
  //   switch (counter){
  //     case 1: 
  //     return <Question1/>
  //     case 2:
  //       return <Question2/>
  //       case 3: 
  //       return <Question3/>
  //       case 4:
  //         return <Question4/>
  //       case 5:
  //         return <Question5/>
  //       case 6:
  //         return <Question6/>
  //       case 7:
  //         return <Question7/>
  //       case 8:
  //         return <Question8/>
  //       case 9:
  //         return <Question9/> 
  //       case 10:
  //         return <Question10/>
  //       case 11:
  //         return <Question11/>
  //       case 12: 
  //         return <Question12/>
  //       case 13: 
  //         return <Question13/>
  //       case 14:
  //         return <Question14/>
  //       case 15:
  //         return <Question15/>
  //       case 16:
  //         return <Question16/>
  //       case 17:
  //         return <Question17/>
  //       case 18:
  //         return <Question18/>
  //       default: 
  //       return null;
  
  
  //   }
  // }
    console.log(selectedgender)
  return (
    <>
   <Box>
    {step == 1 && (
      <Gb1/>
    )}
    {step == 2 && (
      <Grt2/>
    )}
    {step  == 3 && (
      <Question1/>
    )}
    {step == 4 && (
      <Question2/>
    )
}
{step == 5 && (
      <Question3/>
    )
}
{step == 6 && (
      <Question4/>
    )
}
{
  step == 7 && (
    <Question5/>
  )
}
{
  step == 8 && (
    <Question6/>
  )
}


{step == 9 &&(
  <Gr3/>
)}
{
  step == 10 && (
    <Question7/>
  )
}
{
  step == 11 && (
    <Question8/>
  )
}

{/* {
  step == 12 && (
    <Question9/>
  )
} */}

{ formData.selectedgender === "male" && (
<Male/>
)}

{ formData.selectedgender === "female" && (
<Female/>
)}
{/* {
  step == 13 && (
    <Question10/>
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
    <Question13/>
  )
}
{
  step == 17 && (
    <Question14/>
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
} */}

   </Box>
      
      {/* {swit()}
      <Button m={4} onClick={() => setCounter(counter + 1)} cursor={"pointer"}>Next Question</Button>
      <Button onClick={() => setCounter(counter - 1)}>Previous</Button> */}

    </>
  )
}

export default Page