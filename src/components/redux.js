const redux = require('redux')
const createStore = redux.createStore
const BUY_KAJUKATLI = 'BUY_KAJUKATLI'
const BUY_GULABJAMUN = 'BUY_GULABJAMUN'
function buyKajukatli(){
    return {
        type : BUY_KAJUKATLI
    }
}
function buyGulabjamun(){
    return {
        type : BUY_GULABJAMUN
    }
}
const initialstate = {
    numofkajukatli : 10,
    numofgulabjamun : 20
}
const reducer = (state = initialstate,action)=>{
    switch (action.type){
        case BUY_KAJUKATLI : return{
            ...state,
            numofkajukatli : state.numofkajukatli-1
        }
        case BUY_GULABJAMUN : return{
            ...state,
            numofgulabjamun : state.numofgulabjamun-1
        }
        default : return state;
    }
}
const store = createStore(reducer)
store.dispatch(buyKajukatli())
store.dispatch(buyKajukatli())
store.dispatch(buyGulabjamun())
store.dispatch(buyGulabjamun())
store.dispatch(buyKajukatli())
store.dispatch(buyGulabjamun())


