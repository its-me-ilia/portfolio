import actions from "../../Actions";

const initialState = {
    lang: 'ka'
}
const langReducer = (state=initialState, action) => {
    switch(action.type){
        case actions.CHANGE_LANG:
            return {
                ...state,
                lang: action.data
            };
        default: return state;
    };
};

export default langReducer;