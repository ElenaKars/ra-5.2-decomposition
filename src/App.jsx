import './App.css';
import Banner from './components/Banner';
import CurrentDate from './components/CurrentData';
import Informers from './components/Informers';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Search from './components/Search';
import SearchExample from './components/SearchExample';
import Widgets from './components/Widgets';
import News from './components/News';
import AdUnit from './components/AdUnit';
import reactIcon from './assets/react.svg';

function App() {
  const news = [
    {id: 1, name: 'Новость 1', icon: reactIcon, link: '/news/1'},
    {id: 2, name: 'Новость 2', icon: reactIcon, link: '/news/2'},
    {id: 3, name: 'Новость 3', icon: reactIcon, link: '/news/3'},
    {id: 4, name: 'Новость 4', icon: reactIcon, link: '/news/4'}
  ];

  const adUnit = {
    image: reactIcon, 
    link: 'Ссылка', 
    title: 'Рекламный блок',
    text: 'Текст'
  };
  
  return (
    <div className="components">
      <div className="header-wrap">
        <News news={news} />
        <CurrentDate date={new Date().toISOString()}/>
        <AdUnit adUnit={adUnit} />
      </div>

      <Informers />

      <div className="search-wrap">
        <Logo image={reactIcon}/>

        <div>
          <Menu />
          <Search />
          <SearchExample randomSearchQuery={"Композиция компонентов"} />
        </div>
      </div>

      <Banner>Баннер</Banner>

      <Widgets />
    </div>
  );
}

export default App;