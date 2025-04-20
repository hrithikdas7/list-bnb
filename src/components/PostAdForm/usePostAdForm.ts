import { useState } from "react";
import { PostAd } from "./api";

export type Values = {
  description: string;
  image: string;
  price: number;
  title: string;
};

export const usePostAdForm = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values: Values) => {
    setLoading(true);
    try {
      const result = await PostAd(
        values.title,
        values.description,
        values.price,
        values.image
      );
      if (result) {
        console.log("Ad posted successfully:", result);
        // Optionally, you can reset the form or redirect the user
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error submitting ad:", error?.message);
    }
  };

  return { handleSubmit, loading };
};
