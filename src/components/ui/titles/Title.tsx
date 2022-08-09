import { FC } from 'react';
import styles from './Title.module.scss';

interface HeaderProps {
  children: string;
}

export const Title: FC<HeaderProps> = ({ children }) => {
  return <div className={styles.headerTitle}>{children}</div>;
};
