import React, { Component } from 'react';
import Moment from 'moment';
import Conf from './../config';

class Getgit extends Component {

    constructor() {
      super();
      this.state = { };
    }

    componentDidMount(){
      fetch(Conf.API_URL + Conf.REPOSITORY.User + '/' + Conf.REPOSITORY.Name + '/commits',
      {
        [Conf.REPOSITORY.Name]: Conf.REPOSITORY.Auth
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
      if (!this.state.data) {
          return (<div>LOADING...</div>);
      }
      const data = this.state.data;
      return (
        <div class="m-1">
          <div class="row border border-white font-weight-bold">
            <div class="col-3 border-right border-white">Nombre</div>
            <div class="col-3 border-right border-white">Fecha</div>
            <div class="col-6">Mensaje</div>
          </div>
          {data.map(val => (
            <div class="row border border-white" id={val.commit.author.name}>
                <div class="col-3 border-right border-white">{val.commit.author.name}</div>
                <div class="col-3 border-right border-white">{Moment(val.commit.author.date).format('DD/MM/yyyy HH:mm:ss')}</div>
                <div class="col-6 ">{val.commit.message}</div>
            </div>
          ))}
        </div>
      );
  }
};

export default Getgit;