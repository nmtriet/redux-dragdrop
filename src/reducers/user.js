import { LOAD_USER_LIST, REORDER_USER_LIST } from '../constants/';
import update from 'react-addons-update';

const initialState = null;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Load user list
        case LOAD_USER_LIST:
            return Object.assign({}, state, {
                list: action.data
            });

        // Reorder state when drag & drop items of user list
        case REORDER_USER_LIST:
            var data = action.data;

            return update(state, {
                list: {
                    [data.sourceId]: {
                        $set: data.targetValue
                    },
                    [data.targetId]: {
                        $set: data.sourceValue
                    }
                }
            });

        default:
            return state;
    }
};

export default reducer;