let initState = {
    items: [],
    isLoading: false
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
        case 'MAIN-PAGE_UNLOCK_ITEM':
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload ? {...item, status: "enable"} : item )
            }
        default:
            return state;
    }
}