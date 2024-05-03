
import './App.css';

import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';

import { NavBar } from './header/navbar';

import {VisualizerPage} from './pages/visualizerPage';

import {About} from './pages/about';




function App() {
  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/about"  element={<About/>}/>
          <Route path="/" element={<VisualizerPage/>}/>
        </Routes>
      </Router>
    </div>
    
        
  );
}

export default App;
