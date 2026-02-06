import { useState } from "react";
import { useCompletion } from "@ai-sdk/react";

interface LaboratoryFormData {
  prompt: string;
  model: string;
  temperature: number;
}

export const useLaboratoryForm = () => {
  const [formData, setFormData] = useState<LaboratoryFormData>({
    prompt: "",
    model: "gemini-1.5-flash",
    temperature: 0.5,
  });

  const { completion, complete, isLoading } = useCompletion({
    api: "/api/chat",
    streamProtocol: "text",
    body: {
      model: formData.model,
      temperature: formData.temperature,
    },
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await complete(formData.prompt);
    } catch (error) {
      console.error("Error completing prompt:", error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    completion,
    isLoading,
  };
};
