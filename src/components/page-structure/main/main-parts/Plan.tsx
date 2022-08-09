import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Title } from '../../../ui/title/Title';

import stepOne from '../../../../img/main/plan/step-one.svg';
import stepTwo from '../../../../img/main/plan/step-two.svg';
import stepThree from '../../../../img/main/plan/step-three.svg';
import flightPath from '../../../../img/main/plan/flight-path.svg';

import { ProgressPlane } from '../../../animated-elemets/progress-plane/ProgressPlane';

export const Plan = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  const showText = {
    hidden: { x: 20, opacity: 0 },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: 0.5 * custom },
    }),
  };
  return (
    <div className='main__plan'>
      <div className='main__plan-title'>
        <Title>
          Пошаговый <span className='section-title-two'>план</span>
        </Title>
      </div>
      <ProgressPlane isInView={isInView} />
      <motion.div
        initial='hidden'
        animate={isInView ? 'visible' : ''}
        className='main__plan-steps steps'>
        <div className='steps__stage stage-one'>
          <div className='steps__image'>
            <img src={stepOne} alt='step-one' />
          </div>
          <motion.div variants={showText} custom={1} className='steps__text'>
            Зарегистрируйтесь <br /> на конкурс{' '}
            <a href='#' className='steps__text--highlighted'>
              Здесь
            </a>
          </motion.div>
        </div>
        <div className='steps__stage stage-two'>
          <div className='steps__image'>
            <img src={stepTwo} alt='step-two' />
          </div>
          <motion.div variants={showText} custom={2.1} className='steps__text'>
            Выполните все <br /> условия конкурса
          </motion.div>
        </div>
        <div ref={ref} className='steps__stage stage-three'>
          <div className='steps__image'>
            <img src={stepThree} alt='steps-three' />
          </div>
          <motion.div variants={showText} custom={3.3} className='steps__text'>
            Загрузите рисунок{' '}
            <a href='#' className='steps__text--highlighted'>
              Здесь
            </a>{' '}
            <br /> или в Личном кабинете
          </motion.div>
        </div>
        <div className='steps__track'>
          <img src={flightPath} alt='flight path' />
        </div>
      </motion.div>
    </div>
  );
};
