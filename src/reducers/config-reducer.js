const initialState = {
  boxColor: "#9147f3",
  timeZone: "America/Chicago"
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {...state, boxColor: action.payload }
    default:
      return state
  }
}
