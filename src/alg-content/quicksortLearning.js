import {useCollapse} from 'react-collapsed';

import bigO from '../images/quickSortBigO.png';

let titleCard = 'Quick Sort';
let description = 'Chooses an index in the array as a pivot. Values that are smaller than the pivot are moved to the left of the pivot, values that are larger than the pivot move to the right of the pivot.';

// export function setInfo (alg) {
//     if (alg === 1) {
//         titleCard = 'Bubble Sort';
//         description = 'This is the description for the Bubble Sort algorithm';
//     } else if (alg === 2) {
//         titleCard = 'Quick Sort';
//         description = 'This is the description for the Quick Sort algorithm';
//     }
// }



const QuickSortLearning = () => {

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
                    </div>
                </div>
                <div className='images'>
                    <img src={bigO} alt='Quick Sort Big O Notation'/>
                    {/* <img src={bubbleImage} alt='Bubble Sort Visualization'/> */}
                </div>
            </div>

        </div>
        
    );
}

export default QuickSortLearning;