import { TREE_REQUEST, TREE_SUCCESS, TREE_FAIL } from 'actions/TreeActions';

const initialState = {
    error: '',
    tree: null,
    loading: false,
};

export function treeReducer(state = initialState, action) {
    switch (action.type) {
        case TREE_REQUEST:
            return { ...state, loading: true, error: '', tree: null };
        case TREE_SUCCESS:
            return { ...state, loading: false, tree: action.payload };
        case TREE_FAIL:
            return { ...state, loading: true, error: action.payload.message };
        default:
            return state;
    }
}
