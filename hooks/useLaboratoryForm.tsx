import { useState } from "react";

interface LaboratoryFormData {
  prompt: string;
  model: string;
  temperature: number;
}

export const useLaboratoryForm = () => {
  const [formData, setFormData] = useState<LaboratoryFormData>({
    prompt: "",
    model: "Gemini 2.5",
    temperature: 0.5,
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
      // Simulate API call
    } catch (error) {}
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
