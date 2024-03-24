"use client";

import { useFormState } from "react-dom";

import { handleFormSubmission } from "./actions";
import { TextInput } from "./TextInput";

import styles from "./page.module.css";

export type TitleFormData = {
  title: string;
  description: string;
  author: string;
};

export type FormErrors<TFormData> =
  | Partial<Record<keyof TFormData, string>>
  | null
  | undefined;

const Form = () => {
  const [errors, formAction] = useFormState(handleFormSubmission, null);

  return (
    <div className={styles.container}>
      <h1>Form with actions</h1>
      <p>This form uses form actions to submit its contents.</p>

      <form action={formAction}>
        <TextInput name="title" label="Title" errorMessage={errors?.title} />
        <TextInput
          name="description"
          label="Description"
          errorMessage={errors?.description}
        />
        <TextInput name="author" label="Author" errorMessage={errors?.author} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
