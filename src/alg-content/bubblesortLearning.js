import {useCollapse} from 'react-collapsed';

import bigO from '../images/bubbleSortBigO.png';
import bubbleImage from '../images/bubbleSortVis.png';


let titleCard = 'Bubble Sort';
let description = 'Swaps the positions of indices when the larger value is to the left of a smaller value. The algorithm continues till either end of the array reaches a point in the array that is sorted.';
let bigODescription = 'The Bubble Sort is not known for its speed. The O(n) for Bubble Sort comes to O(n^2), due to having to make every comparison one-by-one. The time for an array to be sorted with the Bubble Sort will increase exponentially the larger the array is.';

const BubbleSortLearning = () => {

    // declares a collapsible object
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (

        <div className='collapsible'>

            <button className="header" {...getToggleProps()}>
                {isExpanded ? '∆ | Bubble Sort' : '∇ | Bubble Sort'}
            </button> 
            
            <div {...getCollapseProps()}>
                <div className='learning'>
                    <div className="title-card">
                        <h1>{titleCard}</h1>
                    </div>
            
                    <div className='alg-description'>
                        <p>
                            {description}
                        </p>
                        <br/>
                        <p>
                            {bigODescription}
                        </p>
                    </div>
                </div>
                <div className='images'>
                    <img src={bubbleImage} alt='Bubble Sort Visualization'/>
                    <img src={bigO} alt='Bubble Sort Big O Notation'/>
                </div>
            </div>

        </div>
        
    );
}

export default BubbleSortLearning;