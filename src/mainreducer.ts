
const intialState =0;

function mainReducer(state =intialState,action:addCounterAction){

    if (action.type == "ADD_TO_COUNTER"){
        console.log("hello")
        return state+1;
    }
    return state;
}

export default mainReducer

type addCounterAction ={
    type:string
}