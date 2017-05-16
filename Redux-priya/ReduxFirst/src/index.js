import { createStore } from 'redux';

const stateInit = {
    counter: 0
}

const reducer = (state = stateInit, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'EVEN': {
            const  even = state.counter + action.data
            if(even%2 === 0){
                console.log('counter is even'); 
                return{...state, even};                   
            }
            else{
                console.log("counter is odd");
            }
        }
        case 'INC': {
            const counter = state.counter + action.data;
            return { ...state, counter };
        }
        case 'DEC': {
            const counter = state.counter - action.data;
            return { ...state, counter };
        }
    }
    return state;
}


//const store = createStore(reducer, initial value (if not using object));
const store = createStore(reducer);
store.subscribe(() => {
    console.log("New State with updated store value", store.getState())
})


//Action creator
const incrementAction = (data) => {
    return { type: 'INC', data }
}

const decrementAction = (data) => {
    return { type: 'DEC', data }
}

//calling by action creators 

store.dispatch(incrementAction(5));
store.dispatch(incrementAction(10));
store.dispatch(decrementAction(4));


store.dispatch({ type: 'INC', data: 6 });
store.dispatch({ type: 'EVEN', data: 8 });
store.dispatch({ type: 'DEC', data: 3 });
store.dispatch({ type: 'INC', data: 2 });
store.dispatch({ type: 'DEC', data: 2 });
store.dispatch({ type: 'EVEN', data: 5 });
store.dispatch({ type: 'p', data: 6 });










