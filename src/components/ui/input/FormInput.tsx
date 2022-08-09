import { FC } from 'react';
import styles from './FormInput.module.scss';

interface InputProps {
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export const FormInput: FC<InputProps> = (props) => {
  return <input className={styles.formInput} {...props} />;
};
