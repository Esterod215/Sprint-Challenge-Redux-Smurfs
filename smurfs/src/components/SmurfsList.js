import React from 'react';
import { connect } from 'react-redux';

class SmurfsList extends React.Component{
    render(){
       console.log(this.props);
        return(
            <div>
              {this.props.smurfs.map(smurf=>(
                 <h1 key={smurf.name}>{smurf.name}</h1>
              ))}
            </div>
        )
    };
}

const mapStateToProps =state =>{
    return{
        smurfs: state.smurfsReducer.smurfs
    }
}
export default connect(mapStateToProps, {})(SmurfsList)