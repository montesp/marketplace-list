import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home>
      </Home>
      <Footer/>
    </div>
  );
}

export default App;
