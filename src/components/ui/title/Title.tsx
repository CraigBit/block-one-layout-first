import { FC } from 'react';
import styles from './Title.module.scss';

interface HeaderProps {
  children: React.ReactNode;
}

export const Title: FC<HeaderProps> = ({ children }) => {
  return <div className={styles.headerTitle}>{children}</div>;
};
