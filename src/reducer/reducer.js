export const reducer = (state, action) => {
    switch(action.type){
        case 'inc': return state + 1;
        case 'dec': if(state > 0) return state - 1;
        default : return state; 
    }

    // if (action.type === 'inc') {
    //     return state + 1
    // }
    // else if (action.type === 'dec') {
    //     if (state > 0) {
    //         return state - 1
    //     }
    //     else {
    //         return state
    //     }
    // }
}