import { Spoiler } from '../../../ui/spoiler/Spoiler';
import { Title } from '../../../ui/title/Title';

export const Faq = () => {
  const questionArray = [
    {
      id: 1,
      question: 'Может ли ребенок заниматься самостоятельно?',
      answer:
        'Lorem ipsum dolor sit amet. Quas, molestiae. Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      id: 2,
      question: 'Как происходит оплата?',
      answer:
        'Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку.',
    },
    {
      id: 3,
      question: 'Есть ли гарантии усвоения материала?',
      answer:
        'Optio non incidunt quidemeius corporis officiis eos voluptate sed eum sit.',
    },
    {
      id: 4,
      question: 'С кем будет общаться мой ребёнок?',
      answer:
        'Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, molestiae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio non incidunt quidemeius corporis officiis eos voluptate sed eum sit. Saepe id nulla debitis laboriosam cupiditate unde architecto quidem magnam',
    },
    {
      id: 5,
      question: 'Каковы принципы обучения?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 6,
      question: 'Сколько раз в неделю можно заниматься?',
      answer:
        'Saepe id nulla debitis laboriosam cupiditate unde architecto quidem magnam.',
    },
  ];

  return (
    <div className='main__faq'>
      <div className='main__faq-title'>
        <Title>Вопрос/Ответ</Title>
      </div>
      <div className='main__faq-questions question'>
        {questionArray.map((question) => {
          return (
            <Spoiler key={question.id} answer={question.answer}>
              {question.question}
            </Spoiler>
          );
        })}
      </div>
    </div>
  );
};
