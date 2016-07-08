import { LOAD_USER_LIST, REORDER_USER_LIST } from '../constants/';

// Load filter list
export function loadUserList(data) {
    return {
        type: LOAD_USER_LIST,
        data: data
    };
}

// Reorder state when drag & drop items of user list
export function reorderUserList(sourceId, targetId, sourceValue, targetValue) {
    return {
        type: REORDER_USER_LIST,
        data: {
            sourceId: sourceId,
            targetId: targetId,
            sourceValue: sourceValue,
            targetValue: targetValue
        }
    };
}