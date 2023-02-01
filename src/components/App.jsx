import './App.css';
//Components
import { Navbar } from './Navbar/Navbar';
import { ItemCount } from './ItemCount/ItemCount';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

export const App = () => {
  return (
  <>
    <Navbar nombre={" "}/>
    <ItemCount ValInicial={0} stock={15}/>
    <ItemListContainer greeting={"Prox productos"}/>
  </>
  )
}