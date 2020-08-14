import React, { Component } from "react";
import "./SortingApp.css";

export default class SortingApp extends Component {
    constructor(props) {
        super(props);
        this.state = {            
        };
          }
    
    render() {

        return (
            <>
            <button class = "sort-button" onClick={() => this.props.visualizeSort(this.props.alg)}> Sort!</button>
            
            <div classname="grid">
                {this.props.grid}
                
            </div>
            </>
        );
    }
}








