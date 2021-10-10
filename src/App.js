import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SelectPlan from "./Components/SelectPlan/SelectPlan"
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
    <Header/>
    <SelectPlan/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
