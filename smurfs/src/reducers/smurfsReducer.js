/*
  Be sure to import in all of the action types from `../actions`
*/
import{
  LOAD_SMURF, 
  GOT_SMURFS,
  ADDING_SMURF,
  ADDED_SMURF,
  ERROR
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

let initialState =
{
    fetchingSmurfs: false,
  adiingSmurf: false,
    smurfs: [],
    error: null
  }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfsReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_SMURF:
    return {...state, fetchingSmurfs:true};
    case GOT_SMURFS:
    return {...state, smurfs:action.payload, addingSmurf:false};
    case ADDING_SMURF:
    return{...state, addingSmurf:true};
    case ADDED_SMURF:
    return{...state,smurfs:action.payload,addingSmurf:false};
    case ERROR:
   return{
      ...state,
    error: action.payload,
    fetchingSmurfs: false,
    addingSmurf:false
  };
  default:
  return state;
  }
};
