import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfsForm extends React.Component {
    state ={
        name:'',
        age:'',
        height:''
    }

    handleChanges=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    addSmurf =(e)=>{
        e.preventDefault();
        this.props.addSmurf(this.state.name,this.state.age,this.state.height);
    }

   
    render() {
        
    return (
      <form onSubmit={this.addSmurf}>
        <input 
        type="text"
        placeholder="Name"
        name="name"
        value={this.state.name}
        onChange={this.handleChanges}
        
        />

        <input
         
          value={this.state.age}
          name="age"
          type="number"
          placeholder="Age"
          onChange={this.handleChanges}
        />
        <input
          
          value={this.state.email}
          name="height"
          type="text"
          placeholder="Enter Smurf's Height"
          onChange={this.handleChanges}
          />
        
        <button type='submit'>Add New Smurf</button>
      </form>
    )
  }
}

export default connect(null,{addSmurf})(SmurfsForm);