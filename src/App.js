import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Slyle/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyAFoKZ9a05OSoGI-Lok9ZDww7DKCn5Hx2Y",
  authDomain: "mrdonald-s.firebaseapp.com",
  databaseURL: "https://mrdonald-s.firebaseio.com",
  projectId: "mrdonald-s",
  storageBucket: "mrdonald-s.appspot.com",
  messagingSenderId: "54284575762",
  appId: "1:54284575762:web:d521da63f4a6dbf7ef24cb",
  measurementId: "G-E6S5TP8VM8"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
