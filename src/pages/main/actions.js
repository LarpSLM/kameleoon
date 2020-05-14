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

export const unlockItem = (id) => ({type: 'MAIN-PAGE_UNLOCK_ITEM', payload: id})