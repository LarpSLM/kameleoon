let initState = {
    items: [],
    search: '',
    sort: {property: 'name', decrease: false },
    isLoading: false,
}

export default function mainPageReducer (state = initState, action) {
    switch (action.type) {
        case 'MAIN-PAGE_GET_ITEMS_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'MAIN-PAGE_GET_ITEMS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                items: action.payload
            }
        case 'MAIN-PAGE_CHANGE_SORT':
            return {
                ...state,
                sort: {...state.sort,
                    property: action.payload,
                    decrease: action.payload === state.sort.property && !state.sort.decrease
                }
            }
        case 'MAIN-PAGE_CHANGE_FIELD_SEARCH':
            return {
                ...state,
                sort: {...state.sort},
                search: action.payload,
            }
        default:
            return state;
    }
}