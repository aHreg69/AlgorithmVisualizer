//alg learning
import QuickSortLearning from "./quicksortLearning";
import BubbleSortLearning from "./bubblesortLearning";

const LearningSection = () => {

    return (
        <div className='learning-section'>
            <h1>
                Learn More About:
            </h1>
            <div className = 'alg-learning'>
                <BubbleSortLearning/>
                <QuickSortLearning/>
            </div>
        </div>
        
    );



}

export default LearningSection;