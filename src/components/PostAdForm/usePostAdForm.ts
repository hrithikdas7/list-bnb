import { useRef, useState } from "react";
import { PostAd } from "./api";
import { toast } from "react-toastify";

export type Values = {
  description: string;
  image: string;
  price: number;
  title: string;
};

export const usePostAdForm = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);
  const handleSubmit = async (values: Values) => {
    setLoading(true);
    try {
      const result = await PostAd(
        values.title,
        values.description,
        values.price,
        values.image
      );
      console.log(result);
      if (result.status === 200) {
        toast.success("Advertisement posted successfully!");
        // @ts-expect-error - formRef is a ref to FormApi, which has a reset method
        formRef.current.reset();
      } else {
        toast.error("Failed to post advertisement. Please try again.");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error submitting ad:", error);
    }
  };

  return { handleSubmit, loading, formRef };
};
