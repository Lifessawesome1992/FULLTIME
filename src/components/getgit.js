import React, { Component } from 'react';
import { Octokit } from "@octokit/core";

class Getgit extends Component {

    constructor() {
      super();
      this.state = { };
    }

    componentDidMount(){
      fetch(`https://api.github.com/repos/Lifessawesome1992/FULLTIME/commits`,
      {
        'LifessAwesome1992': '1c542c6c1e19498948f85d89e708d7f15b650449'
      })
        .then(response => response.json())
        .then(
            data => {
                this.setState({
                    data: data
                });
            }
        );      
    }
  

  render() {
      // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
      if (!this.state.data) {
          return (<div>LOADING...</div>);
      }

      // If we get to this part of `render`, then the user is loaded
      const data = this.state.data;
      return (
        <div>
          {data.map(val => (
            <div id={val.commit.author.name}>
                <div>{val.commit.author.name}</div>
                <div>{val.commit.author.date}</div>
            </div>
          ))}
        </div>
      );
  }
};

export default Getgit;