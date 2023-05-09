export function testMethod(create, update, getValueFromContext,setValueIntoContext) {
    debugger;
    const data=getValueFromContext("flagData")
    if (!data.flag) {
        const message = create("salammmmmmmmmmmmmmmmm")
        update(message);
        setValueIntoContext("flag",true)
    }
}
