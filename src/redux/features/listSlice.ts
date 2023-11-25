// import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {IPositionData} from "@/shared/Position/ui/Position";
//
// type InitialState = {
//   list: IPositionData[]
// }
//
// const initialState:InitialState = {
//   list: []
// }
//
// export const list = createSlice({
//   name: 'list',
//   initialState,
//   reducers: {
//     addPosition: (state, action:PayloadAction<IPositionData>) => {
//       state.list.push(action.payload)
//     }
//   }
// })
//
// export const {addPosition} = list.actions
// export default list.reducer