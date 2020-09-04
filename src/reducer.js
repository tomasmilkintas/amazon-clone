export const initialState = {
    basket: [
        {
            id: "09098",
            title: `Echo Dot (3rd Gen) Smart Speaker with Alexa`,
            price: 29.99,
            rating: 2,
            image: "https://scx2.b-cdn.net/gfx/news/hires/2020/1-alexa.jpg",
        },
        {
            id: "19098",
            title: `Echo Dot (3rd Gen) Smart Speaker with Alexa`,
            price: 29.99,
            rating: 2,
            image: "https://scx2.b-cdn.net/gfx/news/hires/2020/1-alexa.jpg",
        },
    ],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            //Logic for removing item from basket

            //we cloned the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(`cant remove product (id: ${action.id}) as its not in basket`);
            }

            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
}

export default reducer;
