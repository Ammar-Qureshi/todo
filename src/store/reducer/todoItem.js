import todoAction from '../action/todoAction';
// import firebase from 'firebase';

let intialState = {};
function todoItem(state = intialState, action) {
    switch (action.type) {
        case todoAction.ADDTODO:
            return Object.assign({}, state, { [action.val.key]: action.val });
        case todoAction.DELETETODO:
            // delete state[action.key];
            let clone = Object.assign({}, state);
            delete clone[action.key];
            console.log("phonch gaya ", action.key);
            return clone;
        case todoAction.EDITTODO:
            let obj = Object.assign({}, state);
            obj[action.key].done = action.done;
            return Object.assign({}, state,obj);
            case todoAction.CHECKTODO:
            let obj1 = Object.assign({}, state);
            obj1[action.key].todo = action.inputval;
            return Object.assign({}, state,obj1);
        default:
            return state;
    }
}

export default todoItem;