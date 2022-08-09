import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import faqIcon from '../../../img/main/faq/expand-icon.svg';
import styles from './Spoiler.module.scss';

interface Props {
  children: string;
  answer: string;
}

export const Spoiler: FC<Props> = ({ children, answer }) => {
  const [isRotated, setIsRotated] = useState(false);
  const rotation = {
    initial: {
      rotate: 0,
    },
    startRotation: {
      rotate: 45,
      transition: {
        duration: 0.2,
      },
    },
  };

  const textHeight = {
    hidden: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: {
        duration: 0.6,
      },
    },
    visible: {
      marginTop: 20,
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <>
      <div className={styles.spoiler}>
        <div className={styles.spoilerHeader}>
          <div className={styles.spoilerLabel}>{children}</div>
          <motion.div
            variants={rotation}
            initial='initial'
            animate={isRotated ? 'startRotation' : ''}
            onClick={() => setIsRotated((prevState) => !prevState)}
            className={styles.spoilerIcon}>
            <img src={faqIcon} alt='faq-icon' />
          </motion.div>
        </div>
        <AnimatePresence>
          {isRotated && (
            <motion.div
              className={styles.spoilerContent}
              variants={textHeight}
              initial='hidden'
              animate='visible'
              exit='hidden'>
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
