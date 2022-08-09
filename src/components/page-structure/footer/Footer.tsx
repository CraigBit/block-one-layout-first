import { Checkbox } from '../../ui/checkbox/Checkbox';
import vkFooter from '../../../img/footer/socials/vk-icon.svg';
import yzenFooter from '../../../img/footer/socials/yzen-icon.svg';
import telegramFooter from '../../../img/footer/socials/telegram-icon.svg';
import upButtonFooter from '../../../img/footer/socials/up-button.svg';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__subscribe'>
        <div className='footer__subscribe-title'>
          Подпишись на нашу рассылку
        </div>
        <div className='footer__subscribe-text'>
          Обещаем присылать только самое важное и интересное :)
        </div>
        <form action='#' className='footer__subscribe-form form'>
          <div className='form__body'>
            <input
              className='form__body-email'
              placeholder='Email'
              type='email'
              required
            />
            <button className='form__body-submit'>Отправить</button>
          </div>
          <div className='form__terms'>
            <Checkbox />
            <div className='form__terms-text'>
              Отправляя данные, я соглашаюсь с{' '}
              <a href='#' className='form__terms-text--highlighted'>
                <b>Условиями конкурса</b>
              </a>{' '}
              и{' '}
              <a href='#' className='form__terms-text--highlighted'>
                <b>Политикой обработки данных</b>
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className='footer__info'>
        <div className='footer__info-nav nav'>
          <div className='nav__socials'>
            <div className='nav__socials-label'>Наши соцсети:</div>
            <div className='nav__socials-images'>
              <div className='nav__socials-image'>
                <img src={telegramFooter} alt='telegram' />
              </div>
              <div className='nav__socials-image'>
                <img src={yzenFooter} alt='yzen' />
              </div>
              <div className='nav__socials-image'>
                <img src={vkFooter} alt='vk' />
              </div>
            </div>
          </div>
          <div className='nav__menu-list'>
            <div className='nav__menu-item'>
              <a href='' className='nav__menu-link'>
                Главная
              </a>
            </div>
            <div className='nav__menu-item'>
              <a href='' className='nav__menu-link'>
                Личный кабинет
              </a>
            </div>
            <div className='nav__menu-item'>
              <a href='' className='nav__menu-link'>
                Контакты
              </a>
            </div>
            <div className='nav__menu-item'>
              <a href='' className='nav__menu-link'>
                Конфиденциальность
              </a>
            </div>
          </div>
          <div className='nav__socials-relative'>
            <div className='nav__socials-label'>Наши соцсети:</div>
            <div className='nav__socials-image--orange'>
              <img src={upButtonFooter} alt='arrow-up' />
            </div>
          </div>
        </div>
        <div className='footer__info-copyright'>
          @ Все права защищены. ООО "Слонум" 2022
        </div>
      </div>
    </footer>
  );
};
