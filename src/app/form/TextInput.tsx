import { useId } from "react";

import styles from "./page.module.css";

type TextInputProps = {
  name: string;
  label: string;
  errorMessage?: string;
};

const TextInput = ({ name, label, errorMessage }: TextInputProps) => {
  const id = useId();

  return (
    <div className={styles.formGroup}>
      <div>
        <label htmlFor={id}>{label}: </label>
        <input id={id} type="text" name={name} />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export { TextInput };
