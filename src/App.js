// import './App.css';
import Footer from './componenets/Footer/Footer';
import Logo from './componenets/Logo/Logo';
import Navbar from './componenets/Navbar/Navbar';
import Page_1 from './componenets/Page_1/Page_1';
import Page_2 from './componenets/Page_2/Page_2';
import Page_3 from './componenets/Page_3/Page_3';
import Page_4 from './componenets/Page_4/Page_4';
import Page_5 from './componenets/Page_5/Page_5';
import Page_6 from './componenets/Page_6/Page_6';
import Page_7 from './componenets/Page_7/Page_7';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <Page_1/>
    <Page_2/>
    <Logo/>
    <Page_3/>
    <Page_4/>
    <Page_5/>
    <Page_6/>
    <Page_7/>
    <Footer/>
    </div>
  );
}

export default App;
