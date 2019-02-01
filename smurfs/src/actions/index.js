import axios from 'axios';


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GOT_SMURFS ='GOT_SMURFS';
export const ADDING_SMURF ='ADDING_SMURF';
export const ADDED_SMURF ='ADDED_SMURF';
export const LOAD_SMURF ='LOAD_SMURF';
export const ERROR ='ERROR';


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs =()=>dispatch=>{
  dispatch({type:LOAD_SMURF})
  return axios
  .get('http://localhost:3333')
  .then(res=> {
    return dispatch({type:GOT_SMURFS, payload: res.payload})
  })
  .catch(err=>{
    return dispatch({type:ERROR, payload:err})
  });
};

export const addSmurf =(name,age,height)=>dispatch=>{
  dispatch({type:ADDING_SMURF})
  return axios
  .post('http://localhost:3333', {name,age,height})
  .then(res=>{
 
    return dispatch({type:ADDED_SMURF,payload:res.data})
  })
  .catch(err=>{
    return dispatch({type:ERROR,payload:err});
  });
};


