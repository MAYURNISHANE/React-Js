import Login from './Login/Login';
import Register from './Register/Register';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState('Login');
  const redirectPage = () => {
    page === 'Login' ? setPage('Signup') : setPage('Login')
  }
  return (
    <div className="App">
      <button className='btns' onClick={() => redirectPage()} > {page === 'Signup' ? 'Login' : 'Singup'}</button>
      {page === 'Login' ?
        <div>
          <Login />
        </div>
        :
        <div>
          <Register />
        </div>
      }
    </div>
  );
}

export default App;
