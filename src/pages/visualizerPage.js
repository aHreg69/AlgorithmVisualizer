
import {Welcome} from '../header/welcome';
import ArrayContainer from '../alg-vis/visualizer';
import {LearningSection} from '../alg-content/learningcontent';

export const VisualizerPage = () => {
    return (
        <div className='App'>
            <header className='content'>
                <Welcome/>
                <ArrayContainer/>
                <LearningSection/>
            </header>
        </div>
    );
}