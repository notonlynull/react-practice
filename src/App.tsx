import AccordionsView from './accordion/AccordionView';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>La pagina che stai cercando non esiste.</p>
    </div>
  );
};

function App() {
  return <>


<Router>
<div>
  {/* Menu di navigazione */}
  <nav>
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>

      <Link to="/accordion">Accordion</Link>

      </li>
    </ul>
  </nav>

  {/* Definizione delle rotte */}
  <Routes>
    <Route path="/"/>
    <Route path="/accordion" element={<AccordionsView />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</div>
</Router>
  </>;
}

export default App;
