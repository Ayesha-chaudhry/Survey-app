import { useState } from "react";
import Question from "@/components/Question";
import { FemaleData } from "@/data/femaledata";
import { MaleData } from "@/data/maledata";
import {
  Box,
  Button,
  FormLabel,
  Radio,
  Stack,
} from "@chakra-ui/react";


const SurveyForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [stepQue, setStepQue] = useState("gender");
  const [genderBaseQue, setGenderBaseQue] = useState("");
  const [formData, setFormData] = useState<{
		[key: number]: string | string[];
	}>({});

  
  function handleNextQuestion() {

    if (currentQuestion < MaleData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handleSubmit() {
    console.log("Form submitted");
    console.log("formData", formData);
  }

  const handleInputChange = (value: string | string[]) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[currentQuestion]: value,
		}));
	};

  function handleSubmitGender() {
    let elem: any = document.getElementsByName("gender");
    let nodeSingle: any;

    elem.forEach((item: any) => {
      if (item.checked) {
        nodeSingle = item;
      }
    });
    if (!nodeSingle) {
      alert("please select Any option");
    } else {
      setGenderBaseQue(nodeSingle.value);
      // setStepQue("que");
    }
  }

  return (
    <Box>
      {genderBaseQue === "" ? (
        <Box>
          <FormLabel>What's your gender?</FormLabel>
          <Stack>
            <Radio size="lg" name="gender" value="male">
              Male
            </Radio>
            <Radio size="lg" name="gender" value="female">
              Female
            </Radio>
          </Stack>
          <Button
            onClick={handleSubmitGender}
            
            variant="solid"
          >
            Submit
          </Button>
        </Box>
      ) : genderBaseQue === "male" ? (
        <Box>
          <Question questions={MaleData[currentQuestion]} onChange={handleInputChange} value={formData[currentQuestion] || ""} />
          {currentQuestion < MaleData.length - 1 ? (
            <Button
              onClick={handleNextQuestion}
              
              variant="solid"
            >
              Continue
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              
              variant="solid"
            >
              Submit
            </Button>
          )}
        </Box>
      ) : (
        <Box>
          <Question questions={FemaleData[currentQuestion]} />
          {currentQuestion < MaleData.length - 1 ? (
            <Button  variant="solid">
              Continue
            </Button>
          ) : (
            <Button  variant="solid">
              Submit
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SurveyForm;
