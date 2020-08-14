import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);

  }



  // componentDidMount() {

  //   this.setState({ alg });
  // }
  handleChange = (event) => {

    this.props.callbackFromApp(event.target.value)
  }


    render() {

      return (
          <div className="container center">
            <nav className="menu">
              <h1 className="menu__logo"> SortingApp </h1>
              <a className="menu__link dropdown">
                Algorithms
              <span className="tri"></span>
                <ul className="dropdown-list">
                  <button className="sorts" onClick={() => this.props.changeAlg("merge")} > Merge Sort</button>
                  <button className="sorts" onClick={() => this.props.changeAlg("quick")} > Quick Sort</button>
                  <button className="sorts" onClick={() => this.props.changeAlg("selection")} > Selection Sort</button>
                  <button className="sorts" onClick={() => this.props.changeAlg("insertion")} > Insertion Sort</button>
                </ul></a>
            </nav>
            <div className="enter_num">
              
              {this.props.alg}
            </div>
            <div className="input">
              <form>
                  <input type="text" size="50" placeholder = "Enter Numbers Here (seperate by commas)" value = {this.state.grid} onChange={this.handleChange}/>
              </form>
            </div>
          </div>
        );
  }   
}

