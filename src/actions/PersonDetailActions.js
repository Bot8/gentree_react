import { treeService } from 'services/tree';

const PERSON_DETAIL_OPEN = 'PERSON_DETAIL_OPEN';
const PERSON_DETAIL_CLOSE = 'PERSON_DETAIL_CLOSE';
const PERSON_DETAIL_REQUEST = 'PERSON_DETAIL_REQUEST';
const PERSON_DETAIL_SUCCESS = 'PERSON_DETAIL_SUCCESS';
const PERSON_DETAIL_FAIL = 'PERSON_DETAIL_FAIL';

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
