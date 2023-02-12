const initState ={
  cart :[]
}
function cartReducer(state=initState,action){
  switch(action.type){
    case'ADD_PRODUCT':
      return{
        ...state,
        cart:state.cart.includes(action.payload) ? state.cart :[...state.cart,action.payload]
      }
    case 'REMOVE_PRODUCT':
      return{
        ...state,
        cart:state.cart.filter((pr)=>pr.id != action.payload)
      }
    default:
      return state;
  }
}export default cartReducer;