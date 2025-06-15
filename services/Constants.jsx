import { BriefcaseBusinessIcon, Calendar, Code2Icon, LayoutDashboard, List, Puzzle, Settings, User2Icon, UserIcon, WalletCards } from "lucide-react";

    export const SideBarOptions=[
        {
            name: 'DashBoard',
            icon: LayoutDashboard,
            path: '/dashboard'
        },
        {
            name: 'Scheduled Interview',
            icon: Calendar,
            path: '/schedued-interview'
        },
        {
            name: 'All Interview',
            icon: List,
            path: '/all-interview'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/settings'
        },
    ]
    export const InterviewType=[
        {
            name: 'Technical',
            icon: Code2Icon,
        },
        {
            name: 'Behavioral',
            icon: User2Icon,
        },
        {
            name: 'Exprience',
            icon: BriefcaseBusinessIcon,
        },
        {
            name: 'Problem Solving',
            icon: Puzzle,
        },
        {
            name: 'Leadership',
            icon: UserIcon,
        },
    ]
    // export const QUESTIONS_PROMPT = `You are an expert technical interviewer.
    // Based on the following inputs, generate a well-structured list of high-quality interview questions:
    // Job Title: {{jobTitle}}
    // Job Description: {{jobDescription}}
    // Interview Duration: {{duration}}
    // Interview Type: {{type}}
    // 🌸 Your task:
    // Analyze the job description to identify key responsibilities, required skills, and expected experience.
    // Generate a list of interview questions depends on interview duration
    // Adjust the number and depth of questions to match the interview duration.
    // Ensure the questions match the tone and structure of a real-life {{type}} interview.
    // 🌸 Format your response in JSON format with array list of questions.
    // format: interviewQuestions=[
    // {
    // question:'',
    // type:'Technical/Behavioral/Experince/Problem Solving/Leadership'
    // },{ 
    // ...
    // }]
    // 🎯 The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobTitle}} role.`
export const QUESTIONS_PROMPT = `
You are an expert AI interview assistant. 

🎯 Task:
Given the job details below, generate a JSON array of high-quality interview questions tailored to the role, experience, and interview type.

📄 Inputs:
- Job Title: {{jobTitle}}
- Job Description: {{jobDescription}}
- Interview Duration: {{duration}} minutes
- Interview Type: {{type}} (e.g., Technical, Behavioral, Mixed)

✅ Output Format:
Respond **only** with a valid JSON object in this exact structure:

{
  "interviewQuestions": [
    {
      "question": "What is your experience with RESTful APIs?",
      "type": "Technical"
    },
    {
      "question": "Describe a situation where you had to work under pressure.",
      "type": "Behavioral"
    }
    // More questions here...
  ]
}

⚠️ Do not include any markdown, explanation, or formatting outside of the JSON.

🧠 Notes:
- Match the question depth to the interview duration.
- Include a mix of question types relevant to the role.
- Keep the number of questions proportional to the time available.
- Keep language natural and professional.
- give minimum 10 question or more than that
`;
