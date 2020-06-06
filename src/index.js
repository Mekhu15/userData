import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import axios from "axios";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      users: [],
      name: null,
      title: null,
    };
  }
  componentDidMount()
  {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users : data })
      console.log(this.state.users)
    })
    .catch(console.log)
  }

  getUser = (event) =>
  {
   let d = event.target.value
    this.setState ({
    name: d
    })
  }

  render() {
    return (
     <div className="container">

        <div className="col-xs-12">
       
        <h1>Users</h1>
        <input
            type='text'
            className='form-control' style={{width: "550px"}}
            placeholder='Search by category and brand...'
            aria-label='Search'
            onChange={(e) => this.getUser(e)}
          /><br/>
        {this.state.users.filter((user)=>{
          if(this.state.name === null)
          return user;
          else if(user.name.toLowerCase().includes(this.state.name.toLowerCase()))
          return user;
         }). map((user) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
             {user.id}  
              </h6>
            </div>
          </div>
        ))}
       </div>
       </div>
    );
  }
}

render(<App />, document.getElementById('root'));
