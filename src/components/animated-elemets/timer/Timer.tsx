import { motion } from 'framer-motion';
import styles from './Timer.module.scss';

export const Timer = () => {
  const timer = {
    timerEffect: {
      opacity: [0, 1, 1],
      transition: {
        duration: 2,
        times: [0, 0.25, 1],
        ease: 'easeIn',
        repeat: Infinity,
      },
    },
  };
  return (
    <>
      <div>
        <div className={styles.timer}>
          <div className={styles.digits}>01</div>
          <motion.div
            variants={timer}
            animate='timerEffect'
            className={styles.dots}>
            :
          </motion.div>
          <div className={styles.digits}>09</div>
          <motion.div
            variants={timer}
            animate='timerEffect'
            className={styles.dots}>
            :
          </motion.div>
          <div className={styles.digits}>43</div>
        </div>
        <div className={styles.details}>
          <div>дней</div>
          <div className={styles.hours}>
            часов <br /> <span className={styles.highlighted}>по МСК</span>
          </div>
          <div>минут</div>
        </div>
      </div>
    </>
  );
};
