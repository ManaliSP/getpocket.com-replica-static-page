import './../../assets/css/App.css';
import Header from './header'
import Footer from './footer'
import MiddleBody from './middleBody';
import GardenerBody from './gardnerBody'
import BetweenDancerGardnerBody1 from './betweenDancerGardnerBody1'
import BetweenDancerGardnerBody2 from './betweenDancerGardnerBody2'
import AppStore from './appStore'
function App() {
  return (
    <div className="App">
      <Header/>
      <MiddleBody/>
      <BetweenDancerGardnerBody1/>
      <BetweenDancerGardnerBody2/>
      <GardenerBody/>
      <AppStore/>
      <Footer/>
    </div>
  );
}

export default App;
