let initState = {
    items: [
        {
            "id": 1,
            "name": "ExpsaertSender",
            "sites": 0,
            "type": "email",
            "status": "blocked"
        },
        {
            "id": 2,
            "name": "Tag Commander",
            "sites": 0,
            "type": "tag_manager",
            "status": "blocked"
        },
        {
            "id": 3,
            "name": "Ysance",
            "sites": 0,
            "type": "dmp_crm",
            "status": "blocked"
        },
        {
            "id": 4,
            "name": "AT Internet",
            "sites": 1,
            "type": "analytics",
            "status": "enable"
        },
        {
            "id": 5,
            "name": "Content Square",
            "sites": 3,
            "type": "analytics",
            "status": "enable"
        },
        {
            "id": 6,
            "name": "Google Tag Manager",
            "sites": 2,
            "type": "tag_manager",
            "status": "enable"
        },
        {
            "id": 7,
            "name": "Heatmap",
            "sites": 1,
            "type": "heatmap",
            "status": "enable"
        },
        {
            "id": 8,
            "name": "Tealium",
            "sites": 0,
            "type": "dmp_crm",
            "status": "disable"
        },
        {
            "id": 9,
            "name": "Emarsys",
            "sites": 0,
            "type": "email",
            "status": "disable"
        }
    ]
    ,
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