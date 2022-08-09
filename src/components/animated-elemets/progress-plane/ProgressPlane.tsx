import { motion } from 'framer-motion';
import { FC } from 'react';
import progressPlane from '../../../img/main/plan/plane.svg';
import styles from './ProgressPlane.module.scss';

interface ProgressPlaneProps {
  isInView: boolean;
}

export const ProgressPlane: FC<ProgressPlaneProps> = ({ isInView }) => {
  const progressPlanePath = {
    invisible: { opacity: 0, x: -300, y: -80, rotate: 10 },
    flypath: {
      opacity: [0.3, 1, 1, 1, 0.8, 0.7, 0],
      x: [-300, 20, 500, 750, 1000, 1250, 1450],
      y: [-80, -10, 220, 350, 425, 410, 300],
      rotate: [10, 10, 30, 15, 5, -20, -25],
      transition: {
        duration: 2.3,
        ease: 'linear',
        times: [0, 0.25, 0.5, 0.65, 0.8, 0.9, 1],
      },
    },
  };
  return (
    <motion.div
      className={styles.progressPlane}
      variants={progressPlanePath}
      initial='invisible'
      animate={isInView ? 'flypath' : ''}>
      <img src={progressPlane} alt='progressPlane' />
    </motion.div>
  );
};
