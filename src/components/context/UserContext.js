import {createContext} from "react";

const UserContext = createContext({});

function reducer(state, action) {
    switch (action.type) {
        case "flag": {
            return {flag: action.flag};
        }
        case "account": {
            return {account: action.account};
        }
        case "destinationAccountNumber": {
            return {destinationAccountNumber: action.destinationAccountNumber};
        }
        case "amountHavaleMellati": {
            return {amountHavaleMellati: action.amountHavaleMellati};
        }

        default:
            return state;
    }
}

function action(state, dispatch) {
    return {
        flagData: state,
        flag: (data) => dispatch({type: "flag",...data}),
        accountData: state,
        accountNumber: (data) => dispatch({type: "account", ...data}),
        destinationAccountNumber: (data) => dispatch({type: "destinationAccountNumber", ...data}),
        destinationAccountNumberData: state,
        amountHavaleMellati: (data) => dispatch({type: "amountHavaleMellati", ...data}),
        amountHavaleMellatiData: state,

    };
}


export {UserContext, reducer, action};
