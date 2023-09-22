export interface Question {
	id: number;
	que: string;
	ans?: string[];
	type: "select" | "radio" | "email" | "phone";
}

// Define the main data structure
export interface SurveyData {
	step1: Question[];
	male: Question[];
	female: Question[];
}
