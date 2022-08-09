import star from '../../../../img/main/reasons/one-star.svg';
import winner from '../../../../img/main/reasons/two-winner.svg';
import certificate from '../../../../img/main/reasons/three-certification.svg';
import gift from '../../../../img/main/reasons/four-gift.svg';
import email from '../../../../img/main/reasons/five-email.svg';
import publishing from '../../../../img/main/reasons/six-publishing.svg';
import { Title } from '../../../ui/title/Title';

export const Reasons = () => {
  return (
    <div className='main__reasons'>
      <div className='main__reasons-title'>
        <Title>
          Для чего <span className='section-title-one'>нужно</span> участвовать
        </Title>
      </div>
      <div className='main__reasons-cards reason-card'>
        <div className='reason-card'>
          <div className='reason-card__image'>
            <img src={star} alt='star' />
          </div>
          <div className='reason-card__text'>
            Шанс занять 1 место в вашем городе и по всей России
          </div>
        </div>
        <div className='reason-card'>
          <div className='reason-card__image'>
            <img src={winner} alt='winner' />
          </div>
          <div className='reason-card__text'>
            Развитие самостоятельности + свободное время для родителей ;)
          </div>
        </div>
        <div className='reason-card'>
          <div className='reason-card__image'>
            <img src={certificate} alt='certificate' />
          </div>
          <div className='reason-card__text'>
            Персональный диплом в разных номинациях каждому участнику
          </div>
        </div>
        <div className='reason-card'>
          <div className='reason-card__image'>
            <img src={gift} alt='gift' />
          </div>
          <div className='reason-card__text'>
            Призы и скидки для подписчиков и авторизованных пользователей
          </div>
        </div>
        <div className='reason-card'>
          <div className='reason-card__image'>
            <img src={email} alt='email' />
          </div>
          <div className='reason-card__text'>
            Бесплатный диплом на email <hr /> через 1 день после конкурса
          </div>
        </div>
        <div className='reason-card'>
          <div className='reason-card__image'>
            <img src={publishing} alt='publish' />
          </div>
          <div className='reason-card__text'>
            Публикация работ победителей во ВКонтакте.{' '}
            <a href='#' className='reason-card__text--highlighted'>
              Подписывайтесь!
            </a>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
