export default function(state=false, action) {
    switch(action.type) {
        case 'STORE_ERROR': {
            return action.payload;
        }
        default: {
            break;
        }
    }
    return state;
};
