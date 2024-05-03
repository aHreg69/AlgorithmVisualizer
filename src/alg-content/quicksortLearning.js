import {useCollapse} from 'react-collapsed';

import bigO from '../images/quickSortBigO.png';
import quickPic from '../images/quickSortPic.png';

let titleCard = 'Quick Sort';
let description = 'Chooses an index in the array as a pivot. Values that are smaller than the pivot are moved to the left of the pivot, values that are larger than the pivot move to the right of the pivot.';
let bigODescription = 'The Quick Sort is all in the name. Despite having a worst case O(n) of O(n^2), the best (and average) case is O(n log(n)). The Worst case scenario is if the pivots were to either be the smallest or largest values, which leads to more recursive calls.';


const QuickSortLearning = () => {

    // declares a collapsible object
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (

        <div className='collapsible'>

            <button className="header" {...getToggleProps()}>
                {isExpanded ? '∆ | Quick Sort' : '∇ | Quick Sort'}
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
                    <img src={quickPic} alt='Quick Sort Picture'/>
                    <img src={bigO} alt='Quick Sort Big O Notation'/>
                </div>
            </div>

        </div>
        
    );
}

export default QuickSortLearning;