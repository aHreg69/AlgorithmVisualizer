import React from 'react';
//import quickSort from './quicksort.js';
import { newQuickSort } from './quicksort';


export default class ArrayContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            visArray: []
        };
    }

    initArray() {
        const visArray = []
        for (let i = 0; i < 20; i++) {
            visArray.push(randomIntFromInterval(5,500));
        }
        this.setState({visArray});
    }

    componentDidMount() {
        this.initArray();
    }


    render() {
         
        const {visArray} = this.state;

         return (
            <div className="container">

                <div className="alg-buttons">
                    <button onClick={() => this.initArray()}>Reset</button>
                    {/* <button onClick={() => quickSort(visArray)}>Quick Sort</button> */}
                    <button onClick={() => newQuickSort(visArray, 0, visArray.length-1)}>Quick Sort</button>
                </div>

                <div className="arrContainer">
                    {visArray.map((value, idx) => (
                        <div 
                            className="array-bar" 
                            key={idx}
                            style = {{height: `${value}px`}}
                        />  
                    ))}
                </div>
                
                
             </div>
             
          );
        
    }
    

}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
