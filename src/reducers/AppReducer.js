const initialState = {}

export const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_INPUTS':
            return {...state, ...action.payload}
        default:
            return state
    }
}