import React, { Component } from "react";

import Navbar from './components/Navbar/Navbar'
import SortingApp from './components/Navbar/SortingApp/SortingApp'

import {MergeSort} from './components/Navbar/Algorithms/Merge'


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      alg: "",
      grid: [],
      input: ""

    };

    this.changeAlg = this
        .changeAlg 
        .bind(this);  
        
    this.visualizeSort = this
        .visualizeSort
        .bind(this);  
      }

    componentDidMount() {
        // const grid = getInitialGrid(2);
      
        const grid = [<td> 0 </td>, <td> 0 </td>, <td> 0 </td>, <td> 0 </td>, <td> 0 </td>, <td> 0 </td>, <td> 0 </td>, <td> 0 </td>]
        this.setState({ grid });
    }

    myCallback = (inp) => {
      this.setState({input: inp})
    }

    changeAlg (algName)   {
      const alg = algName

      this.setState({alg})
    }
  
    visualizeSort(alg) {
      var grid2 = []

      if(alg == null){
        for(let i = 0; i<this.state.input.size; i++){
          grid2.push(this.state.input[i])
        }
        console.log(<td>{grid2}</td>)
      }
      else if(alg === "merge"){
        // console.log(typeof this.state.input)
        grid2 = MergeSort(this.state.input)

      }

      this.setState({grid: grid2 })

      // console.log(this.state.input)
  }  


  render() {
    const { alg } = this.state  ;

    
    return (
      <div className = "App">
        <div className = "nav">
          <Navbar
                alg={this.state.alg}
                changeAlg={this.changeAlg}
                grid = {this.state.grid}
                callbackFromApp = {this.myCallback}
          /> 
          {alg}
        </div>
        <div className = "sort">
          <SortingApp 
                grid={this.state.grid}
                visualizeSort={this.visualizeSort}
                alg={this.state.alg}
          />
        </div>

      </div>
    )
  } 
}
