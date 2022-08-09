import { FormPlanes } from '../../../animated-elemets/form-planes/FormPlanes';
import { Checkbox } from '../../../ui/checkbox/Checkbox';
import { FormInput } from '../../../ui/input/FormInput';
import { Title } from '../../../ui/title/Title';
import vk from '../../../../img/main/register/vk.svg';
import odnoklassniki from '../../../../img/main/register/odnoklassniki.svg';

export const Register = () => {
  return (
    <div className='main__register'>
      <div className='main__register-discount discount'>
        <svg
          className='discount__covering'
          width='292'
          height='110'
          viewBox='0 0 292 110'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g>
            <path d='M281.07 14.7005H292L281.07 0V14.7005Z' fill='#0E8958' />
            <path d='M10.9305 14.7005H0L10.9305 0V14.7005Z' fill='#0E8958' />
            <path
              className='discount__covering-front'
              d='M281.07 14.7005V0H10.9305V14.7005V110L146 74.5161L281.07 110V14.7005Z'
            />
            <text className='discount__covering-text' x={55} y={42}>
              Скидка за репост
            </text>
          </g>
        </svg>
        <div className='discount--white'>
          <div className='discount__label'>Стоимость участия:</div>
          <div className='discount__price'>
            <div className='discount__price--discounted'>149₽</div>
            <div className='discount__price--original'>299₽</div>
          </div>
          <div className='discount__details'>
            При наличии репоста в соцсетях :)
          </div>
        </div>
        <div className='discount--colored'>
          <a href='#' className='discount__link'>
            Получить скидку:
          </a>
          <div className='discount__socials'>
            <img src={vk} alt='vk' />
            <img src={odnoklassniki} alt='odnoklassniki' />
          </div>
        </div>
      </div>
      <div className='main__register-form form'>
        <div className='form__title'>
          <Title>Зарегистрируйтесь, чтобы участвовать</Title>
        </div>
        <form action='#' className='form__body'>
          <FormInput type='text' placeholder='ФИО ребёнка' required />
          <FormInput type='text' placeholder='Дата рождения' required />
          <FormInput type='text' placeholder='Город' required />
          <FormInput type='text' placeholder='Email' required />
          <FormInput type='text' placeholder='Пароль' required />
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
          <button className='form__submit-button'>Участвовать</button>
        </form>
        <FormPlanes />
      </div>
    </div>
  );
};
