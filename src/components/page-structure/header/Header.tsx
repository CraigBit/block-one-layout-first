import { Timer } from '../../animated-elemets/timer/Timer';
import logoSlonum from '../../../img/header/logo-slonum.svg';
import './Header.scss';
import { Space } from '../../animated-elemets/space/Space';
import { Girl } from '../../animated-elemets/girl/Girl';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__space'>
        <Space />
      </div>
      <div className='header__girl'>
        <Girl />
      </div>
      <div className='header__menu'>
        <div className='header__menu-logo'>
          <img src={logoSlonum} alt='logo-slonum' />
        </div>
        <a className='header__menu-login' href='#'>
          Войти
        </a>
      </div>
      <div className='header__announcement'>
        <div className='header__announcement-slonum'>от компании слонум</div>
        <div className='header__announcement-title'>
          Всероссийский конкурс Детского рисунка
        </div>
        <div className='header__announcement-description'>
          Участвуйте в конкурсе и получайте призы в различных номинациях
          детского рисунка для всех возрастов
        </div>
        <div className='header__announcement-ui ui'>
          <a className='ui__button' href='#'>
            Участвовать
          </a>
          <Timer />
        </div>
      </div>
    </header>
  );
};
