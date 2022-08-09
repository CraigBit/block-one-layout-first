import { Title } from '../../../ui/title/Title';
import example from '../../../../img/main/certificate/certificate-example.jpg';

export const Certificate = () => {
  return (
    <div className='main__certificate'>
      <div className='main__certificate-description description'>
        <div className='description__title'>
          <Title>
            Выдаём <span className='section-title-three'>дипломы</span>{' '}
            участникам
          </Title>
        </div>
        <div className='description__text'>
          <div className='description__text-paragraph'>
            Жюри конкурса рассмотрит работы и выделит победителей по городам и
            возрастным категориям, а также определит другие номинации,
            подчеркнув уникальную особенность каждого конкретного рисунка —
            дипломы получат все дети!
          </div>
          <div className='description__text-paragraph'>
            Скачать диплом можно будет в личном кабинете через сутки после
            окончания конкурса, дополнительно вышлем его на e-mail.
          </div>
          <div className='description__text-paragraph'>
            Со слоном к победам напролом!
          </div>
        </div>
      </div>
      <div className='main__certificate-image'>
        <img src={example} alt='certificate example' />
      </div>
    </div>
  );
};
