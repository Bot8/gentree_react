import {
    PERSON_DETAIL_CLOSE,
    PERSON_DETAIL_OPEN,
    PERSON_DETAIL_REQUEST,
    PERSON_DETAIL_SUCCESS,
    PERSON_DETAIL_FAIL,
} from 'actions/PersonDetailActions';

const initialState = {
    isOpen: false,
    person: null,
    loading: false,
    error: '',
};

export function personDetailReducer(state = initialState, action) {
    switch (action.type) {
        case PERSON_DETAIL_REQUEST:
            return { ...state, loading: true, error: '', person: null };
        case PERSON_DETAIL_SUCCESS:
            return { ...state, loading: false, person: action.payload };
        case PERSON_DETAIL_FAIL:
            return { ...state, loading: false, error: action.payload.message };
        case PERSON_DETAIL_OPEN:
            return { ...state, isOpen: true };
        case PERSON_DETAIL_CLOSE:
            return { ...state, isOpen: false };
        default:
            return state;
    }
}
