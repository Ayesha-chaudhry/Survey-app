"use client";
import { useState, createContext, useContext } from "react";
import { useEffect } from "react";

export type data = {
  [x: string]: string | string[];
};

const initial_context: data = {
  country: "",
  selectedgender: "",
  age: "",
  education: "",
  income: "",
  employmentstatus: "",
  genderpreference: "",
  careerchallanges: "",
  misconceptions: "",
  experience: "",
  easiertowork: "",
  priority: "",
  permission: "",
  support: "",
  sendschool: "",
  email: "",
  phone: "",
  suggestion: "",
  global:"",
  great:"",
  sound:"",
  submit:""
};

export const FormContext = createContext<any>(null);

export default function FormProvider({ children }: any) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<data>(initial_context);

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem("survey-response") as string
    );
    if (localStorageData !== null) {
      setFormData(localStorageData);
    } else {
      localStorage.setItem("survey-response", JSON.stringify(formData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("survey-response", JSON.stringify(formData));
  }, [formData]);
  // console.log('Form Data', formData)

  return (
    <FormContext.Provider value={{ step, setStep, formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
