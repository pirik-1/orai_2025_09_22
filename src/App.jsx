import './css/style.css';
import Hello from './components/Hello.jsx';
import {Flip,Flip2} from './components/Flip.jsx';
import Targyak from './components/Targyak.jsx';

function App() {
  return (
    <>
      <h1>Második React app</h1>
      <Flip />
      <Flip2 />
      <Hello />
      <Targyak />
    </>
  )
}

export default App
