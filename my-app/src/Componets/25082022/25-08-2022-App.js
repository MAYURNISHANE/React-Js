//import logo from './logo.svg';
//import Home from './component/24082022/Home';
import Card from './Card';
import burgerimg from './imgs/footer-logo.png'
//import './App.css';

function App() {
  let burgername1 = "this is a burger";
  let burgername2 = "this is not a burger";
  let para = "this is a burger logo";
  return (
    <div className="App">
      <Card
      title={burgername1}
      burgerimg={burgerimg}
      para={para}
      />    
       <Card
      title={burgername2}
      burgerimg={burgerimg}
      para={para}
      />     
          
    </div>
  );
}

export default App;
