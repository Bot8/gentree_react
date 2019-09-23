import { treeService } from 'services/tree';

export const PERSON_DETAIL_OPEN = 'PERSON_DETAIL_OPEN';
export const PERSON_DETAIL_CLOSE = 'PERSON_DETAIL_CLOSE';
export const PERSON_DETAIL_REQUEST = 'PERSON_DETAIL_REQUEST';
export const PERSON_DETAIL_SUCCESS = 'PERSON_DETAIL_SUCCESS';
export const PERSON_DETAIL_FAIL = 'PERSON_DETAIL_FAIL';

export function openDetail(id) {
    return dispatch => {
        dispatch({
            type: PERSON_DETAIL_REQUEST,
        });
        
        treeService.getDetail(id, (detail) => {
            dispatch({
                type: PERSON_DETAIL_SUCCESS,
            });
            
            dispatch({
                type: PERSON_DETAIL_OPEN,
                payload: detail,
            });
        });
    };
}

export function closeDetail() {
    return dispatch => {
        dispatch({
            type: PERSON_DETAIL_CLOSE,
        });
    };
}
