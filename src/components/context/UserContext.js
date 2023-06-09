import {createContext} from "react";

const UserContext = createContext({});

function reducer(state, action) {
    switch (action.type) {
        case "flag": {
            return {flag: action.flag};
            break;
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
        case "information": {
            return {information: action.information};
        }
        case "step": {
            return {step: action.step};
        }

        default:
            return state;
    }
}

function action(state, dispatch) {
    debugger;
    return {
        flagData: state,
        flag: (data) => dispatch({type: "flag", ...data}),
        accountData: state,
        accountNumber: (data) => dispatch({type: "account", ...data}),
        destinationAccountNumber: (data) => dispatch({type: "destinationAccountNumber", ...data}),
        destinationAccountNumberData: state,
        amountHavaleMellati: (data) => dispatch({type: "amountHavaleMellati", ...data}),
        amountHavaleMellatiData: state,
        information: (data) => dispatch({type: "information", ...data}),
        informationData: state,
        step: (data) => dispatch({type: "step", ...data}),
        stepData: state,

    };
}


export {UserContext, reducer, action};
