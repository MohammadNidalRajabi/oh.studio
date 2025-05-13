import './App.css';
import Carousel from './Carousel';
import Logo from './Logo';
import MyShape from './MyShape';

function App() {
  return (
    <>
    <div className='row'>
      <div className='right'>
        A{' '}
        <a href='https://x.com/olvhrs' target='_blank'>
              <img
          src="https://framerusercontent.com/images/0pm0YMy5C3Wnyy3wwxyelg47gO4.png"
          alt=""
        />
        </a>
      {' '}
        designer working with startups globally. Currently steering the ship at{' '}
        <MyShape/>
        <span>Haptic.</span>
      </div>

      <Logo />
    </div>
  <Carousel />
</>
  );
}

export default App;