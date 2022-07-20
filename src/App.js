import './App.css';
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Cards from "./components/Cards";
import DataAnalysis from "./components/DataAnalysis";
import WebDevelopment from './components/WebDevelopment';
import Academics from './components/Academics';
import Bjj from './components/Bjj'

function App() {
  return (
    <div>
        <NavigationBar/>
        <Intro/>
        <Cards/>
        <DataAnalysis/>
        <WebDevelopment/>
        <Bjj/>
        <Academics/>  
    </div>
  );
}

export default App;
