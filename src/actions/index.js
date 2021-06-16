export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const ADD_TO_MEMORY = "ADD_TO_MEMORY";

export const COMBINE_MEMORY = "COMBINE_MEMORY";

export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({
        type:ADD_ONE
    });
}

export const applyNumber = (number) => {
    return({
        type:APPLY_NUMBER, 
        payload:number
    });
}

export const changeOperation = (operator) => {
    return({
        type: CHANGE_OPERATION,
        payload: operator 
    })
}

export const clearDisplay = () => {
    return({
        type: CLEAR_DISPLAY
    });
}

export const addToMemory = (memory) => {
    return({
        type: ADD_TO_MEMORY,
        payload: memory
    })
}

export const combineMemory = () => {
    return({
        type: COMBINE_MEMORY
    })
}

export const clearMemory = () => {
    return({
        type: CLEAR_MEMORY
    })
}