import { motion } from 'framer-motion';
export const Atom = () => {
  return (
    <svg
      x={77}
      y={135}
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      overflow='visible'>
      <motion.g
        style={{
          transformOrigin: 'center',
          transformBox: 'fill-box',
        }}
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 45 }}
        transition={{
          delay: 2,
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'circOut',
        }}>
        <path
          d='M30.7544 25.365C30.7544 28.304 28.9491 52.9467 22.4048 43.4513C19.2455 38.9297 19.4711 30.1126 19.4711 24.9128C19.4711 22.8781 19.4711 2.53092 26.2411 4.33955C30.7544 5.24387 30.7544 22.1998 30.7544 25.365C30.7544 25.8171 32.3341 25.591 32.3341 24.9128C32.3341 20.3912 32.5597 2.30483 24.8871 2.53091C17.4401 2.98307 17.6658 20.6173 17.6658 25.365C17.6658 29.4344 17.4401 47.9729 24.8871 47.7468C32.5597 47.2947 32.1084 29.8865 32.1084 24.9128C32.3341 24.4606 30.7544 24.6867 30.7544 25.365Z'
          fill='white'
        />
        <path
          d='M29.1745 29.4345C26.6922 31.9214 23.9842 34.4082 21.2762 36.443C19.6965 37.5734 17.6655 39.1559 15.6345 39.8342C14.0548 40.2863 10.4442 40.9646 9.76716 38.9299C9.09016 36.8951 12.2495 32.1474 13.3778 30.5649C15.6345 27.1737 18.3425 24.0086 21.2762 21.0695C23.3072 19.0348 39.3294 4.56574 40.6834 12.2524C41.3604 17.6784 32.3338 26.0433 29.1745 29.4345C28.2718 30.3388 29.8514 30.791 30.5284 30.1127C33.0108 27.6259 47.4535 12.9307 40.9091 8.63516C35.0418 4.79181 23.0815 17.2262 19.9222 20.1652C17.2142 22.8782 3.67417 36.2169 8.8645 41.1906C14.0548 46.1644 27.5948 32.8257 30.3028 30.1127C30.9798 29.4345 29.6258 28.7562 29.1745 29.4345Z'
          fill='white'
        />
        <path
          d='M25.5634 31.243C20.1474 31.0169 11.1208 31.4691 6.60745 27.8518C-3.54755 20.3912 20.3731 18.8086 24.6608 18.8086C30.3024 18.8086 37.7494 19.0347 42.9397 21.7476C54.4487 28.0779 29.3998 31.243 25.5634 31.243C25.1121 31.243 23.7581 31.9212 24.4351 31.9212C29.8511 31.6951 43.1654 32.3734 47.0017 26.7214C52.1921 19.2608 28.9484 18.1304 25.5634 18.1304C20.1474 18.1304 6.8331 17.9043 2.99677 23.1041C-2.19356 30.7908 20.8244 31.6951 24.4351 31.6951C24.8864 31.9212 26.4661 31.4691 25.5634 31.243Z'
          fill='white'
        />
        <path
          d='M21.2753 29.4343C18.1159 26.0431 14.9565 22.4258 12.4742 18.5825C11.5715 16.9999 9.08924 13.6087 9.76624 11.3479C11.5716 4.79161 26.6913 18.5825 29.1736 20.8433C32.5586 24.2345 41.8109 33.0516 40.9082 38.9297C39.3285 45.7121 23.0806 31.2429 21.2753 29.4343C21.0496 29.2082 19.4699 29.6604 19.6956 30.1125C23.3062 33.5037 34.3639 45.2599 40.6825 41.4165C47.2269 37.3471 33.2355 23.1041 30.5275 20.3911C27.1425 16.9999 15.8592 5.24377 9.54056 9.08712C2.99623 13.1566 16.9876 27.3996 19.6956 30.1125C19.9212 30.3386 21.5009 29.6604 21.2753 29.4343Z'
          fill='white'
        />
        <path
          d='M25.1116 28.5299C26.981 28.5299 28.4966 27.0117 28.4966 25.1388C28.4966 23.2658 26.981 21.7476 25.1116 21.7476C23.2421 21.7476 21.7266 23.2658 21.7266 25.1388C21.7266 27.0117 23.2421 28.5299 25.1116 28.5299Z'
          fill='#D3993C'
        />
      </motion.g>
    </svg>
  );
};
