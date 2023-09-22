import React, { useState } from "react";
import { data } from "../data/dummy"; // Assuming the survey data is exported from surveyData.ts
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Radio,
	RadioGroup,
	Select,
	Input,
	VStack,
	Heading,
	Text,
	Checkbox,
	CheckboxGroup,
} from "@chakra-ui/react";
import { Question, SurveyData } from "../../utils/types";

type InputTypeProps = {
	question: Question;
	value: string | string[]; // Change the value type to allow for an array in the case of checkboxes
	onChange: (value: string | string[]) => void;
};

const InputType: React.FC<InputTypeProps> = ({ question, value, onChange }) => {
	switch (question.type) {
		case "select":
			return (
				<Select value={value} onChange={(e) => onChange(e.target.value)}>
					{question.ans?.map((option:any) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Select>
			);

		case "radio":
			return (
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

			return (
				<CheckboxGroup
					defaultValue={value as string[]}
					onChange={handleGroupChange}>
					<VStack align='start'>
						{question.ans?.map((option:any) => (
							<Checkbox key={option} value={option}>
								{option}
							</Checkbox>
						))}
					</VStack>
				</CheckboxGroup>
			);

		case "email":
			return (
				<Input
					type='email'
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			);

		case "phone":
			return (
				<Input
					type='tel'
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			);

		default:
			return null;
	}
};

const SurveyForm: React.FC = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [formData, setFormData] = useState<{
		[key: number]: string | string[];
	}>({});
	const [selectedGender, setSelectedGender] = useState<string>("male");

	const genderQuestion = (data as SurveyData)[selectedGender || "step1"];

	const handleInputChange = (value: string | string[]) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[currentStep]: value,
		}));
	};

	const handleNextStep = () => {
		setCurrentStep((prevStep) => prevStep + 1);
	};

	const handlePrevStep = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	const onSubmit = () => {
		if (currentStep === 0) {
			setSelectedGender(formData[1] as string); // Set the selected gender
			console.log(selectedGender);

			// setCurrentStep(0); // Reset currentStep to 0 when gender is selected
		} else {
			console.log(formData[1], currentStep);
			console.log(Object.values(formData));
			// Handle the submission of the entire form here if needed
		}
	};
	console.log(genderQuestion, currentStep);

	return (
		<Box p={4}>
			<Heading mb={4}>Survey Form</Heading>
			<FormControl>
				<FormLabel>{genderQuestion[currentStep]?.que}</FormLabel>
				<InputType
					question={genderQuestion[currentStep]}
					value={formData[currentStep] || ""}
					onChange={handleInputChange as any}
				/>
			</FormControl>
			<VStack spacing={4} mt={4}>
				{currentStep > 0 && (
					<Button colorScheme='blue' onClick={handlePrevStep}>
						Previous
					</Button>
				)}
				{currentStep < genderQuestion.length - 1 ? (
					<Button colorScheme='blue' onClick={handleNextStep}>
						Next
					</Button>
				) : (
					<Button colorScheme='green' onClick={onSubmit}>
						Submit
					</Button>
				)}
			</VStack>
		</Box>
	);
};

export default SurveyForm;