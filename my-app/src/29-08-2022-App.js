import logo from './logo.svg';
import Login from './Componets/29082022/Login/Login';
import Register from './Componets/29082022/Register/Register';
import './App.css';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState('Login');
  const redirectPage = () => {
    page === 'Login' ? setPage('Signup') : setPage('Login')
  }
  return (
    <div className="App">
      <div>
        <button className='btns' onClick={() => redirectPage()} > {page === 'Signup' ? 'Login' : 'Singup'}</button>
        {page === 'Login' ?
          <div>
            <Login />
          </div>
          :
          <div>
            <Register/>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
