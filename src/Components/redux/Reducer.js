import Products from "../Products"
import { ALERT_ERROR, GETCURRENT, GETORDERS, GETPRODUCT, REMOVE_ERROR, SIGNIN, SIGNUP } from "./ActionType"

const initialState = {
    user: null,
    products:[],
    orders:[],
    errors:[]

}

const reducer= (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      console.log(payload)
      localStorage.setItem("token",payload.token)
      return { ...state, user: payload.user }
  case SIGNIN:
    localStorage.setItem("token",payload.token)
    return { ...state,user:payload.user}
    case GETCURRENT:
      return { ...state, user:payload }
      case GETPRODUCT:
        return{...state,products:payload}
        case GETORDERS:
          return{...state,orders:payload.orders}
    case ALERT_ERROR:
      return { ...state, errors: [...state.errors, payload] }
      case REMOVE_ERROR:
        return { ...state, errors: []}
  default:
    return state
  }
}
export default reducer
