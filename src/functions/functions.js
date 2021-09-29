const increment = () => {
    return {
        type:'INC_CNT',
    }
}

const decrement = () => {
    return {
        type:'DEC_CNT',
    }
}
const addItem = (val) => {
    return {
        type:"ADD_ITM",
        value:val,
    }
}
const deleteItem = (val) => {
    return {
        type:"DLT_ITM",
        value:val,
    }
}
const openTab = (val) => {
    return {
        type:"OPN_DET",
        value:val,
    }
}

const closeTab = () => {
    return {
        type:"CLS_DET",
    }
}

export {increment,decrement,addItem,deleteItem,openTab,closeTab}