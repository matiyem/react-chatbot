export function testMethod(create, update, getValueFromContext,setValueIntoContext) {
    debugger;
    // const data=getValueFromContext("flagData")
    // if (!data.flag) {
        const message = create("موعد پرداخت قسط شما فرا رسیده است آیا تمایل به پرداخت قسط خود دارید؟","pardakhtGhest")
        update(message);
        // setValueIntoContext("flag",true)
    // }
}
