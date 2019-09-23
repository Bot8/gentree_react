import { treeService } from 'services/tree';

export const TREE_REQUEST = 'TREE_REQUEST';
export const TREE_SUCCESS = 'TREE_SUCCESS';
export const TREE_FAIL = 'TREE_FAIL';

export function loadTree(id) {
    return dispatch => {
        
        dispatch({
            type: TREE_REQUEST,
        });
        
        treeService.loadTree((tree) => {
            dispatch({
                type: TREE_SUCCESS,
                payload: tree,
            });
        });
        
    };
}
