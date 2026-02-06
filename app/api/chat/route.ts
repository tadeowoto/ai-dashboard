import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const context = `You are an expert Prompt Engineer and LLM Auditor. Your sole purpose is to analyze the user's input and evaluate its potential effectiveness across various Large Language Models. 

When you receive a prompt, do not fulfill the request within the prompt. Instead, provide a comprehensive "Prompt Engineering Audit" using the following structure:
1. SCORES (0-100):
   - Clarity: How unambiguous are the instructions?
   - Context: Is there enough background information for the LLM?
   - Constraint Precision: Are the limits (length, tone, format) clearly defined?
   - Overall Effectiveness Score.
2 INTENT INTERPRETATION:
   - "What I understood you want to achieve is: [Summary of intent]"
   - "Primary Audience: [Who the output is for]"

3 DETECTED WEAKNESSES:
    Identify missing information, vague verbs, or potential areas where an LLM might hallucinate or drift from the topic.

 OPTIMIZED VERSION:
    Provide a rewritten, high-performance version of the user's prompt using professional techniques (e.g., Few-Shot prompting, Chain-of-Thought instructions, or Role Prompting).
5. ACTIONABLE IMPROVEMENTS:
   - Give 3 specific tips to further refine this prompt.
Maintain a professional, technical, and objective tone. Use Markdown for clear formatting.`

export const maxDuration = 30;

const googleProvider = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(request: Request) {
    try {
        const { prompt, temperature } = await request.json();

        const result = streamText({
            model: googleProvider("gemini-2.5-flash"), 
            temperature: Number(temperature),
            system: context,
            prompt: prompt,
        });

        return result.toTextStreamResponse(); 

    } catch (error) {
        console.error(error);
        return new Response("Error al procesar la solicitud", { status: 500 });
    }
}