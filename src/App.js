
import { useState } from 'react';
import './App.css';
import { Message } from './components/Message';
import { User } from './components/User'
import { Cart } from './components/Cart'

function App() {
  const [userName, setUserName] = useState('alex')
  const [cartWidth,setCartWidth] = useState(10)
  return (
    <div className="App">
      <Message userName="Papanya" changeName={setUserName} />
      <Message userName={userName} secondName='petrov' />
      <User></User>
      <Cart width={cartWidth} changeWidth={setCartWidth}>tovar</Cart>
    </div>
  );
}

export default App;
