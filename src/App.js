import './App.css';

//Website content
import NavBar from './header/navbar';
import Welcome from './header/welcome';
import ArrayContainer from './alg-vis/visualizer';

//learning
import LearningSection from './alg-content/learningcontent';



function App() {
  return (
    <div className="App">
      <header className="content">
        <NavBar/>
        <Welcome/>
        <ArrayContainer/>
        <LearningSection/>
        
      </header>
    </div>
  );
}

export default App;
