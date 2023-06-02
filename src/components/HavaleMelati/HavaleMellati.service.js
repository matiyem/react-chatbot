import React from 'react';


export function startHavaleMellati(method) {
    debugger
    const greetingMessage = method.createMessage(method.actions.step.message, method.actions.step.widget);
    method.updateChatbotState(greetingMessage);
}

export function getDestinationAccountNumber(method) {
    const greetingMessage = method.createMessage("لطفا مبلغ حواله را وارد نمایید", "ChooseAccountHavaleMellati");
    method.updateChatbotState(greetingMessage);
}


// export function useValueTextBox(e, method) {
//     debugger;
//     method.actions.setValueIntoContext("destinationAccountNumber", e.target.value);
// }

// export function useValueTextBoxAmountHavale(e, method) {
//     debugger;
//     method.actions.setValueIntoContext("amountHavaleMellati", e.target.value);
//
// }


export function chooseAccountHavaleMellati(e, method) {
    debugger;
    // accountNumber({account: e.target.textContent});
    const message = method.actions.createMessage('لطفا شماره حساب مقصد را وارد نمایید.', "getAccountNumberHavaleMellati")
    method.actions.updateChatbotState(message);
}


export function amountHavaleMelati(e, method) {
    debugger;
    method.actions.setValueIntoContext("destinationAccountNumber", window.document.getElementById("destinationAccountNumberId").value);
    const message = method.actions.createMessage('لطفا مبلغ مورد نظر را وارد نمایید.', "amountHavaleMellati")
    method.actions.updateChatbotState(message);
}

export function confirmHavaleMelati(method) {
    method.actions.setValueIntoContext("amountHavaleMellati", window.document.getElementById("amountHavaleId").value);
    const message = method.actions.createMessage("آیا از عملیات خود اطمینان دارید؟", "confirmHavaleMellati");
    method.actions.updateChatbotState(message);
}

export function submitHavaleMelati(method) {
    debugger;
    const destinationAccountNumber = method.actions.getValueFromContext("destinationAccountNumberData")
    const data = {
        fromAccount: 496749,
        accountType: "جاری متمرکز اشخاص حقیقی انفردای",
        name: "رضا یعقوبی",
        accountNumber: "6131640743",
        accountType2: "جاری متمرکز کارکنان بانک",
        shenaseVariz: "",
        babat: "",
        karmozd: "300",
        shomareTarakonesh: "2010000517",
        date: "1402/02/01",
        time: "15:03:05",
        amount: window.document.getElementById("amountHavaleId").value,
        destinationAccount: window.document.getElementById("destinationAccountNumberId").value,

    }
    method.actions.setValueIntoContext("information", data);

    // accountNumber({account: e.target.textContent});
    // const { amountHavaleMellatiData } = useContext(UserContext);
    const message = method.actions.createMessage("حواله شما با مشخصات زیر با موفقيت انجام شد.", "receipt");
    debugger;
    method.actions.updateChatbotState(message);
}

export function onClickOnReceipt(method) {
    debugger;
    // Get the modal
    var container = document.getElementById("receipt-container");
    var closeId = document.getElementById("closeId");
    var hederId = document.getElementById("hederId");
    var titleLable = document.querySelectorAll("[id=titleId]");
    var valueLable = document.querySelectorAll("[id=valueId]");
    var div = document.querySelectorAll("[id=divId]");

    if (container.style.height === "300px") {
        container.style.height = "175px";
        container.style.width = "170px"
        hederId.style.fontSize = "4px"
        closeId.style.visibility="hidden"

        for (let i = 0; i < titleLable.length; i++) {
            titleLable[i].style.fontSize = "6px"
            titleLable[i].style.weight = "bold"
            valueLable[i].style.fontSize = "6px"
            div[i].style.height = "10px"
        }
    } else {
        container.style.height = "300px";
        container.style.width = "220px"
        hederId.style.fontSize = "6px"
        closeId.style.visibility="visible"


        for (let i = 0; i < titleLable.length; i++) {
            titleLable[i].style.fontSize = "10px"
            titleLable[i].style.weight = "bold"
            valueLable[i].style.fontSize = "10px"
            div[i].style.height = "20px"
        }
        // for (let j=0; j<div.length; j++){
        //     div[j].style.height = "15px"
        //
        // }
    }


//
// // Get the button that opens the modal
//     var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
//     var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks the button, open the modal
// //     btn.onclick = function() {
// //         modal.style.display = "block";
// //     }
//
// // When the user clicks on <span> (x), close the modal
// //     span.onclick = function() {
// //         modal.style.display = "none";
// //     }
//
// // When the user clicks anywhere outside of the modal, close it
// //     window.onclick = function(event) {
// //         if (event.target == modal) {
// //             modal.style.display = "none";
// //         }
// //     }

}


