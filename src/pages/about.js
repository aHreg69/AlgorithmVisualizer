import {Link} from 'react-router-dom';

export const About = () => {
    return (
        <div>
            <div className='about'>

                <h1>
                    About Page
                </h1>
                    <br/>
                <h3>
                    Know Your Algorithm was created using the React library. 
                </h3>
                    <br/>
                <p>
                    Below are the sources referenced for creating this project.
                </p>
                <br/>
            </div>

            <div className='source-links'>
                <h2>Source Links</h2>
            
                <a href='https://www.w3schools.com/dsa/dsa_algo_quicksort.php' rel='noopener' target='_blank'>
                    W3Schools: Quick Sort
                </a>
            <br/>
            <br/>
                <a href='https://www.w3schools.com/dsa/dsa_algo_bubblesort.php' rel='noopener' target='_blank'>
                    W3Schools: Bubble Sort
                </a>
            <br/>
            <br/>
                <a href='https://medium.com/@boisdequinh/my-first-react-project-a-sorting-visualiser-16fc668bf51f' rel='noopener' target='_blank'>
                    Medium: doisbequinh 'my-first-react-project-a-sorting-visualizer'
                </a>
            <br/>
            <br/>
                <a href='https://github.com/henryboisdequin/Sorting-Visualiser/tree/master' rel='noopener' target='_blank'>
                    GitHub: doisbequinh 'Sorting-Visualiser'
                </a>
            <br/>
            <br/>
                <a href='https://github.com/anandman03/algorithm-visualizer-react-app/blob/main/src/components/visualizer.jsx' rel='noopener' target='_blank'>
                    GitHub: anandman03 'algorithm-visualizer-react-app'
                </a>
            <br/>
            <br/>
                <a href='https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial/blob/master/src/SortingVisualizer/SortingVisualizer.jsx' rel='noopener' target='_blank'>
                    GitHub: clementmihailescu Sorting-Visualizer-Tutorial
                </a>
            <br/>
            <br/>
            </div>
        </div>
    );
}