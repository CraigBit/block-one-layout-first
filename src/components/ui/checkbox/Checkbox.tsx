import { useState } from 'react';
import styles from './Checkbox.module.scss';

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <input
        onChange={() => setIsChecked((prevState) => !prevState)}
        type='checkbox'
        className={styles.conceal}
        checked={isChecked ? true : false}
      />
    </>
  );
};
