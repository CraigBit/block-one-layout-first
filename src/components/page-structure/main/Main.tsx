import './Main.scss';

import { Reasons } from './main-parts/Reasons';
import { Certificate } from './main-parts/Certificate';
import { Register } from './main-parts/Register';
import { Faq } from './main-parts/Faq';
import { Info } from './main-parts/Info';
import { Plan } from './main-parts/Plan';

export const Main = () => {
  return (
    <main className='main'>
      <Info />
      <Reasons />
      <Plan />
      <Certificate />
      <Register />
      <Faq />
    </main>
  );
};
