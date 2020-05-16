import API from '../../api';

export const getItems = () => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MAIN-PAGE_GET_ITEMS_REQUEST'})
            const response = await API.app.getItems();
            dispatch({type: 'MAIN-PAGE_GET_ITEMS_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({type: 'MAIN-PAGE_GET_ITEMS_FAIL'})
            console.log(e)
        }
    }
}

export const changeSort = (id) => ({type: 'MAIN-PAGE_CHANGE_SORT', payload: `${id}`});

export const changeFieldSearch = (value) => ({type: 'MAIN-PAGE_CHANGE_FIELD_SEARCH', payload: value});