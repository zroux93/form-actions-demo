"use server";

import { FormErrors, TitleFormData } from "./page";

export const handleFormSubmission = (
  errors: FormErrors<TitleFormData>,
  formData: FormData
): FormErrors<TitleFormData> => {
  const title = formData.get("title");
  if (!title) {
    return { title: "Title is required" };
  }
};
