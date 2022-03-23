export const initialState = { actionLogs: [] };

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_ACTION_LOG":
      return { actionLogs: [...state.actionLogs, { ...action.payload }] };
    default:
      throw new Error();
  }
}
