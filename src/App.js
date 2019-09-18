import logo from './logo.svg';
import {SecondApp,FirstApp} from './FisrtApp'
import Header from './Header'
import './App.css';
import React,{Component} from 'react'
import Body from './Body'
const person=[
  {
    name : 'mohamed',
    age : [{num :36},{num : 0}]
  },
  {
    name : 'ahmed',
    age : [{num :32},{num : 25}]
  },
  {
    name : 'amira',
    
  }
]

class App extends Component{
  constructor(){
    super()
    this.state={
      name:'name',
      age:0,
      list : [
        {
          name : 'samar',
          age : [{num :36},{num : 0}]
        },
        {
          name : 'alia',
          age : [{num :32},{num : 25}]
        },
        {
          name : 'amira',
          
        }
      ],
      person : [
        {
          name : 'mohamed',
          age : [{num :36},{num : 0}]
        },
        {
          name : 'ahmed',
          age : [{num :32},{num : 25}]
        },
        {
          name : 'amira',
          
        }
      ]
      }
    
  }
  

  OnChange =() =>{
    this.setState({
      name:'mohamed',
      list : this.state.person
    })
  }
  render(){
    return(
      <div>
        <Header object={this.state.person}/>
        <Body object={this.state.list}/>
        <h1>{this.state.name}</h1>
        <input type='button' onClick={this.OnChange}  value='change name'/>

      </div>
    )
  }
     
}

export default App;
