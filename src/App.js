import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigatiionBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/Superhero';
import "./style/landingpage.css"



function App() {
  return (
    <div>
      <div className="my-bg">
        <NavigationBar/>
        <Intro/>
      </div>

      <div className='trending'>
        <Trending/>
      </div>

      <div className='superhero'>
        <SuperHero/>
      </div>

    </div>
  );
}

export default App;
