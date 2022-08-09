import './global-styles/App.scss';

import { Footer } from './components/page-structure/footer/Footer';
import { Header } from './components/page-structure/header/Header';
import { Main } from './components/page-structure/main/Main';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
