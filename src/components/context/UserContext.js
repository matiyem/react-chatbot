import { createContext } from "react";

const UserContext = createContext({});

function reducer(state, action) {
    switch (action.type) {
        case "account": {
            return { account: action.account };
        }
        default:
            return state;
    }
}

function action(state, dispatch) {
    return {
        accountData: state,
        accountNumber: (data) => dispatch({ type: "account", ...data })
    };
}


export { UserContext, reducer, action };
